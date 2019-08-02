/**
 * post-css loader
 *
 * @example
 *
 * @return {Object} loader конфиг лоадера
 */

const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);

function miniCssExtractLoader(options = {}) {
  return {
    loader: MiniCssExtractPlugin.loader,
    options: {
      ...options
    }
  };
};

module.exports = miniCssExtractLoader;

