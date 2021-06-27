const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // Webpack의 출력물에서 디버깅을 하기위해 소스 맵을 허용합니다.
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    // 확인 가능한 확장자로 '.ts' 와 '.tsx' 를 추가합니다.
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)|(dist)/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        //css-loader 먼저 그 뒤 style-loader처리
        use: ['style-loader', 'css-loader'],
        exclude: /(node_modules)|(public)/,
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          name: 'images/[hash].[ext]',
          limit: 10000,
        },
      },
    ],
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    disableHostCheck: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://35.216.74.113:8989',
    //     secure: false,
    //     changeOrigin: true,
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    //     'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    //   },
    // },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
      filename: path.join(__dirname, './dist/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // 경로가 다음 중 하나와 일치하는 모듈을 가져올 때,
  // 해당 전역 변수가 있다고 가정하고 사용합니다.
  // 브라우저가 빌드간에 라이브러리를 캐시 할 수 있도록
  // 모든 의존성을 묶지 않아도 되기 때문에 중요합니다.
  // externals: {
  //     "react": "React",
  //     "react-dom": "ReactDOM"
  // }
};
