const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackConfigCommon = require('./webpack.config.common');
const {
  directory,
  port,
} = require("./conf");

const { SRC, DIST } = directory;

module.exports = merge(webpackConfigCommon, {
  output: {
    path: DIST,
    publicPath: `http://localhost:${port}/`,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss|css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      // multiStep: true
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    // Webpack 3 loader debug mode : https://webpack.js.org/guides/migrating/#debug
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],
  devServer: {
    publicPath: `http://localhost:${port}/`,
    contentBase: DIST,
    historyApiFallback: {
      index: '/',
      disableDotRule: true
    },
    hot: true,
    port: port,
    inline: true,
    stats: 'errors-only'
  },
  devtool: 'eval-source-map',
  watch: true,
  cache: true,
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
});
