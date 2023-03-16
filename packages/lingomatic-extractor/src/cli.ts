#! /usr/bin/env node
import { Command } from 'commander';
import { extractCommand } from './extract/command.js';

const program = new Command();
program
  .name('lingomatic extractor')
  .description(
    'Extract strings from your codebase and generate a translation file.'
  );

program.addCommand(extractCommand());

program.parse(process.argv);
