const path = require('path');
const Index = require('../index');

console.log(__dirname, path.resolve(__dirname, '../../../config'));
const Config = require(path.resolve(__dirname, '../../../config')).default;

console.log('Config', Config);
Index.release(Config, 'index');