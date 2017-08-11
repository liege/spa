var config = require('./webpack.base');
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

// 生成公用代码
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// 将样式提取到单独的css文件中，而不是打包到js文件或使用style标签插入在head标签中
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.devtool = '#source-map';
config.output = {
        path: path.join(path.resolve('./'), "dist"), // html,css,js,图片等资源文件的打包输出路径
        publicPath:'http://liege.cc/', // html,css,js,图片等资源文件的server上的路径
        filename: "js/[name].js", //根据入口文件输出的对应多个文件名
        chunkFilename: "js/[chunkhash].js"
    }
config.module = {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
                    // 使用提取css文件的插件，ExtractTextPlugin能帮我们提取webpack中引用的和vue组件中使用的样式
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
                    // 使用提取scss文件的插件，ExtractTextPlugin能帮我们提取webpack中引用的和vue组件中使用的样式
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=4000&name=img/[hash:8].[name].[ext]'
                    // 小图转为base64 , 大图输出hash name 文件
            }, {
                test: /\.js$/,
                loaders: ['babel?presets[]=es2015'],
                exclude: /node_modules/
            },
            //bootstrap fonts
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=fonts/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=fonts/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=img/svg+xml' },
        ]
    },
config.plugins = [
        // 提取公共模块
        // new webpack.optimize.CommonsChunkPlugin('js/common.js'),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['jquery','vue'],
        //     minChunks: Infinity,
        //     filename : 'js/common.js'
        // }),
        // new webpack.ProvidePlugin({
        //     $: "jquery" //将别名中的 jquery添加到全局
        // }),
        // // // 配置提取出的样式文件
        // new ExtractTextPlugin("css/[name].css"),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //       warnings: false
        //     }
        // })        
    ]


module.exports = config;