/**
 * html loader транспайлит html в т.ч. заменяет src на require для импорта картинок
 *
 * @example
 *
 * @return {Object} loader конфиг лоадера
 */

function htmlLoader(options) {
  return {
    loader: `html-loader`,
    options: {
      ...options
    }
  }
}

module.exports = htmlLoader;

