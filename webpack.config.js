const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;

const optimizeJs = isDevelopment ? `main.js` : `main.[contenthash].js`;
const optimizeCss = isDevelopment ? `main.css` : `main.[contenthash].css`;

module.exports = {
   mode: 'production',
   entry: './src/main.js',

   output: {
      filename: optimizeJs,
      path: path.resolve(__dirname, 'dist'),
   },

   optimization: {
      minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()],
   },

   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
         minify: {
            removeAttributeQuotes: isProduction,
            collapseWhitespace: isProduction,
            removeComments: isProduction,
         },
      }),
      new CleanWebpackPlugin(),

      new MiniCssExtractPlugin({
         filename: optimizeCss,
      }),
      new CopyWebpackPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, './src/assets'),
               to: path.resolve(__dirname, 'dist'),
               noErrorOnMissing: true,
            },
         ],
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
