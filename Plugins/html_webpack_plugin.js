/**
 * Подробный JSdoc
 * @param {Object} options
 * @see ссылка на доки
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function createPlugin(options) {
  return new HtmlWebpackPlugin(options);
};

