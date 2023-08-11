const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/[name]-[contenthash].js',
        path: path.resolve(__dirname, './public'),
        clean: true,
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        hot: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ],

    optimization: {
        runtimeChunk: 'single',
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name]-[contenthash][ext]',
                }
            },

            {
                test: /\.(jpg|jpeg|png|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name]-[contenthash][ext]',
                }
            },
        ]
    }
};