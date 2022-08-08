const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { loader } = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "blundle.js",
        publicPath: '/'
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@components": path.resolve(__dirname, "src/components/"),
            "@pages": path.resolve(__dirname, "src/pages/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
            "@icons": path.resolve(__dirname, "public/assets/icons/"),
            "@images": path.resolve(__dirname, "public/assets/images/"),
        }
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /dist/],
                use: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.html.$/,
                use: [
                    { loader: "html-loader" }
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'images/[hash]-[name].[ext]',
                    }
                  }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
}