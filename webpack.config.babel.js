var path = require('path');

export default () => (
  {
    entry: './index.ts',
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: 'webpack-numbers.js',
      libraryTarget: 'umd',
      library: 'webpackNumbers',
       umdNamedDefine: true
    },
    externals: {
      'lodash': {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_'
      }
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        {
          test: /\.ts?$/,
          exclude: /\/tests\//,
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: './tsconfig.json'
          }
        }
      ]
    },
  }
);
