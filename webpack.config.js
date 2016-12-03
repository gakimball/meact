module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'meact.js',
    path: __dirname,
    library: 'Meact',
    libraryTarget: 'umd',
  },
  devtool: 'sourcemap',
  externals: {
    'react': 'React',
    'markdown-it': 'markdownit',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
};
