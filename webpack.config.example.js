var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanPlugin = require('webpack-clean-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: './examples/index.js',
    output: {
        path: path.resolve(__dirname, 'examples'),
        filename: 'build.js',
    },
    resolve: {
        alias: {
            'gome-ui-kit': path.resolve(__dirname, './index.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loaders: ['vue-loader'],
            },
            {test: /\.less$/, loaders: ['style-loader','css-loader','less-loader']},
            {test: /\.html$/, loaders: ['html-loader']},
            { test: /\.hbs$/, loaders: ["handlebars-loader"] },
            {test: /\.css$/, loaders: ["style-loader", "css-loader"]},
            {
                test: /\.js$/,
                loaders:[ 'babel-loader']
            },
            {
                test: /\.(png|jp[e]?g|bmp|gif)$/,
                loaders: [
                    "url-loader",
                ],
            }
        ]
    },
    // postcss: [ autoprefixer({ browsers: ['Firefox 15', 'iOS 7'] }) ],
    plugins: [
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: './examples/index.hbs',
        //     inject: 'body',
        //     showErrors: true,
        //     cache: true,
        // }),
        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: require('./node_modules/gome-vue-vendor/gomeVueVendor-manifest.json')
        // }),
        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: require('./node_modules/gome-dll-utils/gomeDLLUtils-v1-manifest.json')
        // }),
    ]
}
