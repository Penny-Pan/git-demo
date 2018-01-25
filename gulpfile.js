'use strict';
/*
*1.less 编译 压缩 合并
*2.js合并 压缩 混淆
*3.img复制
*4.html压缩
*/

var gulp = require('gulp')
var less = require('gulp-less')
var cssnano = require('gulp-cssnano')
var concat = require("gulp-concat")
var uglify = require('gulp-uglify')
var htmlmin = require('gulp-htmlmin')

//1.less编译 压缩 合并
gulp.task('style',function(){
	gulp.src(['src/styles/*.less','!src/style/_*.less'])//!src/style/_*.less这个的意思是不对_*.less文件进行处理
		.pipe(less())
		.pipe(cssnano())
		.pipe(gulp.dest('dist/styles'))
		.pipe(reload({
      		stream: true
    		}))
})

//2.js合并 压缩 混淆
gulp.task('script',function(){
	gulp.src('src/scripts/*.js')
		.pipe(concat('all.js'))//合并之后生成all.js
		.pipe(uglify())
		.pipe(gulp.dest('dist/scripts'))
		.pipe(reload({
      		stream: true
    		}))
})

//3.img复制
gulp.task('img',function(){
	gulp.src('src/images/*.*')
		.pipe(gulp.dest('dist/images'))
		.pipe(reload({
      		stream: true
    		}))
})

//html压缩
gulp.task('html',function(){
	gulp.src('src/*.html')
		.pipe(htmlmin({collapseWhitespace:true}))
		.pipe(gulp.dest('dist'))
		.pipe(reload({
      		stream: true
    		}))
})

//启动服务，并监视变化
var browserSync = require('browser-sync')
var reload = browserSync.reload
gulp.task('serve',function(){
	browserSync({
		server:{
			baseDir:'dist'
		}
	})

	 gulp.watch('src/styles/*.less',['style']);
  gulp.watch('src/scripts/*.js',['script']);
  gulp.watch('src/images/*.*',['image']);
  gulp.watch('src/*.html',['html']);
})
