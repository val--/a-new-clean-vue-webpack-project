'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  entry: [
    './src/app.js'
  ],
  module: {
    rules: [
        {
            test: /\.vue$/,
            use: 'vue-loader'
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
        {
        test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.js$/,
            use: 'babel-loader' 
        },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'index.html',
      inject:true
    }),
    new CopyWebpackPlugin([{
      from: resolve('assets/img'),
      to: resolve('dist/static/img'),
      toType: 'dir'
    }]),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ]
}