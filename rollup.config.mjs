import typescript from '@rollup/plugin-typescript';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

export default {
	input: 'src/sourcemap-codec.ts',
	plugins: [
		typescript({
			tsconfig: false,
			exclude: 'node_modules/**'
		})
	],
	output: [
		{
			file: pkg.main,
			format: 'umd',
			name: 'sourcemapCodec',
			sourcemap: true
		},
		{
			file: pkg.module,
			format: 'es',
			sourcemap: true
		}
	]
};
