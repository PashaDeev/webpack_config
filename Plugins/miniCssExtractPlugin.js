const miniCssExtractPlugin = require(`mini-css-extract-plugin`);

module.exports = function plugin() {
  return new miniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
  });
};
