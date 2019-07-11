/* eslint-disable */

module.exports = {
  publicPath: '/static/homeapp',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/main.scss";
        `
      }
    }
  }
}
