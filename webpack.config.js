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
        publicPath: '',
        filename: 'js/[name].[contenthash:8].js',
        clean: true,
    },
    resolve: {
        extensions: ['', '.js'],
    },
    plugins: [
        new PugPlugin({
            pretty: true,
            css: {
                filename: 'css/[name].[contenthash:8].css',
            },
        }),
    ],
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: _loader,
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                resolve: {
                    fullySpecified: false,
                },
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                        ],
                    },
                },
            },
            {
                test: /\.(css|sass|scss)$/,
                use: ['css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|ico|svg|webp|webm)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name].[hash:8][ext]',
                },
            },
            {
                test: /\.(svg)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/icons/[name].[hash:8][ext]',
                },
            },
            {
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
});
