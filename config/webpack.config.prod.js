const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfigCommon = require('./webpack.config.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const childProcess = require('child_process');

const {
  directory,
  port,
} = require("./conf");
const { SRC, DIST } = directory;
// const COMMIT_HASH = childProcess
//   .execSync('git rev-parse --short HEAD')
//   .toString()
//   .replace('\n', '');

module.exports = merge(webpackConfigCommon, {
  output: {
    path: DIST,
    publicPath: '/',
    filename: `assets/js/[name].js?v=[chunkhash]`,
  },
  module: {
    rules: [
      {
        test: /\.scss|css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            }
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `assets/styles/[name].css?v=[chunkhash]`,
    }),
  ],
  optimization: {
    minimize: true,
  },
  performance: {
    hints: 'warning',
  },
});
