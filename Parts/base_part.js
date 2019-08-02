const path = require(`path`);
const htmlPlugin = require(`../Plugins/html_webpack_plugin`);
const filePreset = require(`../Presets/file_preset`);
const fontPreset = require(`../Presets/font_preset`);
const hashedModulePlugin = require(`../Plugins/hashed_module_plugin`);
const strReplacePreset = require(`../Presets/str_replace_preset`);

module.exports = {
  entry: {
    app: path.resolve(__dirname, `..`, `..`, `src`, `index.js`)
  },
  output: {
    path: path.resolve(__dirname, `..`, `..`, `build`),
    filename: `[name].[hash].js`,
    chunkFilename: `[name].chunk.js`
  },
  module: {
    rules: [filePreset, fontPreset, strReplacePreset]
  },
  plugins: [
    htmlPlugin({
      template: path.resolve(__dirname, `..`, `..`, `src`, `index.html`)
    }),
    hashedModulePlugin()
  ]
};
