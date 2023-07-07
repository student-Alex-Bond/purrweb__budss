import { join, dirname } from 'path';
import PugPlugin, { loader as _loader } from 'pug-plugin';
import { fileURLToPath } from 'url';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);

export default (env) => ({
    mode: 'development',
    entry: {
        index: './src/index.pug',
        // ☝🏽 Insert your PUG HTML files here
    },
    output: {
        path: join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/[name].[contenthash:8].js',
        // ☝🏽 Output filename of files with hash for unique id
        clean: true,
    },
    plugins: [
        new PugPlugin({
            pretty: true,
            // ☝🏽 Format HTML (only in dev mode)
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
                // ☝🏽 Load Pug files
            },
            {
                test: /\.(css|sass|scss)$/,
                use: ['css-loader', 'sass-loader'],
                // ☝🏽 Load Sass files
            },
            {
                // To use images on pug files:
                test: /\.(png|jpg|jpeg|ico)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name].[hash:8][ext]',
                },
            },
            {
                // To use fonts on pug files:
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext][query]',
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: join(__dirname, 'dist/'),
        },
        watchFiles: {
            paths: ['./src/**/*.*', '**/*.scss*'],
            // ☝🏽 Enables HMR in these folders
            options: {
                usePolling: true,
            },
        },
        historyApiFallback: true,
        hot: true,
        open: true,
        port: env.port || 3000,
    },
    stats: 'errors-only',
    // ☝🏽 For a cleaner dev-server run
});
