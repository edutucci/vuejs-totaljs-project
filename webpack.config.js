var path = require('path');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

var WebpackConfig = {
  entry: './main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './public/js')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: [path.resolve(__dirname, "node_modules")]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".vue", ".css"]
  },
  plugins: [
     new WebpackBrowserPlugin({
       port: 8000
     })
  ]   
}

var configuration = [WebpackConfig];
configuration.watch = true;

/* EXPORTS */
module.exports = configuration;


