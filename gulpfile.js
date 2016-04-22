var gulp       	   = require('gulp'),						//gulp
	del            = require('del'),						//清空目录
	imagemin       = require("gulp-imagemin"),				//图片压缩
	jpegRecompress = require("imagemin-jpeg-recompress"),	//jpg压缩
	pngquant       = require("imagemin-pngquant");			//png压缩

gulp.task('delDir', function(){
	return del('min-img/**');
})

gulp.task('default', ['delDir'], function(){
	gulp.src('img/**/*.jpg')
	.pipe(imagemin({use:[jpegRecompress({loops:6})]}))
	.pipe(gulp.dest('min-img/'))

	gulp.src('img/**/*.png')
	.pipe(imagemin({progressive:false,use:[pngquant()]}))
	.pipe(gulp.dest('min-img/'))

	gulp.src('img/**/*.!(jpg|png)')
	.pipe(gulp.dest('min-img/'))
})