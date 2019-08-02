/**
 * uglify plugin
 * @param {Object} options
 * @see ссылка на доки
 */

const HashedModulesPlugin = require(`webpack`).HashedModuleIdsPlugin;

module.exports = function plugin() {
  return new HashedModulesPlugin({
      hashFunction: `md4`,
      hashDigest: `base64`,
      hashDigestLength: 4
    })
};
