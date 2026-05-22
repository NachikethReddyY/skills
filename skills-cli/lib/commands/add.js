import { execSync } from 'child_process';
import { existsSync, mkdirSync, symlinkSync } from 'fs';
import { homedir } from 'os';
import { join, basename } from 'path';
import chalk from 'chalk';
import { normalizeRepo, ensureSkillsDir } from '../utils.js';

export async function add(repo, options = {}) {
  const normalized = normalizeRepo(repo);
  const skillsDir = options.dir ? join(options.dir) : join(homedir(), '.claude', 'skills');
  const installName = basename(normalized.path);
  const targetPath = join(skillsDir, installName);

  console.log(chalk.blue(`📦 Installing skills from ${normalized.repo}...`));

  // Ensure skills directory exists
  ensureSkillsDir(skillsDir);

  // Check if already installed
  if (existsSync(targetPath) && !options.force) {
    console.error(chalk.red(`✗ Skills already installed at ${targetPath}`));
    console.log(chalk.yellow(`Use --force to overwrite`));
    process.exit(1);
  }

  // Clone repository
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

  // Create symlink or copy
  try {
    if (existsSync(targetPath)) {
      execSync(`rm -rf "${targetPath}"`);
    }
    symlinkSync(tempDir, targetPath, 'dir');
    console.log(chalk.green(`✓ Installed to ${targetPath}`));
  } catch (error) {
    console.error(chalk.red(`✗ Failed to install skills`));
    throw error;
  }

  // List installed skills
  const skillCount = countSkills(skillsPath);
  console.log(chalk.green(`✓ ${skillCount} skills available`));
  console.log(chalk.dim(`Run 'skills list' to see all installed skills`));

  return { installed: installName, path: targetPath, skillCount };
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
