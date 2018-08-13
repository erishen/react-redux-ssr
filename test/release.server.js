const path = require('path');
const Index = require('../index');
const configPos = process.env.CONFIGPOS;

console.log('configPos', configPos);

let Config = require(path.resolve(__dirname, '../config')).default;

if(configPos != 'LOCAL'){
    Config = require(path.resolve(__dirname, '../../../config')).default;
}

console.log('Config', Config);
Index.release(Config, 'index');