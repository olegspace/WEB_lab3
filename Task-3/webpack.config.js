const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/Slyder/slyder.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/Slyder/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

// module.exports = {
//     mode:"development",
//     entry: './src/index1.js',
//     output: {
//         filename: 'index1.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader'],
//             },
//         ],
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index1.html'
//         })
//     ],
// }
