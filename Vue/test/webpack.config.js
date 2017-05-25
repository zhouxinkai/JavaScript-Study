var path = require('path');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
      	'webpack-dev-server/client?http://localhost:8080',
      	path.resolve(__dirname)
    ],
    // entry指定了webpack的入口程序，好比c++和java中的main程序一样
};