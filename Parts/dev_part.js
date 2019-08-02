const path = require(`path`);
const { HotModuleReplacementPlugin } = require(`webpack`);
const devStylePreset = require(`../Presets/dev_style_preset.js`);
const htmlPreset = require(`../Presets/html_dev_preset`);
const devJsPreset = require(`../Presets/dev_js_preset`);

module.exports = {
  mode: `development`,
  devtool: `source-map`,
  devServer: {
    contentBase: path.resolve(__dirname, `..`, `..`, "build"),
    port: 9999,
    hot: true,
    proxy: {
      '/backend': {
        target: 'http://localhost:3000/race/api/',
        pathRewrite: {'/backend' : ''}
      }
    }
  },
  // watch: true,
  module: {
    rules: [devStylePreset, htmlPreset, devJsPreset]
  },
  optimization: {
    runtimeChunk: true
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ]
};
