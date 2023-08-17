import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import PugPlugin from 'pug-plugin';

export default {
    target: 'web',

    mode: 'development',

    optimization: {
        runtimeChunk: 'single',
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'src/assets'),
        },
        watchFiles: {
            paths: ['src/**/*.*'],
            options: {
                usePolling: true,
            },
        },
        hot: false,
        compress: true,
        port: 9000,
    },

    entry: {
        // define all Pug files here
        index: './src/index.pug',
    },

    output: {
        path: path.join(__dirname, 'public/'),
        publicPath: './',
        clean: true,
    },

    resolve: {
        alias: {
            // use alias to avoid relative paths like `./../../images/`
            Images: path.join(__dirname, './src/assets/images/'),
            Fonts: path.join(__dirname, './src/assets/fonts/')
        }
    },

    plugins: [
        new PugPlugin({
            js: {
                // output filename of extracted JS file from source script
                filename: 'app/[name]-[contenthash:8].js',
            },
            css: {
                // output filename of extracted CSS file from source style
                filename: 'styles/[name]-[contenthash:8].css',
            },
        }),
    ],

    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: PugPlugin.loader,
            },
            {
                test: /\.(css|sass|scss)$/,
                use: ['css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|ico|svg)$/i,
                type: 'asset/resource',
                generator: {
                    // output filename of images
                    filename: 'assets/images/[name]-[hash:8][ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    // output filename of fonts
                    filename: 'assets/fonts/[name]-[hash:8][ext]',
                },
            },
        ],
    },
};