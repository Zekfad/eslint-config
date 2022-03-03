/**
 * @module Vue
 */

/**
 * Vue ESLint config.
 */
const config = {
	env: {
		commonjs: true,
		es6     : true,
		node    : true,
	},
	extends: [
		'plugin:vue/recommended',
		'@zekfad',
	],
	globals: {
		Atomics          : 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	plugins  : [ 'vue', ],
	overrides: [
		{
			files: [ '*.vue', ],
			rules: {
				indent: [ 'off', ],
			},
		},
	],
	parser       : 'vue-eslint-parser',
	parserOptions: {
		parser           : '@babel/eslint-parser',
		ecmaVersion      : 2020,
		requireConfigFile: false,
	},
	settings: {
		'import/resolver': {
			nuxt: {
				// Override this in your own config: nuxtSrcDir: 'client',
				extensions: [
					'.js',
					'.mjs',
					'.cjs',
					'.jsx',
					'.vue',
					'.json',
					'.css',
					'.scss',
				],
			},
		},
	},
	rules: {
		'vue/html-indent': [
			'error',
			'tab',
			{
				ignores: [ 'VAttribute', ],
			},
		],
		'vue/script-indent'          : [ 'off', ],
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: 2,
				multiline : 1,
			},
		],
		'vue/html-closing-bracket-newline': [ 'off', ],
		'vue/html-self-closing'           : [
			'error',
			{
				html: {
					normal: 'never',
					void  : 'always',
				},
			},
		],
		'vue/mustache-interpolation-spacing': [
			'error',
			'always',
		],
	},
};

export default config;
