import { execSync } from 'child_process';
import { existsSync, readdirSync, readlinkSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';
import chalk from 'chalk';

export async function update(name) {
  const skillsDir = join(homedir(), '.claude', 'skills');

  try {
    const repos = readdirSync(skillsDir);

    if (repos.length === 0) {
      console.log(chalk.yellow('No skills installed to update.'));
      return;
    }

    const toUpdate = name ? [name] : repos;
    const notFound = toUpdate.filter(n => !repos.includes(n));

    if (notFound.length > 0) {
      console.error(chalk.red(`✗ Skills repository '${notFound[0]}' not found`));
      process.exit(1);
    }

    for (const repo of toUpdate) {
      const repoPath = join(skillsDir, repo);
      const isSymlink = existsSync(repoPath) && execSync(`test -L "${repoPath}" 2>/dev/null && echo true || echo false`, {
        encoding: 'utf-8'
      }).trim() === 'true';

      if (isSymlink) {
        // For symlinks, resolve to actual path and pull
        const actualPath = readlinkSync(repoPath);
        try {
          console.log(chalk.blue(`Updating ${repo} (from ${actualPath})...`));
          execSync(`cd "${actualPath}" && git pull`, { stdio: 'pipe' });
          console.log(chalk.green(`✓ Updated ${repo}`));
        } catch (error) {
          console.error(chalk.red(`✗ Failed to update ${repo}`));
        }
      } else {
        // For regular directories, also try git pull
        try {
          console.log(chalk.blue(`Updating ${repo}...`));
          execSync(`cd "${repoPath}" && git pull`, { stdio: 'pipe' });
          console.log(chalk.green(`✓ Updated ${repo}`));
        } catch (error) {
          console.error(chalk.red(`✗ Failed to update ${repo}`));
        }
      }
    }
  } catch (error) {
    if (!name) {
      console.log(chalk.yellow('No skills installed to update.'));
    } else {
      throw error;
    }
  }
}
