/**
 * scss loader транспайлит scss в css
 *
 * @example
 *
 * @return {Object} loader конфиг лоадера
 */

function sassLoader(options = {}) {
  return {
    loader: `sass-loader`,
    options: {
      ...options
    }
  }
}

module.exports = sassLoader;
