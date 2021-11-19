import path from 'path'
import { readEnv } from 'read-env'
import { toPrefix } from './util'

export type Options <T> = {
  defaults: T;
  format: false | 'camelcase' | 'pascalcase' | 'lowercase' | 'uppercase' | ((rawVarName: string) => string);
  includePrefix: boolean;
  prefix: string;
  sanitize: {
    [key in 'object' | 'array' | 'int' | 'float' | 'bool']?: boolean;
  };
  separator: string | false;
  source: Partial<{ [key: string]: string }>;
}

export function $parse<T = {}> (opts?: Partial<Options<T>>): Partial<T> {
  const prefix = toPrefix(opts?.prefix || process.env.npm_package_name || path.parse(process.cwd()).name)
  if (!prefix) { throw new Error('Invalid characters provided for prefix. The prefix can only contain letters, digits, -, _, @, and /.') }
  return { ...opts?.defaults, ...readEnv(prefix, opts) }
}

export default $parse
