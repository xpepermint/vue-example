const {join} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');

module.exports = (mode, {env, publicPath} = {}) => {
  let isClient = mode === 'client';
  let isDev = env === 'development';

  return {
    target: isClient ? 'web' : 'node',
    devtool: isDev ? '#source-map' : false,
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({loader: `css-loader`})
            }
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['es2015', 'stage-3']
          }
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    entry: [
      isClient ? 'babel-polyfill' : null,
      isClient && isDev ? 'webpack-hot-middleware/client' : null,
      join(__dirname, '..', 'app', `${mode}-entry.js`)
    ].filter((e) => !!e),
    output: {
      path: join(__dirname, '..', '..', 'dist', mode),
      filename: `bundle.js?[hash]`,
      publicPath,
      libraryTarget: isClient ? 'var' : 'commonjs2'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
        'process.env.VUE_ENV': JSON.stringify(mode)
      }),
      new InlineEnviromentVariablesPlugin(),
      new ExtractTextPlugin(`bundle.css?[hash]`),
      isDev ? new webpack.HotModuleReplacementPlugin() : null,
      isDev ? new webpack.NoErrorsPlugin() : null,
      !isDev ? new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}) : null,
      !isDev ? new webpack.LoaderOptionsPlugin({minimize: true}) : null
    ].filter((e) => !!e)
  }
};
