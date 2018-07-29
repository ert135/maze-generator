<<<<<<< HEAD
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
     app: path.resolve(__dirname, 'src/index.ts'),
  },
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: './dist',
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    publicPath: "/",
    historyApiFallback: {
      index: 'index.html'
    },
    port: 3000
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    rules: [
      {test: /\.tsx?$/, exclude: /node_modules/, loader: "awesome-typescript-loader"},
      {test: /\.js?$/, exclude: /node_modules/, loader: "awesome-typescript-loader"},
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
    ]
  }
=======
module.exports = {
    entry: "./src/draw.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.ts?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "p5": "p5"
    // },
>>>>>>> 5382c03ebe5b1409bbdb335111df2451470a5bdb
};
