/**
 * babel loader транспайлинг es6+ в es5
 *
 * @example
 *
 * @return {Object} loader конфиг лоадера
 */

function babelLoader(options = {}) {
  return {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
      ...options
    }
  };
}

module.exports = babelLoader;
