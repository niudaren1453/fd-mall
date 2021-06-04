const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('com', resolve('src/components'))
      .set('style', resolve('src/assets/style'))
      .set('api', resolve('src/api'))
      .set('utils', resolve('src/utils'))
  }
}
