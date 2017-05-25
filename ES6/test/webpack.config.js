var path = require('path');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
      	'webpack-dev-server/client?http://localhost:8080',
      	path.resolve(__dirname, 'build/')
    ],
    // entry指定了webpack的入口程序，好比c++和java中的main程序一样
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: {
	    loaders: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}]
	    //.js 文件使用 jsx-loader 来编译处理
	}
};