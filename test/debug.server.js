const path = require('path');
const Index = require('../index');
const Config = require(path.resolve(__dirname, '../config')).default;

Index.debug(Config, 'index');