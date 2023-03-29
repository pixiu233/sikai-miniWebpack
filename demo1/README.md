1.0TODO 观察官方打包dist文件样式
（(function(modules) {
...
    return __webpack_require__(__webpack_require__.s = "<%-文件路径 %>");
})

 "./src/js/test.js": (function (module, exports,__webpack_require__) {
    eval(` const obj = __webpack_require__("./testChildren.js");  test1.js 剩余文件代码`);
}),
"./src/js/testChildren.js": (function (module, exports,__webpack_require__) {
    eval(`testChildren.js 文件代码`);
}),

1.1需要得到文件路径和文件代码,且把文件中的require转化为__webpack_require__
    需要用到渲染模板
    0.1.将require替换成__webpack_require__
    0.2.再所有的页面路径，跟页面内容封装一个数组。
    解决0.1需要用到AST语法树处理最方便实在


//TODO目前不支持import 模块化语法