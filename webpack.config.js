const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "./dist/js/bundle2.js",
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: "/node_modules",
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }, { loader: "awesome-typescript-loader" }],
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
