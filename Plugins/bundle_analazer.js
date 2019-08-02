/**
 * webpack bundle analyzer анализирует размер бандла
 * и показывает рузультат в браузере на порту 8888
 * @param {Object} options
 * @see ссылка на доки
 */

const Analyzer = require(`webpack-bundle-analyzer`).BundleAnalyzerPlugin;

function analyzer(options = {}) {
  return new Analyzer(options);
}

module.exports = analyzer;
