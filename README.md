<p align="center">
  <img src="https://raw.githubusercontent.com/coderevivehq/sourcemap-codec/main/.github/assets/coderevive-hero.png" alt="sourcemap-codec revived and maintained by CodeRevive" width="460">
</p>

<h1 align="center">sourcemap-codec</h1>

<p align="center">
  A maintained continuation of <a href="https://github.com/Rich-Harris/sourcemap-codec">sourcemap-codec</a> by <a href="https://github.com/coderevivehq">CodeRevive</a>.
</p>

<p align="center">
  <a href="LICENSE"><img alt="MIT license" src="https://img.shields.io/github/license/coderevivehq/sourcemap-codec?style=flat-square"></a>
</p>

## Overview

`sourcemap-codec` encodes and decodes the compact `mappings` property used by source maps. It is intended for tools that need to inspect, transform, or generate source-map segment data while retaining the original package's `encode` and `decode` API.

## Maintained by CodeRevive

This maintained continuation is published by [CodeRevive](https://github.com/coderevivehq). Security patches are our highest priority. We also review bug reports, feature requests, and suggestions from the community.

The project is based on the original [sourcemap-codec](https://github.com/Rich-Harris/sourcemap-codec) repository by Rich Harris and its contributors.

## Quick links

- [Overview](#overview)
- [Maintained by CodeRevive](#maintained-by-coderevive)
- [Installation & setup](#installation--setup)
- [Documentation](#documentation)
- [Compatibility and successor](#compatibility-and-successor)
- [Usage](#usage)
- [Contributing](#contributing)
- [Security & support](#security--support)
- [Credits & license](#credits--license)

## Installation & setup

```sh
npm install @coderevivehq/sourcemap-codec
```

The package provides a CommonJS entry point, a bundler-oriented ES module build, and TypeScript declarations. Node.js 18.18 or later is supported for package installation and development.

## Documentation

Detailed documentation is maintained with the source code in the [`docs/`](docs/) directory. Start with the [documentation overview](docs/index.md), then use the [Usage guide](docs/usage.md), [API reference](docs/api.md), and [migration guide](docs/migration.md).

## Compatibility and successor

This continuation preserves the original package's `encode(mappings)` and `decode(mappings)` API under the `@coderevivehq` scope. The original author directs new adopters to the actively maintained [`@jridgewell/sourcemap-codec`](https://github.com/jridgewell/sourcemaps/tree/main/packages/sourcemap-codec), which should generally be preferred for new projects. CodeRevive does not claim to replace or supersede that project.

## Usage

```js
const { decode, encode } = require('@coderevivehq/sourcemap-codec');

const decoded = decode(';EAEEA,EAAE,EAAC,CAAE;ECQY,UACC');
const encoded = encode(decoded);
```

See the [Usage guide](docs/usage.md) for a complete round-trip example and the [API reference](docs/api.md) for the mapping data types.

## Contributing

Bug reports, focused improvements, and documentation updates are welcome through [GitHub issues](https://github.com/coderevivehq/sourcemap-codec/issues) and [pull requests](https://github.com/coderevivehq/sourcemap-codec/pulls). Run `npm test` before submitting a change.

## Security & support

Report security concerns privately through the repository's [Security](https://github.com/coderevivehq/sourcemap-codec/security) page. For usage questions and ordinary bugs, open a [GitHub issue](https://github.com/coderevivehq/sourcemap-codec/issues) with a minimal reproduction when possible.

## Credits & license

This project is a maintained continuation of [Rich-Harris/sourcemap-codec](https://github.com/Rich-Harris/sourcemap-codec). Original code and CodeRevive-authored changes are licensed under the MIT License. Original copyright notices are retained in [LICENSE](LICENSE).
