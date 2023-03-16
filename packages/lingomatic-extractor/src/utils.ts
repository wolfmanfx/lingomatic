import Debug from 'debug';

export const rootDebug = Debug('lingomatic-extractor');

export const printVerboseHook = (thisCommand) => {
  const options = thisCommand.opts();

  if (options.verbose) {
    Debug.enable('lingomatic-extractor*');
    rootDebug(`CLI arguments`);
    rootDebug(options);
  }
};
