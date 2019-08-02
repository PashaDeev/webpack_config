const fileLoader = require(`../Loaders/file_loader`);
const path = require(`path`);

module.exports = {
  test: /\.(woff(2)?|ttf|svg)$/,
  include: path.resolve(__dirname, `..`, `..`, `src`, `core`, `fonts`),
  use: [
    fileLoader({
      name: `fonts/[name].[hash].[ext]`
    })
  ]
};
