module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/v-i18n/" : "/",
  lintOnSave: true,
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
};
