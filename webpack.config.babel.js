// @flow

import path from 'path'
import webpack from 'webpack'
import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'


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
