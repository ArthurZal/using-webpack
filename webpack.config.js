const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "js", "index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: {
        directory: path.join(__dirname, "dist", "index.html"), 
    },
    port: 3000,
    open: true,
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: path.resolve(__dirname, "node_modules"),
      },
      {
        test: /\.js$/i,
        exclude: path.resolve(__dirname, "node_modules"),
        use: {
            loader: "babel-loader",
            options: {
                targets: "defaults",
                presets: [
                    ["@babel/preset-env"]
                ]
            }
        }
      }
    ],
  },
};
