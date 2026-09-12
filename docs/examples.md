---
title: Examples
description: Use sourcemap-codec for focused encoding and decoding tasks.
navOrder: 5
---

# Examples

## Decode a mapping

```js
const { decode } = require('@coderevivehq/sourcemap-codec');

console.log(decode('AAAA'));
// [[[0, 0, 0, 0]]]
```

The result contains one generated line with one four-field segment.

## Encode decoded lines

```js
const { encode } = require('@coderevivehq/sourcemap-codec');

const decoded = [
  [],
  [[2, 0, 2, 2, 0], [4, 0, 2, 4]]
];

console.log(encode(decoded));
// ;EAEEA,EAAE
```

The empty first line produces the leading semicolon. The second line contains two comma-separated segments.
