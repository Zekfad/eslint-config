/**
 * @module Typescript
 */

/**
 * Typescript ESLint config.
 */
const config = {
	env: {
		commonjs: true,
		es6     : true,
		node    : true,
	},
	extends: [
		'plugin:import/typescript',
		'@zekfad',
	],
	globals: {
		Atomics          : 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	overrides: [
		{
			files  : [ '*.ts', ],
			parser : '@typescript-eslint/parser',
			plugins: [ '@typescript-eslint', ],
			extends: [ 'plugin:@typescript-eslint/recommended', ],
		},
	],
	parser       : '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion      : 2020,
		requireConfigFile: false,
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: [
					'.js',
					'.mjs',
					'.cjs',
					'.jsx',
					'.json',
					'.ts',
					'.tsx',
				],
			},
			typescript: {},
		},
		'import/parsers': {
			'@typescript-eslint/parser': [ '.ts', ],
		},
	},
	rules: {},
};

export default config;
