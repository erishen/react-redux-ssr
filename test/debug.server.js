import path from 'path';
import Index from '../index';

console.log(__dirname, path.resolve(__dirname, '../config'));
const Config = require(path.resolve(__dirname, '../config')).default;
Index.debug(Config, 'index');