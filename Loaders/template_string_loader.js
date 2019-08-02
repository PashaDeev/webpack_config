const path = require(`path`);

module.exports = function(options) {
  return {
    loader: path.resolve(__dirname, `../custom/template_string_loader`),
    ...options
  };
};
