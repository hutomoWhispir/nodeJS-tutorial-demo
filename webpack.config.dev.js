import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode:'development',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    debug: true,
    noInfo: true,
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}
