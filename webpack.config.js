const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, 'public'),
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: { loader: 'file-loader' },
      },
    ],
  },
};
