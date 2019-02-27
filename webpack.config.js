const path = require("path");

const entryPointsPathPrefix = './src/js';

module.exports = {
  mode: 'development',
  entry: {
    polyfills: entryPointsPathPrefix + "/polyfills.js",
    index: entryPointsPathPrefix + "/index.js"
  },
  //["./src/js/polyfills.js", "./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: '[name].bundle.js'
  },
   module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"],
                 plugins: ['transform-custom-element-classes', 'transform-es2015-classes']
          }
        }
      }
    ]
  }
};