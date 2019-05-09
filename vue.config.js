// const path = require('path');

// const resolve = dir => {
//   return path.join(__dirname, dir);
// };

// module.exports = {
//   baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
//   lintOnSave: true,
//   configureWebpack: config => {
//     config.externals = {};
//     config.resolve = {
//       extensions: ['.js', '.vue', '.json'],
//       alias: {
//         vue: 'vue/dist/vue.common.js',
//         '@': path.resolve(__dirname, 'src')
//       }
//     };
//     if (process.env.NODE_ENV === 'production') {
//       // mutate config for production...
//     } else {
//       // mutate config for development...
//     }
//   },
//   chainWebpack: config => {
//     config.resolve.alias.set('@', resolve('src')); // key,value自行定义，比如.set('@@', resolve('src/components'))
//   },
//   // 设为false打包时不生成.map文件
//   productionSourceMap: false,
//   // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
//   devServer: {
//     // 设置主机地址
//     host: '0.0.0.0',
//     // 设置默认端口
//     port: 8080,
//     // 设置代理
//     proxy: {
//       '/api': {
//         target: 'http://172.16.23.180',
//         changeOrigin: false,
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     }
//   }
// };

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75
          })
        ]
      }
    }
  },
  devServer: {
    // 设置主机地址
    host: '0.0.0.0',
    // 设置默认端口
    port: 8080,
    // 设置代理
    proxy: {
      '/api': {
        target: 'http://47.105.53.172',
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': ''
        }
      }
    }
  }
}