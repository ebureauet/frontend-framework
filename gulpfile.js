var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  fileinclude = require('gulp-file-include'),
  htmlhint = require('gulp-htmlhint');


// Gulp Sass Task
gulp.task('sass', function() {
  gulp.src('./src/scss/{,*/}*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/css/'));
})

// HTML include system
gulp.task('html', function() {
  return gulp.src('src/html/templates/*.html')
   .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
    }))
    .on("error", function(err) {
      notifyError(err, "HTML")
    })
   .pipe(gulp.dest('src/'))
   //.pipe(reload({stream:true}));
});


gulp.task('clean', function (cb) {
  del('build', cb);
});

// Create Gulp Default Task
// ------------------------
// Having watch within the task ensures that 'sass' has already ran before watching
//
// This setup is slightly different from the one on the blog post at
// http://www.zell-weekeat.com/gulp-libsass-with-susy/#comment-1910185635
gulp.task('default', ['sass'], function () {
  gulp.watch('./src/scss/{,*/}*.{scss,sass}', ['sass'])
});
