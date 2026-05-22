import { readdirSync, statSync, readFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';
import chalk from 'chalk';

export async function list() {
  const skillsDir = join(homedir(), '.agents', 'skills');

  try {
    const repos = readdirSync(skillsDir);

    if (repos.length === 0) {
      console.log(chalk.yellow('No skills installed. Run: skills add username/skills'));
      return;
    }

    console.log(chalk.bold('\n📚 Installed Skills Repositories\n'));

    for (const repo of repos) {
      const repoPath = join(skillsDir, repo);
      const stat = statSync(repoPath);

      // Count SKILL.md files
      const skillCount = countSkills(repoPath);
      const isSymlink = stat.isSymbolicLink() ? ' (symlink)' : '';

      console.log(chalk.cyan(`${repo}${isSymlink}`));
      console.log(chalk.dim(`  Path: ${repoPath}`));
      console.log(chalk.dim(`  Skills: ${skillCount}`));

      // List individual skills
      const skills = getSkillNames(repoPath);
      if (skills.length > 0) {
        console.log(chalk.dim(`  Available: ${skills.join(', ')}`));
      }
      console.log();
    }
  } catch (error) {
    console.log(chalk.yellow('No skills installed yet. Run: skills add username/skills'));
  }
}

function countSkills(repoPath) {
  try {
    const skillsDirs = [
      join(repoPath, 'skills'),
      repoPath
    ];

    for (const dir of skillsDirs) {
      try {
        const result = execSync(`find "${dir}" -name "SKILL.md" 2>/dev/null | wc -l`, {
          encoding: 'utf-8',
          stdio: ['pipe', 'pipe', 'ignore']
        });
        const count = parseInt(result.trim(), 10);
        if (count > 0) return count;
      } catch {
        continue;
      }
    }
    return 0;
  } catch {
    return 0;
  }
}

function getSkillNames(repoPath) {
  try {
    const skillsDirs = [
      join(repoPath, 'skills'),
      repoPath
    ];

    for (const dir of skillsDirs) {
      try {
        const categories = readdirSync(dir).filter(f => {
          const stat = statSync(join(dir, f));
          return stat.isDirectory();
        });

        const skills = [];
        for (const category of categories) {
          const categoryPath = join(dir, category);
          const skillDirs = readdirSync(categoryPath).filter(f => {
            const stat = statSync(join(categoryPath, f));
            return stat.isDirectory();
          });
          skills.push(...skillDirs);
        }

        if (skills.length > 0) return skills.slice(0, 5);
      } catch {
        continue;
      }
    }
    return [];
  } catch {
    return [];
  }
}

import { execSync } from 'child_process';
