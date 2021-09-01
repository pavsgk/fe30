const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));

const watchDir = './src/**/*.*';
const distDir = './dist';
const cssSource = './src/scss/**/*.scss';
const cssDest = './dist/css';

const cleanDist = (cb) => {
  del.sync(`${distDir}/**`);
  cb();
}

const sassCompile = () => gulp.src(cssSource)
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest(cssDest));

const watch = () => gulp.watch(watchDir, gulp.series('clean', 'sass'));

gulp.task('clean', cleanDist);
gulp.task('sass', sassCompile);
gulp.task('watch', watch)