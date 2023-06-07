/**
 * vue.config.js
 * https://cli.vuejs.org/zh/config/index.html#vue-config-js
 */
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
    },
  },
};
