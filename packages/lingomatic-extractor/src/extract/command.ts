import * as fs from 'fs';
import { Command } from 'commander';
import { printVerboseHook, rootDebug } from '../utils.js';
import * as process from 'process';
import { lingomaticBase } from '@wamas/lingomatic-base';

const debug = rootDebug.extend('extract');
const debugError = rootDebug.extend('extract:error');

export const extractCommand = () => {
  const command = new Command('extract');
  command
    .argument('[config]', 'path to the config file')
    .option('--verbose', 'output debug logs', false)
    .hook('preAction', printVerboseHook)
    .action(async (path, options) => {
      if (path && !fs.existsSync(path)) {
        debugError('invalid path provided');
        process.exit(1);
      }

      const file = fs.readFileSync(path, 'utf8');
      const config = JSON.parse(file);

      debug(lingomaticBase('demo') + config.context['AREA_BASED_PICKING']);
    });
  return command;
};
