const routes = ['/', '/about', '/coworking', '/meeting-room'];

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/_core.scss";`,
      },
    },
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: routes,
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
    sitemap: {
      outputDir: './dist',
      baseURL: 'https://merge.place',
      urls: routes,
      pretty: true,
      defaults: {
        lastmod: new Date(),
        priority: 1,
      },
    },
  },
};
