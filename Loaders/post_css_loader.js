/**
 * post-css loader
 *
 * @example
 *
 * @return {Object} loader конфиг лоадера
 */

function cssLoader(options = {}) {
  return {
    loader: `postcss-loader`,
    options: {
      ...options
    }
  };
};

module.exports = cssLoader;
