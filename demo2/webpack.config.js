const path = require('path')
module.exports = {
    mode: 'development',
    //入口文件
    entry: './src/index.js',
    //出口文件
    output: {
        filename: 'bundle.js',
        ///把一个路径或路径片段的序列解析为一个绝对路径
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: []
    },
    plugins: [
    ]
}