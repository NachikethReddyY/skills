import { execSync } from 'child_process';
import { existsSync, mkdirSync, symlinkSync } from 'fs';
import { homedir } from 'os';
import { join, basename, dirname } from 'path';
import chalk from 'chalk';
import { normalizeRepo, ensureSkillsDir } from '../utils.js';
import { selectAgents, ensureAgentSkillsDir } from '../agents.js';

export async function add(repo, options = {}) {
  const normalized = normalizeRepo(repo);
  const installName = basename(normalized.path);

  console.log(chalk.blue(`📦 Installing skills from ${normalized.repo}...`));

  // Select agents to install to
  let agents;
  if (options.dir) {
    // Custom directory specified
    agents = [{ name: 'Custom', path: options.dir }];
  } else {
    // Prompt user to select agents
    agents = await selectAgents(options);
  }

  if (agents.length === 0) {
    console.error(chalk.red('✗ No agents selected'));
    process.exit(1);
  }

  console.log(chalk.dim(`Installing to ${agents.length} agent(s): ${agents.map(a => a.name).join(', ')}\n`));

  // Clone repository once
  const tempDir = join(homedir(), '.cache', 'skills-cli', installName);
  try {
    console.log(chalk.dim(`Cloning ${normalized.repo}...`));
    if (existsSync(tempDir)) {
      execSync(`rm -rf "${tempDir}"`);
    }
    mkdirSync(dirname(tempDir), { recursive: true });
    execSync(`git clone ${normalized.repo} "${tempDir}"`, { stdio: 'pipe' });
  } catch (error) {
    console.error(chalk.red(`✗ Failed to clone repository`));
    throw error;
  }

  // Verify skills structure
  const skillsPath = join(tempDir, 'skills');
  if (!existsSync(skillsPath)) {
    console.error(chalk.red(`✗ No 'skills' directory found in repository`));
    throw new Error('Invalid skills repository structure');
  }

  // Install to all selected agents
  const results = [];
  for (const agent of agents) {
    try {
      const agentSkillsDir = ensureAgentSkillsDir(agent.path);
      const targetPath = join(agentSkillsDir, installName);

      // Check if already installed
      if (existsSync(targetPath) && !options.force) {
        console.warn(chalk.yellow(`⚠ Already installed for ${agent.name}, skipping (use --force to overwrite)`));
        continue;
      }

      // Create symlink
      if (existsSync(targetPath)) {
        execSync(`rm -rf "${targetPath}"`);
      }
      symlinkSync(tempDir, targetPath, 'dir');
      console.log(chalk.green(`✓ Installed for ${agent.name}`));
      results.push({ agent: agent.name, path: targetPath });
    } catch (error) {
      console.error(chalk.red(`✗ Failed to install for ${agent.name}`));
    }
  }

  if (results.length === 0) {
    console.error(chalk.red('✗ Installation failed for all agents'));
    process.exit(1);
  }

  // List installed skills
  const skillCount = countSkills(skillsPath);
  console.log(chalk.green(`\n✓ ${skillCount} skills installed to ${results.length} agent(s)`));
  console.log(chalk.dim(`Run 'nachikethreddyy-skills list' to see all installed skills`));

  return { installed: installName, count: results.length, skillCount };
}

function countSkills(skillsDir) {
  try {
    const result = execSync(`find "${skillsDir}" -name "SKILL.md" | wc -l`, { encoding: 'utf-8' });
    return parseInt(result.trim(), 10);
  } catch {
    return 0;
  }
}

import { dirname } from 'path';
