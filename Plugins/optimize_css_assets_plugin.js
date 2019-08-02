/**
 * minimize css assets plugin
 * @param {Object} options
 * @see ссылка на доки
 */

const OptimizeCssAssetsPlugin = require(`optimize-css-assets-webpack-plugin`);

module.exports = function plugin() {
  return  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorPluginOptions: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
    canPrint: true
  })
};
