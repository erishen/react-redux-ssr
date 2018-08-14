const path = require('path');
const Index = require('../index');
const isModule = parseInt(process.env.isModule, 10);
const isDebug = parseInt(process.env.isDebug, 10);

let Config = null;
//console.log('isModule1', isModule);
console.log('isDebug', isDebug);

if(isModule === 1){ // 作为第三方 node_modules 发布时使用
    Config = require(path.resolve(__dirname, '../../../config')).default;
}
else { // 作为本地测试时使用
    Config = require(path.resolve(__dirname, '../config')).default;
}

//console.log('Config', Config);

if(Config)
    Index.release(Config, 'index');