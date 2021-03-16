var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanPlugin = require('webpack-clean-plugin');

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
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
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
                exclude: /(node_modules|bower_components)/,
                loader: 'vue',
            },
            {test: /\.less$/,exclude: /(node_modules|bower_components)/, loader: 'style!css!less'},
            {test: /\.html$/,exclude: /(node_modules|bower_components)/, loader: 'html'},
            { test: /\.hbs$/,exclude: /(node_modules|bower_components)/, loader: "handlebars" },
            {test: /\.css$/,exclude: /(node_modules|bower_components)/, loader: 'style!css!less'},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jp[e]g|bmp|gif)$/,
                loaders: [
                    "url-loader",
                ],
                exclude: /(node_modules|bower_components)/,
            }
        ]
    },
    /*postcss: function () {
        return [ require('autoprefixer',{
            "browsers": ["Firefox > 20", "Chrome > 25", "iOS > 7", "Android > 4", "ChromeAndroid > 4"]
        })];
    },*/
    plugins: [
       /* new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object"),
            CUSTOM: 11,
        }),
        new WebpackCleanPlugin({
            on: "emit",
            path: ['./dev']
        }),
        new webpack.SourceMapDevToolPlugin({
            // asset matching
            test: /\.(js|vue)$/,
            //include: String | RegExp | Array,
            exclude: ['./dev','./bin','./node_modules','./test'],

            // file and reference
            //filename: 'build.map',
            //append: '//#sourceMappingURL=build.map',//false | String,

            // sources naming
            //moduleFilenameTemplate: 'webpack:///[resource-path]?[loaders]',
            fallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[loaders]',//'webpack:///[resource-path]?[hash]',

            // quality/performance
            //module: Boolean,
            columns: false,
            //lineToLine: Boolean | Object
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.hbs',
            inject: 'body',
            showErrors: true,
            cache: true,
        }),*/
        //new PackConfig({options: 'aaa'}),
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            sourceMap : true,
        })*/
    ]
    
}