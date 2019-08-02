/**
 * css loader
 *
 * @example
 *
 * @return {Object} loader конфиг лоадера
 */

function cssLoader(options = {}) {
  return {
    loader: `css-loader`,
    options: {
      ...options
    }
  };
};

module.exports = cssLoader;
