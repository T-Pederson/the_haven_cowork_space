const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    twElements: './node_modules/dist/js/index.min.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'The Haven Co-Work Space',
      template: './src/index.html',
      filename: './dist/index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};