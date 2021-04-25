const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var svgToMiniDataURI = require('mini-svg-data-uri');


module.exports = {
  entry: './src/index.js',
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WebPack Test',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: (content) => svgToMiniDataURI(content.toString()),
            },
          },
        ],
      },
    ],
  },
};
