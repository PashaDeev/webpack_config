/**
 * Подробный JSdoc
 * @param {Object} options
 * @see ссылка на доки
 */

const ImageminPlugin = require(`imagemin-webpack`);

const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");

module.exports = function imageMinPlugin() {
  return new ImageminPlugin({
    bail: false, // Ignore errors on corrupted images
    cache: true,
    imageminOptions: {
      // Lossless optimization with custom option
      // Feel free to experement with options for better result for you
      plugins: [
        imageminGifsicle({
          interlaced: true
        }),
        imageminJpegtran({
          progressive: true
        }),
        imageminOptipng({
          optimizationLevel: 5
        }),
        imageminSvgo({
          removeViewBox: true
        })
      ]
    }
  });
};
