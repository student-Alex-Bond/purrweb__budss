import { resolve, dirname } from 'path';
import PugPlugin, { loader as _loader } from 'pug-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env) => ({
    mode: env.mode === 'development' ? 'development' : 'production',
    entry: {
        index: './src/index.pug',
    },
    output: {
        path: resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/[name].[contenthash:8].js',
        clean: true,
    },
    plugins: [
        new PugPlugin({
            pretty: true,
            css: {
                filename: 'css/[name].[contenthash:8].css',
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: _loader,
            },
            {
                test: /\.(css|sass|scss)$/,
                use: ['css-loader', 'sass-loader'],
                // ☝🏽 Load Sass files
            },
            {
                // To use images on pug files:
                test: /\.(png|jpg|jpeg|ico|svg)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name].[hash:8][ext]',
                },
            },
            {
                // To use images on pug files:
                test: /\.(svg)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/icons/[name].[hash:8][ext]',
                },
            },
            {
                // To use fonts on pug files:
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext][query]',
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: resolve(__dirname, 'dist/'),
        },
        watchFiles: {
            paths: ['./src/**/*.*', '**/*.scss*'],
            // ☝🏽 Enables HMR in these folders
            options: {
                usePolling: false,
            },
        },
        client: {
            progress: true,
        },
        historyApiFallback: true,
        hot: true,
        open: true,
        port: env.port || 3000,
    },
    stats: 'errors-only',
    // ☝🏽 For a cleaner dev-server run
});
