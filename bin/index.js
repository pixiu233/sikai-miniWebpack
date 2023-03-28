//入口文件
//入口文件
const path = require("path");
//找到webpack.config.ts配置
const config = require("../webpack.config.js");
// //导入lin包中的webpack
const webpackCompiler = require('../lib/WebpackCompiler.js');
const webpack = new webpackCompiler(config)
webpack.run()