module.exports = function(resource) {
  return resource.replace(/src="(.+?)"/g, (math, path) => {
    return `src="\${require(\'${path}\')}"`
  });
}
