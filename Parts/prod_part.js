const path = require(`path`);
const prodStylePreset = require(`../Presets/prod_style_preset.js`);
const htmlPreset = require(`../Presets/html_prod_preset`);
const prodJsPreset = require(`../Presets/prod_js_preset`);
const uglifyJsPlugin = require(`../Plugins/uglify_plugin`);
const CompressionPlugin = require(`../Plugins/compression_plugin`);
const imageMinPlugin = require(`../Plugins/imagemin_plugin`);
const miniCssExtractPlugin = require(`../Plugins/miniCssExtractPlugin`);
const optimizeCssAssetsPlugin = require(`../Plugins/optimize_css_assets_plugin`);

module.exports = {
  mode: `production`,
  module: {
    rules: [prodStylePreset, htmlPreset, prodJsPreset]
  },
  plugins: [
    optimizeCssAssetsPlugin(),
    miniCssExtractPlugin(),
    imageMinPlugin(),
    // CompressionPlugin({
    //   cache: true,
    //   deleteOriginalAssets: !process.env.ANALYZE_MODE
    // })
  ],
  optimization: {
    minimizer: [
      uglifyJsPlugin()
    ]
  }
};
