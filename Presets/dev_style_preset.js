const sassLoader = require(`../Loaders/sass_loader`);
const cssLoader = require(`../Loaders/css_loader`);
const styleLoader = require(`../Loaders/style_loader`);
const postCssLoader = require(`../Loaders/post_css_loader`);

const sourceMap = { sourceMap: true };

module.exports = {
  test: /\.s?css$/,
  use: [styleLoader(sourceMap), cssLoader(sourceMap), postCssLoader(sourceMap), sassLoader(sourceMap)]
};
