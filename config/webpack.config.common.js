const webpack = require("webpack");
var htmlWebPackPlugin = require("html-webpack-plugin");

const {
  resolvePath,
  directory,
  HTMLTemplateSettings,
  region,
} = require("./conf");
const { SRC, DIST } = directory;

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      `${SRC}/js/index.jsx`,
    ],
  },
  resolve: {
    modules: [SRC, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@src': SRC,
      '@containers': `${SRC}/js/containers`,
      '@components': `${SRC}/js/components`,
      '@utils': `${SRC}/js/utils`,
      '@apis': `${SRC}/js/apis`,
      '@redux': `${SRC}/js/redux`,
      '@HOC': `${SRC}/js/HOC`,
      '@assets': `${SRC}/assets`,
      '@styles': `${SRC}/styles`,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          'file-loader?name=[name].[ext]',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|gif|png|woff|woff2|eot|otf|ttf|svg|ico)$/i,
        exclude: [
          `${SRC}/assets/fonts/`,
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              optipng: {
                optimizationLevel: 7,
              },
              gifsicle: {
                interlaced: false
              }
            }
          },
        ],
      },
      {
        test: /favicon\.ico$/,
        use: 'file-loader?name=[name].[ext]',
        exclude: /node_modules/,
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              minetype: 'application/font-woff',
              name: 'assets/fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: [
          `${SRC}/assets/images/`,
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]'
            }
          },
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    }),
    new htmlWebPackPlugin({
      filename: 'index.html',
      template: `${SRC}/index.tpl.ejs`,
      minChunks: 5,
      HTMLTemplateSettings,
      region,
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: 'vendor'
    },
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
          minSize: 1
        }
      }
    }
  },
  externals: {
    'react/addons': true
  },
}