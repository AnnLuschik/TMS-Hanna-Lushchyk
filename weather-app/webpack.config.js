const path = require('path');
const { ModuleFilenameHelpers } = require('webpack');

module.exports = {
	entry: './index',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
		  {
			test: /\.css$/i,
			use: ['style-loader'],
		  },
		  {
			test: /\.css$/i,
			loader: 'css-loader',
			options: {
			  modules: true,
			},
		],
	},
}