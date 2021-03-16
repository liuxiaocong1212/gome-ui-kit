var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanPlugin = require('webpack-clean-plugin');
var autoprefixer = require('autoprefixer');
// PackConfig.js
function PackConfig(options) {
  // Configure your plugin with options...
}

PackConfig.prototype.apply = function(compiler) {
  // ...
  compiler.plugin('compilation', function(compilation) {
    console.log('The compiler is starting a new compilation...');

    compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
        console.log(htmlPluginData.html)
      //htmlPluginData.html += 'The magic footer';
      callback(null, htmlPluginData);
    });
  });

};
module.exports = {
    entry: './test.js',
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'build.js',
        // export itself to a global var
        libraryTarget: "umd",
        // name of the global var: "Foo"
        library: "GomeUIKit"
    },
    vue: {
        loaders: {
            js: 'babel',
        }
    },
    imageWebpackLoader: {
        mozjpeg: {
            quality: 70
        },
        pngquant:{
            quality: "70",
            speed: 1
        },
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue',
            },
            {test: /\.less$/, loader: 'style!css!postcss!less'},
            {test: /\.html$/, loader: 'html'},
            { test: /\.hbs$/, loader: "handlebars" },
            {test: /\.css$/, loader: 'style!css!postcss!less'},
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jp[e]g|bmp|gif)$/,
                loaders: [
                    "url-loader",
                ],
            }
        ]
    },
    compress: {
        warnings: false,
    },
    postcss: [ autoprefixer({ browsers: ['Firefox 15', 'iOS 7'] }) ],
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object"),
            CUSTOM: 11,
        }),
        /*new WebpackCleanPlugin({
            on: "emit",
            path: ['./dev']
        }),*/
        new webpack.SourceMapDevToolPlugin({
            // asset matching
            test: /\.(js|vue)$/,
            //include: String | RegExp | Array,
            exclude: ['./dev','./bin','./node_modules','./test'],

            // file and reference
            filename: 'build.map',
            append: '//# sourceMappingURL=build.map',//false | String,

            // sources naming
            moduleFilenameTemplate: 'webpack:///[resource-path]?[loaders]',
            fallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[loaders]',//'webpack:///[resource-path]?[hash]',

            // quality/performance
            //module: Boolean,
            //columns: false,
            //lineToLine: Boolean | Object
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.hbs',
            inject: 'body',
            showErrors: true,
            cache: true,
        }),
       // new PackConfig({options: 'aaa'}),
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            sourceMap : true,
        })*/
    ]
    
}