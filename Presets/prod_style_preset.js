const sassLoader = require(`../Loaders/sass_loader`);
const cssLoader = require(`../Loaders/css_loader`);
// const styleLoader = require(`../Loaders/style_loader`);
const postCssLoader = require(`../Loaders/post_css_loader`);

const miniCssExtractLoader = require(`../Loaders/min_css_extract_loader`);

module.exports = {
  test: /\.s?css$/,
  use: [miniCssExtractLoader(), cssLoader(), postCssLoader(), sassLoader()]
};
