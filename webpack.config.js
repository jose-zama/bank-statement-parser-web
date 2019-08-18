const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    bootstrap: './bootstrap.js',
    styles: './app.scss'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['index.html'])
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
			  loader: 'sass-loader',
			  options: {
			    includePaths: ['./node_modules']
			  }
		},
        ]
      },
      {
        test: /\.html$/,
        options: {
          includePaths: ['./node_modules/bower_components/highcharts-chart']
        },
        loader: 'polymer-webpack-loader'
      },
    ]
  },
};
