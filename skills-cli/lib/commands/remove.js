import { existsSync, rmSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';
import chalk from 'chalk';
import readline from 'readline';

export async function remove(name, options = {}) {
  const skillsDir = join(homedir(), '.claude', 'skills');
  const targetPath = join(skillsDir, name);

  if (!existsSync(targetPath)) {
    console.error(chalk.red(`✗ Skills repository '${name}' not found`));
    process.exit(1);
  }

  if (!options.force) {
    const answer = await askConfirmation(`Remove '${name}' from ${skillsDir}?`);
    if (!answer) {
      console.log(chalk.yellow('Cancelled.'));
      return;
    }
  }

  try {
    rmSync(targetPath, { recursive: true, force: true });
    console.log(chalk.green(`✓ Removed '${name}'`));
  } catch (error) {
    console.error(chalk.red(`✗ Failed to remove '${name}'`));
    throw error;
  }
}

function askConfirmation(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(chalk.yellow(`${question} (y/n) `), (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes');
    });
  });
}
