const merge = require(`webpack-merge`);
const baseConfig = require(`./Parts/base_part`);
const devConfig = require(`./Parts/dev_part`);
const prodConfig = require(`./Parts/prod_part`);

const analyzerFunction = require(`./Plugins/bundle_analazer`);

const isProd = process.env.NODE_ENV === `production`;
const isAnalyze = process.env.ANALYZE_MODE;

const particularConfig = isProd ? prodConfig : devConfig;
const analyzer = isAnalyze ? { plugins: [analyzerFunction()] } : {};

module.exports = merge(baseConfig, particularConfig, analyzer);
