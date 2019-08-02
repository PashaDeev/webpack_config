/**
 * style loader
 *
 * @example
 *
 * @return {Object} loader конфиг лоадера
 */

function styleLoader(options = {}) {
  return {
    loader: `style-loader`,
    options: {
      ...options
    }
  };
};

module.exports = styleLoader;
