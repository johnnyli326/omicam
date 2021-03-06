/* eslint no-param-reassign: "error" */
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const path = require('path');
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const webpack = require('webpack');

module.exports = {
  publicPath: '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
  },
  productionSourceMap: false, // hide source code
};
