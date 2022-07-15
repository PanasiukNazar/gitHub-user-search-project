const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   mode: 'production',
   entry: {
      main: './src/main.js',
      fetch: './src/fetch.js',
   },

   output: {
      filename: '[name].[contenthash].js',
      filename: '[name].[contenthash].js',
      path: path.join(__dirname, 'dist'),
   },
   plugins: [
      new HtmlWebpackPlugin({
         //  title: 'GitHub User',
         template: './src/index.html',
      }),
      new CleanWebpackPlugin(),

      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css',
      }),
   ],

   module: {
      rules: [
         {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
         },
      ],
   },
};
