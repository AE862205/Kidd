const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //vue.config.js
  devServer: {
    proxy: {
      // 如果请求地址以/api打头,就出触发代理机制
      // http://localhost:8080/api/login -> http://localhost:3000/api/login
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn', // 我们要代理的真实接口地址
        secure: true,    //如果是https,加入这句代码
        changeOrigin: true,     //同意跨域
        ws: true,
        pathRewrite: {
          '^/api': '',
        }
      }
    }
  },
  publicPath: './'
})
