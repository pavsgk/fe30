import gulp from 'gulp';
import clean from 'gulp-clean';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

import BS from 'browser-sync';
const browserSync = BS.create();

import gulpSass from 'gulp-sass';
import dartSass from 'sass';
const sass = gulpSass(dartSass);

gulp.task('clean', () => gulp.src('dist/*', {read: false}).pipe(clean()));
gulp.task('buildCss', () => gulp.src('src/scss/**/*')
  .pipe(sass())
  // .pipe(autoprefixer({cascade: false}))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css')));

gulp.task('build', gulp.series('clean', 'buildCss'));

gulp.task('dev', () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch(['src/**/*', 'index.html']).on('change', gulp.series('clean', 'buildCss', browserSync.reload));
});