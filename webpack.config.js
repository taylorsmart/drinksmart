var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: ['babel-polyfill', `${SRC_DIR}/index.jsx`],
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        }
      }, 
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'
            // query: {
            //   modules: true,
            //   localIdentName: '[name]__[local]___[hash:base64:5]'
            // }
          },
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      } 
    ],
  },
  plugins: [
	  new HtmlWebpackPlugin({
		  template: `${SRC_DIR}/index.html`
	  })
  ]
};
