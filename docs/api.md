---
title: API reference
description: Reference for sourcemap-codec functions and mapping data types.
navOrder: 4
---

# API reference

The package exports `decode`, `encode`, and TypeScript types for decoded source-map mappings.

## `decode(mappings)`

```ts
function decode(mappings: string): SourceMapMappings;
```

Decodes a source-map `mappings` string into an array of generated lines and segments.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `mappings` | `string` | Yes | The compact Base64 VLQ value from a source map's `mappings` field. |

### Returns

A `SourceMapMappings` value. Each outer array entry is a generated line, and each inner array contains its decoded segments.

### Errors and edge cases

An unsupported character in the mapping string throws an `Error`. Empty generated lines are represented by empty arrays.

## `encode(decoded)`

```ts
function encode(decoded: SourceMapMappings): string;
```

Encodes decoded source-map line and segment arrays as a compact `mappings` string.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `decoded` | `SourceMapMappings` | Yes | Generated lines containing one-, four-, or five-field source-map segments. |

### Returns

The encoded source-map `mappings` string.

## Mapping types

```ts
type SourceMapSegment =
  | [number]
  | [number, number, number, number]
  | [number, number, number, number, number];

type SourceMapLine = SourceMapSegment[];
type SourceMapMappings = SourceMapLine[];
```

The segment fields are, in order: generated column; source index, original line, and original column when present; and name index when present.
