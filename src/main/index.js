/**
 * @module Main
 */

/**
 * Base ESLint config.
 * @type object
 */
const config = {
	overrides: [
		{
			files: [ '*.test.*', ],
			env  : {
				mocha: true,
			},
		},
	],
	env: {
		commonjs: true,
		es6     : true,
		node    : true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		//'plugin:node/recommended', // TODO: fix this up.
	],
	globals: {
		Atomics          : 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser       : '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion      : 2020,
		requireConfigFile: false,
	},
	settings: {
		'import/extensions': [
			'.js',
			'.mjs',
			'.cjs',
			'.json',
		],
	},
	rules: {
		'import/no-unresolved': [
			'error',
			{
				commonjs: true,
			},
		],
		'import/named'    : [ 'error', ],
		'import/default'  : [ 'error', ],
		'import/namespace': [
			'error', {
				'allowComputed': true,
			},
		],
		'import/no-absolute-path'          : [ 'error', ],
		'import/no-dynamic-require'        : [ 'warn', ],
		'import/no-internal-modules'       : [ 'off', ],
		'import/no-webpack-loader-syntax'  : [ 'off', ],
		'import/no-self-import'            : [ 'error', ],
		'import/no-cycle'                  : [ 'off', ],
		'import/no-relative-parent-imports': [ 'off', ],
		'import/no-useless-path-segments'  : [ 'error', ],
		'import/export'                    : [ 'error', ],
		'import/no-named-as-default'       : [ 'error', ],
		'import/no-deprecated'             : [ 'warn', ],
		'import/no-extraneous-dependencies': [
			'error', {
				devDependencies     : true,
				optionalDependencies: true,
				peerDependencies    : true,
				bundledDependencies : true,
			},
		],
		'import/no-mutable-exports': [ 'error', ],
		// 'import/no-unused-modules': [ 'error, {}, ],
		'import/order'             : [
			'error',
			{
				'groups': [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
				],
				'newlines-between': 'always-and-inside-groups',
				alphabetize       : {
					order: 'asc',
				},
			},
		],
		'import/newline-after-import': [
			'error',
			{
				'count': 2,
			},
		],
		'no-control-regex': [ 'off', ],
		'no-empty'        : [
			'error',
			{
				allowEmptyCatch: true,
			},
		],
		'no-extra-parens': [
			'error',
			'all',
			{
				conditionalAssign            : false,
				returnAssign                 : false,
				nestedBinaryExpressions      : false,
				enforceForSequenceExpressions: false,
			},
		],
		'no-irregular-whitespace': [
			'error',
			{
				skipRegExps  : true,
				skipTemplates: true,
			},
		],
		'no-template-curly-in-string': [ 'error', ],
		curly                        : [ 'off', ],
		'dot-location'               : [
			'error',
			'property',
		],
		'dot-notation': [ 'error', ],
		eqeqeq        : [
			'error',
			'smart',
		],
		'no-caller'           : [ 'error', ],
		'no-case-declarations': [ 'error', ],
		'no-else-return'      : [ 'error', ],
		'no-eval'             : [ 'error', ],
		'no-extend-native'    : [ 'error', ],
		'no-extra-bind'       : [ 'error', ],
		'no-fallthrough'      : [
			'error',
			{
				commentPattern: '[Bb]reak[\\s\\w]*[Oo]mitted',
			},
		],
		'no-global-assign'   : [ 'error', ],
		'no-implied-eval'    : [ 'error', ],
		'no-loop-func'       : [ 'error', ],
		'no-octal-escape'    : [ 'error', ],
		'no-octal'           : [ 'error', ],
		'no-self-compare'    : [ 'error', ],
		'no-useless-call'    : [ 'error', ],
		'no-warning-comments': [
			'warn',
			{
				terms: [
					'todo',
					'fixme',
					'xxx',
				],
				location: 'start',
			},
		],
		radix          : [ 'error', ],
		'require-await': [ 'error', ],
		'wrap-iife'    : [
			'error',
			'inside',
		],
		'array-bracket-newline': [
			'error',
			{
				multiline: true,
				minItems : 3,
			},
		],
		'array-bracket-spacing': [
			'error',
			'always',
		],
		'array-element-newline': [
			'error',
			'consistent',
		],
		'block-spacing': [ 'error', ],
		'brace-style'  : [
			'error',
			'1tbs',
			{
				allowSingleLine: true,
			},
		],
		'capitalized-comments': [
			'warn',
			'always',
		],
		'comma-dangle': [
			'error',
			{
				arrays   : 'always',
				objects  : 'always',
				imports  : 'always',
				exports  : 'always',
				functions: 'never',
			},
		],
		'comma-spacing': [
			'error',
			{
				before: false,
				after : true,
			},
		],
		'comma-style': [
			'error',
			'last',
		],
		'computed-property-spacing': [
			'error',
			'never',
		],
		'func-call-spacing': [
			'error',
			'never',
		],
		'function-paren-newline': [
			'error',
			'consistent',
		],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon : true,
				mode       : 'strict',
				align      : {
					beforeColon: false,
					afterColon : true,
					on         : 'colon',
				},
			},
		],
		'keyword-spacing': [
			'error',
			{
				before: true,
				after : true,
			},
		],
		'new-parens'              : [ 'error', ],
		'newline-per-chained-call': [
			'error',
			{
				ignoreChainWithDepth: 2,
			},
		],
		'no-mixed-operators'      : 'error',
		'no-mixed-spaces-and-tabs': [
			'error',
			'smart-tabs',
		],
		'no-trailing-spaces' : [ 'error', ],
		'no-unneeded-ternary': [
			'error',
			{
				defaultAssignment: false,
			},
		],
		'object-curly-newline': [
			'error',
			{
				consistent: true,
			},
		],
		'object-curly-spacing': [
			'error',
			'always',
		],
		'one-var': [
			'error',
			'consecutive',
		],
		'operator-assignment': [
			'warn',
			'always',
		],
		semi: [
			'error',
			'always',
			{
				omitLastInOneLineBlock: true,
			},
		],
		'semi-spacing': [
			'error',
			{
				before: false,
				after : true,
			},
		],
		'semi-style': [
			'error',
			'last',
		],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],
		'space-before-function-paren': [
			'error',
			{
				anonymous : 'always',
				named     : 'never',
				asyncArrow: 'always',
			},
		],
		'space-in-parens': [
			'error',
			'never',
		],
		'space-infix-ops'     : [ 'error', ],
		'switch-colon-spacing': [ 'error', ],
		'wrap-regex'          : [ 'error', ],
	},
};

export default config;
