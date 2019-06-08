module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/settings/_colors.scss";
          @import "@/assets/scss/tools/_media-query.scss";
        `
      }
    }
  }
}
