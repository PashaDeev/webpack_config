/**
 * compresstion plugin
 * @param {Object} options
 * @see ссылка на доки
 */

const CompressionPlugin = require(`compression-webpack-plugin`);

module.exports = function plugin(options) {
  return new CompressionPlugin({
    test: /\.(js|css|jpg|jpeg|svg|ttf|html)$/,
    ...options
  });
};
