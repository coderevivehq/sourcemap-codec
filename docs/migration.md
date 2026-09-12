---
title: Migration
description: Choose and migrate to a maintained source-map codec package.
navOrder: 6
---

# Migration

## Choose the package

For new development, prefer the actively maintained [`@jridgewell/sourcemap-codec`](https://github.com/jridgewell/sourcemaps/tree/main/packages/sourcemap-codec). It is the successor recommended by the original author and provides the established `encode` and `decode` API.

Use `@coderevivehq/sourcemap-codec` when you specifically need a CodeRevive-maintained continuation of the original codebase. It preserves the original API under a new package scope and does not claim to replace the successor.

## Move from the original package to CodeRevive

Replace the dependency:

```sh
npm uninstall sourcemap-codec
npm install @coderevivehq/sourcemap-codec
```

Then update the module specifier while keeping the function calls unchanged:

```js
// Before
const { decode, encode } = require('sourcemap-codec');

// After
const { decode, encode } = require('@coderevivehq/sourcemap-codec');
```

Run the consuming project's source-map tests after changing the dependency.

## Move to the maintained successor

```sh
npm uninstall sourcemap-codec
npm install @jridgewell/sourcemap-codec
```

Update the module specifier to `@jridgewell/sourcemap-codec`, consult that project's current documentation for its supported environments and package exports, and run the consuming project's tests.
