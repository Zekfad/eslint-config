const
	assert = require('assert'),
	{ ESLint, } = require('eslint'),

	extensions = [
		'.js',
		'.cjs',
		'.mjs',
	];

function formatMessages(messages) {
	const errors = messages
		.map(message =>
			`${message.line}:${message.column} ` +
			`${message.message.slice(0, -1)} - ${message.ruleId}`);

	return `\n${errors.join('\n')}`;
}

describe('ESLint - Base', function () {
	const eslint = new ESLint({
		extensions,
	});

	this.timeout(2 * 60 * 1000);

	let lintResults;

	before(async () => {
		lintResults = await eslint.lintFiles('.');

		describe('ESLint - Base results', () => {

			for (const { filePath, messages, } of lintResults) {

				it(`Validate ${filePath}`, () => {
					if (messages.length > 0) {
						assert.strictEqual('Test failed', null, formatMessages(messages));
					}
				});

			}

		});
	});

	it('Run ESlint', () => {});

});

describe('ESLint - Vue', function () {
	const eslint = new ESLint({
		extensions,
		overrideConfig: {
			extends  : [ '@zekfad/eslint-config/vue', ],
			overrides: [
				{
					files: [ '*.js', ],
					rules: {
						'import/no-unresolved': [ 'off', ],
					},
				},
			],
		},
	});

	this.timeout(2 * 60 * 1000);

	let lintResults;

	before(async () => {
		lintResults = await eslint.lintFiles('.');

		describe('ESLint - Vue results', () => {

			for (const { filePath, messages, } of lintResults) {

				it(`Validate ${filePath}`, () => {
					if (messages.length > 0) {
						assert.strictEqual('Test failed', null, formatMessages(messages));
					}
				});

			}

		});
	});

	it('Run ESlint', () => { });

});
