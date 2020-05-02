module.exports = {
	extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
	rules: {
		'react/prop-types': 0,
		'object-curly-spacing': ['error', 'never'],
		'indent': ['error', 'tab'],
		'no-tabs': 0,
		'react/jsx-indent': ['error', 'tab', { 'checkAttributes': true, 'indentLogicalExpressions': true }],
		'react/jsx-indent-props': ['error', 'tab'],
	},
	settings: {
		react: {
			pragma: 'React',
			version: '16.8.4'
		},
		"import/resolver": {
			"node": {
				"moduleDirectory": ["node_modules", "src"]
			}
		}
	}
}
