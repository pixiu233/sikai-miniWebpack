const path = require("path");
const traverse = require('@babel/traverse').default;
const type = require('@babel/types');
const generator = require('@babel/generator').default
const fs = require('fs')
const ejs = require('ejs')
const parser = require('@babel/parser')
const babel = require('@babel/core')
// babylon主要把源码转成ast。Babylon 是 Babel 中使用的 JavaScript 解析器。
// @babel/traverse 对ast解析遍历语法树 负责替换，删除和添加节点
// @babel/types 用于AST节点的Lodash-esque实用程序库
// @babel/generator 结果生成

class WebpackCompiler {
    constructor(config) {

        this.config = config;
        this.modules = {}
        this.root = process.cwd() //当前项目地址      
        this.entry = this.config.entry;
        this.entryID
    }
    getSourceByPath(modulePath) {
        let content = fs.readFileSync(modulePath, 'utf8')
        return content
    }
    parse(source, parentPath) {

        const ast = parser.parse(source,{
            sourceType:'module' //表示我们要解析的是ES模块
        });

        let dependencies = []
        traverse(ast, {//对ast解析遍历语法树 负责替换，删除和添加节点
            ImportDeclaration({node}){
                dependencies.push(path.join(parentPath,node.source.value)) //todo 每次遇到import语句  将其文件路径push到依赖数组
            }
        })

        const {code} = babel.transformFromAst(ast,null,{
            presets:["@babel/preset-env"]
        })
        


        return { code,dependencies }
    }
    //编译生成的bundle.js
    buildMoudle(modulePath, isEntry) {
        

        const source = fs.readFileSync(modulePath, 'utf8');
        const moduleName = path.relative(this.root, modulePath);// ..\src\index.js
        
        if (isEntry) {
            this.entryID = moduleName
        }
        const { code, dependencies } = this.parse(source, path.dirname(moduleName));
        this.modules[moduleName] = code;
        dependencies.forEach((_module) => {
            this.buildMoudle(path.resolve(this.root, _module))///再对应的文件名称，替换成对应的源码
        })
    }
    outputFile() {

        let templateStr = this.getSourceByPath(path.join(__dirname, 'main.ejs'));  // 拿到步骤1写好的模板
        let code = ejs.render(templateStr, {
            entryPath: this.entryID,
            modules: this.modules,
        })// 填充模板数据
        let outPath = path.join(this.config.output.path, this.config.output.filename)// 拿到输出地址
        //todo 没有dist时创建dist文件夹
        const hasDir = fs.existsSync(outPath)
     
        if (!hasDir) {
            fs.mkdirSync(this.config.output.path)
        }

        //todo 生产模式进行代码压缩  默认不压缩
        if (this.config?.mode === 'production') {
            result = compress(result)
        }

        //todo 写入文件
        fs.writeFileSync(outPath, code)// 写入

    }

    run() {
        this.buildMoudle(path.resolve(this.root, '../', this.entry), true)
        this.outputFile();
    }
}
module.exports = WebpackCompiler