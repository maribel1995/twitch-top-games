const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env) => {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|gif|jpeg)$/,
          use: ["file-loader"],
        },
      ],
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components/"),
        assets: path.resolve(__dirname, "src/assets/"),
        api: path.resolve(__dirname, "src/api/"),
        pages: path.resolve(__dirname, "src/pages/"),
        utils: path.resolve(__dirname, "src/utils/"),
        __mocks__: path.resolve(__dirname, "src/__mocks__/"),
      },
    },
    devtool: false,
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
      }),
      new webpack.SourceMapDevToolPlugin({}),
      new webpack.DefinePlugin({
        "process.env.TWITCH_URL": JSON.stringify(env.TWITCH_URL),
        "process.env.TOKEN": JSON.stringify(env.TOKEN),
        "process.env.CLIENT_ID": JSON.stringify(env.CLIENT_ID),
      }),
    ],
  };
};
