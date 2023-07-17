const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(path.resolve(__dirname, "src"), 'path.resolve(__dirname, "src")');

const getFileName = (ext) => `[name].[contenthash].${ext}`;

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  //   entry: "./src/js/index.js",
  entry: {
    main: "./js/index.js",
    lib: "./js/lib.js",
  },
  output: {
    path: path.resolve("dist"),
    filename: getFileName("js"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: getFileName("css"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i, //.scss .sass
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },

      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@js": path.resolve(__dirname, "./src/js"),
      "@style": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
};
