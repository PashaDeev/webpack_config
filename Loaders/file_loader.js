/**
 * file loader файлы из import и url копирует в папку билда
 *
 * @param outputPath указывается отностельно  глоабльного выхода webpack кофига
 *
 * @example
 *
 * @return {Object} loader конфиг лоадера
 */

function fileLoader(options) {
  return {
    loader: `file-loader`,
    options: {
      outputPath: `static`,
      ...options
    }
  }
}

module.exports = fileLoader;

