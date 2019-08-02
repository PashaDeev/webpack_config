/**
 * uglify plugin
 * @param {Object} options
 * @see ссылка на доки
 */

const UglifyJsPlugin = require(`uglifyjs-webpack-plugin`);

module.exports = function plugin() {
  return new UglifyJsPlugin({
    test: /\.js$/,
    parallel: true
  });
};
