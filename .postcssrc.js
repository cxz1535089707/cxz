// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    // to edit target browsers: use "browserslist" field in package.json
    // autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 1920,
      viewportHeight: 1080,
      unitPrecision: 5,
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      // selectorBlackList: [/^((?!pxtovw).)+$/],
      minPixelValue: 1,
      mediaQuery: false,
    },
  },
};
