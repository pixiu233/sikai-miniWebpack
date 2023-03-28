(function (modules) {
    var installedModules = {};
    
    function __webpack_require__(moduleId) {
    
    if (installedModules[moduleId]) {
    return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
    i: moduleId,
    l: false,
    exports: {}
    };
    
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    
    module.l = true;
    
    return module.exports;
    }
    
    
    // Load entry module and return exports
    return __webpack_require__(__webpack_require__.s = "..\src\index.js");
    })
    
    
    ({
    
        "..\src\index.js":
        (function (module, exports,__webpack_require__) {
    eval(`// const add = require('./add.js')
import add from './add.js';
const r = add(1, 2);
console.log('index');
module.exports = {};`);
    }),
    
    });