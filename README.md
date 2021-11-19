![boca](https://user-images.githubusercontent.com/24438483/142631409-107a8c31-b3ea-4db9-959c-2f1c1ba5e844.png)

[![npm](https://img.shields.io/npm/v/boca?color=blue)](https://npmjs.com/package/boca)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/boca?color=success)](https://bundlephobia.com/package/boca)
[![npm install size](https://packagephobia.com/badge?p=boca)](https://packagephobia.com/result?p=boca)
[![maintainability](https://img.shields.io/codeclimate/maintainability/moducate/boca)](https://codeclimate.com/github/moducate/boca)
[![code coverage](https://img.shields.io/codeclimate/coverage/moducate/boca)](https://codeclimate.com/github/moducate/boca)
![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/boca)
[![dependencies](https://img.shields.io/badge/dependencies-1-success)](https://www.npmjs.com/package/boca?activeTab=dependencies)

- 💻 **Environment variables.** Parses environment variables using your project's package.json name as a default prefix!
- 📁 **Nested variables.** Environment variable names are split by `__` and transformed into nested objects automatically!
- 💯 **Zero configuration.** Boca works out-of-the-box using sensible defaults with no configuration required!
- 💪 **TypeScript.** Fully typed and self-documenting!

## 🚀 Quick Start

### Install

```bash
# npm
npm i boca

# or yarn
yarn add boca
```

### Import

```js
// ESM / TypeScript
import { $parse } from "boca";

// or CommonJS
const { $parse } = require("boca");
```

### Parse

```js
// process.env = { BOCA_HOST: '0.0.0.0', BOCA_PORT: '3000' }
const config = $parse({ prefix: 'boca' });

console.log(JSON.stringify(config));
// => { "host": "0.0.0.0", "port": 3000 }
```

## 📃 Default Values

See [`options.defaults`](#optionsdefaults).

## 📤 Default Export

`$parse` is also exported as the default member so you can import Boca and parse your
environment variables in one line:

```js
const config = require("boca")();
```

## 💪 TypeScript Generics

`$parse` supports generics so you can have type definitions for your parsed environment variables:

```ts
const config = $parse<{ host: string; port: number }>();
// => config.host and config.port now have type definitions
```

## ⚙ Options

You can supply options to `$parse` to configure Boca's parsing behaviour.

### `options.defaults`

Any default values that should be used if an environment variable is not found.

### `options.format`

Please see `read-env`'s [documentation on this option](https://github.com/yatki/read-env#optionsformat) as that is the
underlying library used by Boca to parse environment variables.

### `options.includePrefix`

Whether the environment variable name prefix should be included or removed after being parsed by Boca.

> By default, this is false (so the prefix is removed).

### `options.prefix`

This is the prefix that will be used to filter out environment variables.

`@` characters are removed, and `-` and `/` characters are replaced with `_` to support NPM scoped package names.

For example, if the supplied prefix is `@moducate/houston`, Boca will look for environment variables prefixed with `MODUCATE_HOUSTON_`.

> By default, your project's package.json name or current working directory name is used.

### `options.sanitize`

Please see `read-env`'s [documentation on this option](https://github.com/yatki/read-env#optionssanitize) as that is the
underlying library used by Boca to parse environment variables.

### `options.separator`

The separator used to identify and transform nested objects.

If set to false, nested objects are disabled.

> By default, the separator for nested objects is `__`.

### `options.source`

The source to read environment variables from.

> By default, `process.env` is used.

## ⚖ License

Boca is licensed under the [`MIT License`](LICENSE).

## Attribution

Boca's banner background is sourced from SVGBackgrounds.com.
