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
    return __webpack_require__(__webpack_require__.s = "../src/index.js");
    })
    
    
    ({
    
        "../src/index.js":
        (function (module, exports,__webpack_require__) {
    eval(`const add = __webpack_require__("../src/add.js");
// import add from './add.js';
const r = add(1, 2);
console.log('index');
module.exports = {};`);
    }),
    
        "../src/add.js":
        (function (module, exports,__webpack_require__) {
    eval(`const min = __webpack_require__("../src/min.js");
const add = (x, y) => {
  return x + y + min(x, y);
};
console.log('add');
module.exports = add;`);
    }),
    
        "../src/min.js":
        (function (module, exports,__webpack_require__) {
    eval(`const min = (x, y) => {
  return x - y;
};
console.log('min');
module.exports = min;`);
    }),
    
    });