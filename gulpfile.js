var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var path = require('path');
var clean = require('gulp-clean'); //清空文件夹

// 定义路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');


var SRC_PATH = 'src/';
var DIST_PATH = 'dist/';

gulp.task('default',['clear','htmlmin']);

//清空输出目录
gulp.task('clear',function(){
	gulp.src(DIST_PATH + '*',{read: false})
		.pipe(clean());
});
//压缩HTML
gulp.task('htmlmin',function(){
    return gulp.src(SRC_PATH+'*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(DIST_PATH));
});
