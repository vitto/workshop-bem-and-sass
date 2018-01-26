'use strict'

const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const path = require('path')

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')

const __modules = path.join(__dirname, '/../node_modules')
const __dist = path.join(__modules, '/metalsmith/assets')
const __images = path.join(__dirname, '/img')
const __js = path.join(__dirname, '/js')
const __sass = path.join(__dirname, '/sass')
const __twig = path.join(__dirname, '/twig')
const publicPath = path.join(__dirname, '../')
const basePath = '/'

module.exports = function (env) {
  return {
    entry: {
      'js/app': [
        path.join(__js, '/modal.js')
      ],
      'js/vendor': [
        path.join(__modules, '/jquery/dist/jquery.js')
      ],
      'css/style': [
        path.join(__sass, '/import.scss')
      ],
      'css/vendor-style': [
        path.join(__modules, '/material-design-icons/iconfont/material-icons.css')
      ]
    },
    output: {
      path: __dist,
      filename: '[name].js',
      sourceMapFilename: '[name].map'
    },
    devtool: 'cheap-module-source-map',
    watch: true,
    watchOptions: {
      poll: 500 // decrese the value if the watcher is slowly (value is in milliseconds)
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'/*, 'postcss-loader'*/]
          }),
          exclude: __modules
        }, {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          })
          // exclude: __dirname + '/src'
        }, {
          test: /\.[ot]tf$/,
          loader: 'url-loader',
          options: {
            limit: 50000,
            name: './fonts/[name].[ext]',
            publicPath: publicPath
          }
        }, {
          test: /\.eot$/,
          loader: 'url-loader?mimetype=application/font-eot',
          options: {
            limit: 65000,
            name: './fonts/[name].[ext]',
            publicPath: publicPath
          }
        }, {
          test: /\.woff$/,
          loader: 'url-loader?mimetype=application/font-woff',
          options: {
            limit: 65000,
            name: './fonts/[name].[ext]',
            publicPath: publicPath
          }
        }, {
          test: /\.woff2$/,
          loader: 'url-loader?mimetype=application/font-woff2',
          options: {
            limit: 65000,
            name: './fonts/[name].[ext]',
            publicPath: publicPath
          }
        }, {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loader: 'file-loader',
          options: {
            name: __images + '/[name].[ext]',
            publicPath: publicPath
          }
        }, {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        }, {
          test: /\.twig$/,
          loader: 'raw-loader'
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([{
        from: __images,
        to: __dist + '/img'
      }]),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [autoprefixer({ browsers: ['last 3 versions', 'iOS 9'] })]
        }
      }),
      new ExtractTextPlugin('[name].css'),
      new ManifestPlugin({
        basePath: basePath
      }),
      new WebpackShellPlugin({
        onBuildExit: [
          'npm run source',
          'npm run twig'
        ]
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 8000,
        server: { baseDir: ['build'] }
      })
    ],
    devServer: {
      contentBase: __dist,
      compress: true,
      port: 9000
    }
  }
}
