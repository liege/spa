var vue = require('vue-loader');
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

// 定义路径
var ROOT_PATH = path.resolve('./');
console.log('ROOT_PATH--->',ROOT_PATH)
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');
var argv = require('yargs').argv;  //获取命令参数

module.exports = {
    entry: getEntry(), //获取项目入口js文件
    output: {
        path: path.join(__dirname, "dist"), // html,css,js,图片等资源文件的打包输出路径
        publicPath: 'http://192.168.2.37:8888/', // html,css,js,图片等资源文件的server上的路径
        filename: "js/[name].js", //根据入口文件输出的对应多个文件名
        chunkFilename: "js/[chunkhash].js"
    },
    module: {
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
    resolve: {
        root: SRC_PATH,
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue', '.scss'],
        // 别名，可以直接使用别名来代表设定的路径及文件
        alias: {
            baseStyle: "sass/base.scss",
            layoutStyle: "sass/layout.scss",
            commonStyle: "sass/common.scss"
        }
    }
}

//获取入口文件
function getEntry() {
    var jsPath = path.resolve(SRC_PATH, 'js');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [],
        files = {};
    dirs.forEach(function(item) {
        matchs = item.match(/(.+)\.js$/);
        if (matchs) {
            files[matchs[1]] = path.resolve(SRC_PATH, 'js', item);
        }
    });
    console.log('page js files--->', files);
    return files;
}
