import {
	resolve as resolvePath,
	join as joinPath,
} from 'path';

import { babel, } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import builtins from 'builtin-modules';
import { terser, } from 'rollup-plugin-terser';


const
	devMode = 'dev' === (process.env.mode && process.env.mode.toLowerCase()),
	dirs = {
		src: {
			main: resolvePath('./src/main'),
			vue : resolvePath('./src/vue'),
			ts  : resolvePath('./src/typescript'),
		},
		dist: {
			main: resolvePath('./dist/main'),
			vue : resolvePath('./dist/vue'),
			ts  : resolvePath('./dist/typescript'),
		},
	},
	external = builtins;

let plugins = [];

plugins.push(...[
	babel({
		exclude     : 'node_modules/**',
		babelHelpers: 'bundled',
	}),
	json(),
	resolve({
		extensions: [
			'.mjs', '.js', '.cjs', '.json', '.node',
		],
		preferBuiltins: true,
	}),
	typescript({
		noEmitOnError: true,
	}),
	commonjs(),
]);

if (!devMode)
	plugins.push(...[
		terser({
			compress: {
				arrows         : false,
				keep_classnames: true,
				keep_fnames    : true,
				keep_infinity  : true,
				typeofs        : false,
			},
			output: {
				comments: 'all',
			},
			mangle         : false,
			keep_classnames: true,
			keep_fnames    : true,
			ecma           : 2015,
		}),
	]);

export default [
	{
		input : joinPath(dirs.src.main, 'index.js'),
		output: [
			{
				file     : joinPath(dirs.dist.main, 'cjs', 'bundle.cjs'),
				format   : 'cjs',
				sourcemap: devMode,
				exports  : 'auto',
			},
			{
				file     : joinPath(dirs.dist.main, 'esm', 'bundle.mjs'),
				format   : 'es',
				sourcemap: devMode,
				exports  : 'auto',
			},
		],
		plugins,
		external,
	},
	{
		input : joinPath(dirs.src.vue, 'index.js'),
		output: [
			{
				file     : joinPath(dirs.dist.vue, 'cjs', 'bundle.cjs'),
				format   : 'cjs',
				sourcemap: devMode,
				exports  : 'auto',
			},
			{
				file     : joinPath(dirs.dist.vue, 'esm', 'bundle.mjs'),
				format   : 'es',
				sourcemap: devMode,
				exports  : 'auto',
			},
		],
		plugins,
		external,
	},
	{
		input : joinPath(dirs.src.ts, 'index.ts'),
		output: [
			{
				file     : joinPath(dirs.dist.ts, 'cjs', 'bundle.cjs'),
				format   : 'cjs',
				sourcemap: devMode,
				exports  : 'auto',
			},
			{
				file     : joinPath(dirs.dist.ts, 'esm', 'bundle.mjs'),
				format   : 'es',
				sourcemap: devMode,
				exports  : 'auto',
			},
		],
		plugins,
		external,
	},
];