/* eslint no-param-reassign: "error" */
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const path = require('path');
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const webpack = require('webpack');

module.exports = {
  publicPath: './',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
    watch: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
};
