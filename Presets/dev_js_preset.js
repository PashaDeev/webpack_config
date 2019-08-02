const templateStringLoader = require(`../Loaders/template_string_loader`);
const babelLoader = require(`../Loaders/babel_loader`);

module.exports = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: [
    babelLoader({
      plugins: ["@babel/syntax-dynamic-import", "@babel/transform-runtime"]
    }),
    templateStringLoader()
  ]
};
