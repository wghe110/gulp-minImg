const { series, src, dest } = require('gulp');
const clean = require('gulp-clean');
const tinypng = require('gulp-tinypng-compress');

/** tinypn start */
const cleanTinypng = (cb) => {
    src(['tinypng/**/*', '!tinypng/.gitkeep'], {read: false})
        .pipe(clean())
    cb()
}

const tinypngFn = (cb) => {
    src('images/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'xwdHxSdZkSBLj8Rf9Rv8qqqXvQmvRpHL',
            // sigFile: 'tinypng/.tinypng-sigs',
            log: true
        })).pipe(dest('tinypng'))
}

exports.tinypng = series(cleanTinypng, tinypngFn)
/** tinypn end */