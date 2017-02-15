// get the default export
var webpackNumbers = require('./webpack-numbers.js').default;

var out = function () {
  var translate = webpackNumbers();
  console.log('This is the result for numtoword(1) === ' + translate.numtoword(1));
};
out();
