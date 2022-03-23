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
      renderRoutes: [
        '/',
        '/about',
        '/menu',
        '/coworking',
        '/meeting-room'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
};
