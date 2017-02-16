Tutorial of how to author a library using [webpack](https://github.com/webpack/webpack) using TypeScript.

This is an example of how to use TypeScript along with Webpack 2 in the creation of library that can be consumed in other applications.
It builds upon [webpack-library-example](https://github.com/kalcifer/webpack-library-example) 

### Outline

This library exposes functionality to transalte numbers to words.
It is trivial code but the aim is to bundle it using webpack.

### Features

1. Bundling library code into all library targets ie CommonJS, AMD, ES2015 exports, UMD.
2. Transpilation for the browser, via tsc, and node, via babel
