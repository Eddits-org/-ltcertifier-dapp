const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV || 'dev';
const isProd = env !== 'dev';

const root = path.join(__dirname, '..');
const nodeModules = path.join(root, './node_modules');
const src = path.join(root, './src');
const dist = path.join(root, './www');

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    chunks: ['app'],
    minChunks: module => /node_modules\//.test(module.resource)
  }),
  new webpack.DefinePlugin({
    ENV: JSON.stringify(env),
    LOG_LEVEL: JSON.stringify('debug')
  }),
  new HtmlWebpackPlugin({
    template: path.join(src, 'index.html'),
    inject: 'body',
    isProd
  }),
  new CopyWebpackPlugin([
    { from: path.join(src, 'assets/particles.json'), to: 'assets/particles.json' }
  ])
];

const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ['babel-loader', 'eslint-loader']
  },
  {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader']
  },
  {
    test: /\.module\.scss$/,
    loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 'sass-loader']
  },
  {
    test: /\.(scss|sass)$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    exclude: /.*\.module.scss$/
  },
  {
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loader: 'url-loader?limit=50000'
  }
];

const alias = {
  containers: path.join(src, './containers'),
  components: path.join(src, './components'),
  reducers: path.join(src, './reducers'),
  actions: path.join(src, './actions'),
  assets: path.join(src, './assets'),
  config: path.join(src, './config.json')
};

module.exports = {
  devtool: isProd ? 'cheap-module-source-map' : 'source-map',
  context: src,
  entry: {
    app: path.join(src, 'index.jsx'),
    polyfills: path.join(src, 'polyfills.js')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      src,
      nodeModules
    ],
    alias
  },
  output: {
    path: dist,
    filename: '[name].bundle.[hash].js',
    sourceMapFilename: '[name].bundle.[hash].map',
    chunkFilename: '[id].chunk.[hash].js'
  },
  module: {
    rules
  },
  plugins,
  devServer: {
    contentBase: isProd ? './www' : './src',
    historyApiFallback: true,
    port: 3000,
    host: '0.0.0.0'
  }
};
