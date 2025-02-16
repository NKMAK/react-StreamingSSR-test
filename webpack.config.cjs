const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development', // または 'production'
  entry: './server/server.js',
  output: {
    filename: 'server.bundle.mjs', // .mjs 拡張子に変更
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'module', // module に変更
    chunkFormat: 'module', // 追加
  },
  experiments: {
    outputModule: true, // outputModule を有効にする
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/, // .mjs も対象に追加
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' } }], // Node.js の現在のバージョンをターゲットに
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs'], // .mjs を追加
  },
  target: 'node14', // node14 以上を指定 (ES Modules をサポートするバージョン)
  externals: [nodeExternals({ importType: 'module' })], // importType を module に
  externalsPresets: { node: true },
};