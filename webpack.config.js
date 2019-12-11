const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const devMode = process.env.NODE_ENV !== 'production';
const WORDPRESS = true;

const wpPath = (folder, subfolder = '') => {
    const theme = path.basename(path.resolve('./'));
    return `${subfolder}wp-content/themes/${theme}/${folder}`;
};

const entry = './src/app/index.js';

const output = {
    js: 'public/build/app.js?[hash]',
    css: 'public/build/app.css?[hash]',
    // Relative path where the target file(s) will be placed.
    assetsOutputPath: 'public/build',
    // Public path for the target file(s).
    assetsPublicPath: !WORDPRESS
        ? 'public/build'
        : devMode
            ? wpPath('public/build', '/devfolder/') // http://localhost/devfolder/
            : wpPath('public/build'),
};

module.exports = {
    entry: [entry],
    output: {
        path: path.resolve(__dirname),
        filename: output.js,
        publicPath: '/',
    },
    mode: devMode ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'usage',
                                    corejs: '3.0',
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: output.assetsOutputPath,
                            publicPath: output.assetsPublicPath,
                            name: '[name].[ext]?[hash]',
                        },
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    optimizeSSR: false,
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: output.css,
        }),
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/app'),
            '@@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.vue', '.json'],
    },
};
