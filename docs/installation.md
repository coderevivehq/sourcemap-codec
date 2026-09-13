---
title: Installation
description: Install sourcemap-codec and verify its exports.
navOrder: 2
---

# Installation

## Requirements

Node.js 18.18 or later and a compatible npm client are supported for installation and development.

## Install

```sh
npm install @coderevivehq/sourcemap-codec
```

## Verify the installation

```sh
node -e "const codec = require('@coderevivehq/sourcemap-codec'); console.log(typeof codec.decode, typeof codec.encode)"
```

The command prints `function function` when the CommonJS entry point is available.

## Next steps

Continue to the [Usage guide](usage.md).
