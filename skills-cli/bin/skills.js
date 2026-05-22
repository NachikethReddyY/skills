#!/usr/bin/env node

import { Command } from 'commander';
import { add } from '../lib/commands/add.js';
import { list } from '../lib/commands/list.js';
import { remove } from '../lib/commands/remove.js';
import { update } from '../lib/commands/update.js';

const program = new Command();

program
  .name('skills')
  .description('CLI tool for installing and managing reusable agent skills')
  .version('1.0.0');

program
  .command('add <repo>')
  .description('Install a skills repository to one or more agents')
  .option('-d, --dir <path>', 'Custom installation directory')
  .option('-f, --force', 'Overwrite existing installation')
  .option('-a, --all', 'Install to all possible agents')
  .option('--claude', 'Install to Claude Code')
  .option('--hermes', 'Install to Hermes')
  .option('--pi', 'Install to Pi')
  .option('--codex', 'Install to Codex')
  .option('--agents', 'Install to generic .agents directory')
  .action(async (repo, options) => {
    try {
      await add(repo, options);
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  });

program
  .command('list')
  .description('List installed skills repositories')
  .action(async () => {
    try {
      await list();
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  });

program
  .command('remove <name>')
  .description('Remove an installed skills repository')
  .option('-f, --force', 'Skip confirmation')
  .action(async (name, options) => {
    try {
      await remove(name, options);
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  });

program
  .command('update [name]')
  .description('Update installed skills repository (all if no name specified)')
  .action(async (name) => {
    try {
      await update(name);
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
