const gulp = require('gulp'),
      browsersync = require('browser-sync').create(),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
   return gulp.src('./src/scss/**/*.scss')
         .pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
         .pipe(autoprefixer())
         .pipe(gulp.dest('./public/css'))
         .pipe(browsersync.stream());
});

gulp.task('serve', ['sass'], function() {
   browsersync.init({
      notify: false,
      server: "./public"
   });

   gulp.watch(['./src/scss/**/*.scss'], ['sass']);
   gulp.watch(['./public/**/*.html']).on('change', browsersync.reload);
});

gulp.task('default', ['serve']);
