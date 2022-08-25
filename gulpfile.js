const { series, parallel, src, dest } = require('gulp');
// const imagemin = require('gulp-imagemin')
const tinypng = require('gulp-tinypng-compress');
const clean = require('gulp-clean');

function cleanImagemin(cb) {
	// body omitted
	src('./imagemin/')
        .pipe(clean());
	cb();
}

function cleanTinypng(cb) {
	// body omitted
	src('/tinypng', {read: false})
    //     .pipe(clean());
	cb();
}


const imageminTask = (cb) => {
	src('/images/**/*.{png,jpg,jpeg}')
	.pipe(imagemin())
	.pipe(dest('/imagemin/'))

	cb()
}

const tinypngTask = (cb) => {
	// src('/images/**/*.{png,jpg,jpeg}')
	// .pipe(tinypng({
	// 	key: 'xwdHxSdZkSBLj8Rf9Rv8qqqXvQmvRpHL',
	// 	// sigFile: '/.tinypng-sigs',
	// 	log: true
	// }))
	// .pipe(dest('/tinypng/'));

	cb()
}

exports.tinypng = series(cleanTinypng, tinypngTask)
exports.imagemin = series(cleanImagemin, imageminTask)