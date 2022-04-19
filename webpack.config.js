const path = require('path');
const config = require('./config/webpack.config')(process.env.NODE_ENV);

const cfg = {
  ...config,
  entry: {
    unicorns: './src/index.js',
  },
  output: {
    ...config.output,
    library: 'Unicorns',
    publicPath: process.env.PUBLIC_PATH || '/',
    filename: 'static/js/[name].js',
    sourceMapFilename: 'static/js/[id].[contenthash].chunk.map',
    chunkFilename: 'static/js/[id].[contenthash].chunk.js',
    path: path.resolve(__dirname, 'dist/'),
    library: 'Astronomix', // Desired name for the global variable when using as a drop-in script-tag.
    libraryTarget: 'umd',
    globalObject: 'this',
    assetModuleFilename: 'static/images/[name].[contenthash][ext][query]',
  },
  optimization: {
    ...config.optimization,
    usedExports: true,
    minimize: config.mode === 'production',
    emitOnErrors: true,
    removeAvailableModules: true,
    concatenateModules: true,
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: false,
          filename: (pathData) => {
            return `${pathData.chunk.id}.[contenthash].vendor.js`;
          },
        },
        default: {
          reuseExistingChunk: false,
        },
      },
    },
  },
  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.(png|jpg|jpeg|webp|gif|svg|ico)$/,
        type: 'asset/resource',
      },
    ],
  },
};

module.exports = cfg;
