/**
 * @Author: zhaoye
 * @Date: 2017-10-17 17:03:27
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-31 13:47:09
 */
// Karma configuration
// Generated on Tue Oct 17 2017 16:00:58 GMT+0800 (中国标准时间)
const path = require('path')

module.exports = function (config) {
    config.set({

        autoWatch: true,
        frameworks: ['mocha'],

        files: [
            'test/**/*.test.js'
        ],

        preprocessors: {
            '**/*.test.js': ['webpack', 'sourcemap']
        },

        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                alias: {
                    'gome-ui-kit': path.resolve(__dirname, './index.js'),
                }
            },
            module: {
                rules: [{
                        test: /\.vue$/,
                        use: [{
                            loader: 'vue-loader',
                        }]
                    },
                    {
                        test: /\.less$/,
                        loaders: ['style-loader', 'css-loader', 'less-loader']
                    },
                    {
                        test: /\.html$/,
                        loaders: ['html-loader']
                    },
                    {
                        test: /\.hbs$/,
                        loaders: ["handlebars-loader"]
                    },
                    {
                        test: /\.css$/,
                        loaders: ["style-loader", "css-loader"]
                    },
                    {
                        test: /\.(png|jp[e]?g|bmp|gif)$/,
                        loaders: [
                            "url-loader",
                        ],
                    },
                    // instrument only testing sources with Istanbul
                    {
                        //  不包含test.js结尾的正则 /^((?!\.test).)*\.js$/,
                        test: /\.js$/,
                        use: {
                            loader: 'babel-loader',
                        },
                    },
                    // {
                    //     test: /\.js$/,
                    //     use: {
                    //         loader: 'istanbul-instrumenter-loader',
                    //         options: { esModules: true },
                    //     },
                    //     exclude: /test[\\\/]{1}.*\.js$|node_modules/,
                    //     enforce: 'post',
                    // }
                ],
            },
        },

        reporters: ['spec', 'coverage'],

        coverageReporter: {
            dir: './coverage',
            reporters: [{
                    type: 'lcov',
                    subdir: '.'
                },
                {
                    type: 'text-summary'
                }
            ]
        },

        browsers: ['Chrome'],
    })
}
