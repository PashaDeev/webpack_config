const htmlLoader = require(`../Loaders/html_loader`);

module.exports = {
  test: /\.html$/,
  use: [htmlLoader({minimize: true})]
};
