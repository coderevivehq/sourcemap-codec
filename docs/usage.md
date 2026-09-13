---
title: Usage
description: Decode and re-encode source-map mappings with sourcemap-codec.
navOrder: 3
---

# Usage

Import `decode` and `encode`, decode a source-map mapping string, and pass the resulting nested arrays back to `encode` after inspecting or changing them.

## Basic example

```js
const assert = require('node:assert/strict');
const { decode, encode } = require('@coderevivehq/sourcemap-codec');

const mappings = ';EAEEA,EAAE,EAAC,CAAE;ECQY,UACC';
const decoded = decode(mappings);

assert.deepEqual(decoded[0], []);
assert.deepEqual(decoded[1][0], [2, 0, 2, 2, 0]);
assert.equal(encode(decoded), mappings);
```

## What the example does

Semicolons separate generated lines and commas separate segments within a line. `decode` resolves each field's relative offsets into numeric segment arrays. `encode` converts those arrays back into the compact mapping string.

## Next steps

- See the [API reference](api.md) for the segment shapes.
- See [Examples](examples.md) for focused encoding and decoding examples.
