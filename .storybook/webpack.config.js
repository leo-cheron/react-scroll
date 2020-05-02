const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function ({config}) {
	config.module.rules.push({
		test: /\.stories\.jsx?$/,
		exclude: /node_modules/
		// use: [
		// 	require.resolve('@storybook/source-loader')
		// ]
	})

	config.resolve.modules.push(path.resolve(__dirname, '..', 'src'))

	config.module.rules.push({
		test: /\.jsx?$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'linaria/loader',
				options: {
					sourceMap: process.env.NODE_ENV !== 'production',
					preprocessor: 'none'
				}
			}
		]
	})

	// replace existing css rule
	config.module.rules.forEach((v, i) => {
		if (v.test.source.indexOf('.css') !== -1) {
			v.use = [{
				loader: MiniCssExtractPlugin.loader,
				options: {
					hmr: process.env.NODE_ENV !== 'production'
				}
			},
			{
				loader: 'css-loader'
				// options: {
				// 	sourceMap: process.env.NODE_ENV !== 'production',
				// }
			},
			{
				loader: 'postcss-loader',
				options: {
					ident: 'postcss',
					sourceMap: process.env.NODE_ENV !== 'production',
					parser: require('postcss-scss'),
					plugins: (loader) => [
						require('postcss-nested'),
						require('css-mqpacker')({sort: require('sort-css-media-queries')}),
						// require('postcss-mq-optimize'),
						require('autoprefixer')
					]
				}
			}]
		}
	})

	config.plugins.push(
		new MiniCssExtractPlugin({
			filename: 'styles.css'
		})
	)

	return config
}
