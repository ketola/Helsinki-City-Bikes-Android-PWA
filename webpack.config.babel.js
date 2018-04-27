// @flow

import path from 'path'
import webpack from 'webpack'
import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin'



export default {
  entry: [
    'react-hot-loader/patch',
    './src/client',
  ],
  devServer: {
    port: WDS_PORT,
    hot: true,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'hel-citybikes-pwa',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: false,
        navigateFallback: 'index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
        staticFileGlobs: [
          'public/css/**.*',
          'public/images/**.*',
        ],
      }
    )
  ],
  output: {
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
