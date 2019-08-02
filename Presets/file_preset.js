const fileLoader = require(`../Loaders/file_loader`);
const path = require(`path`);

module.exports = {
  test: /\.(png|jpe?g|gif|mp3|svg)$/,
  exclude: path.resolve(__dirname, `..`, `..`, `src`, `core`, `fonts`),
  use: [fileLoader()]
};
