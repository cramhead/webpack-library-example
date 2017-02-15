//var webpackNumbers = require('./webpack-numbers.js');
import webpackNumbers  from './webpack-numbers.js';
var out = function() {
  console.log(webpackNumbers());
    process.stdout.write('This is the result for numtoword(1) === ' + webpackNumbers.numtoword(1));
};
out();
