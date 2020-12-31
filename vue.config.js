module.exports = {
  lintOnSave: false,
  configureWebpack: {
    externals: {
      // 全局常量定义出，也可以是window下的实例
      AMap: "AMap" // 高德地图配置
    }
  }
};
