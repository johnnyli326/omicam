/* eslint no-param-reassign: "error" */
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const path = require('path');
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const webpack = require('webpack');

module.exports = {
  publicPath: '/test4/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
  },
};
