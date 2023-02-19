const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
  src: path.resolve(__dirname, "../src"),
  build: path.resolve(__dirname, "../dist"),
};

module.exports = {
  entry: {
    popup: PATHS.src + "/popup.tsx",
    options: PATHS.src + "/options.tsx",
    background: PATHS.src + "/background.ts",
    content_script: PATHS.src + "/content_script.tsx",
  },
  output: {
    // the build folder to output bundles and assets in.
    path: PATHS.build,
    // the filename template for entry chunks
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks(chunk) {
        return chunk.name !== "background";
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css?$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: ".", to: "../dist", context: "public" }],
      options: {},
    }),
    // Extract CSS into separate files
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
