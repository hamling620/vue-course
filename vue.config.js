const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const Base_Url = process.env.Node_ENV === 'production' ? '/ivew-admin/' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl: Base_Url,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件，减少打包体积，加快打包速度
  devServer: {
    proxy: 'http://localhost:4000'
  }

}
