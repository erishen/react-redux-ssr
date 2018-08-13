const path = require('path');
const Index = require('../index');
const isModule = process.env.isModule;

let Config = null;

console.log('isModule1', isModule);

if(isModule === 1){ // 作为第三方 node_modules 发布时使用
    Config = require(path.resolve(__dirname, '../../../config')).default;
}
else { // 作为本地测试时使用
    Config = require(path.resolve(__dirname, '../config')).default;
}

console.log('Config', Config);

if(Config)
    Index.release(Config, 'index');