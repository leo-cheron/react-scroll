// const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
	entry: {
		main: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, '/dist/'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					'react-hot-loader/webpack',
					{
						loader: 'linaria/loader',
						options: {
							sourceMap: process.env.NODE_ENV !== 'production'
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						hmr: process.env.NODE_ENV !== 'production'
					}
				},
				{
					loader: 'css-loader',
					options: {
						sourceMap: process.env.NODE_ENV !== 'production'
					}
				}]
			}
		]
	},
	plugins: [
		// new HtmlWebPackPlugin({
		// 	template: './src/index.html',
		// 	filename: './index.html'
		// }),
		new MiniCssExtractPlugin({
			filename: 'styles.css'
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname, '/dist/'),
		compress: true,
		port: 8000
	}
}
