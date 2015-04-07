var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  watch = require('gulp-watch'),
  runSequence = require('run-sequence'),
  minifyCSS = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  fileinclude = require('gulp-file-include'),
  htmlhint = require('gulp-htmlhint'),
  del = require('del');


// Compile SASS
gulp.task('sass', function() {
  return gulp.src('./src/scss/{,*/}*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      browsers: ['ie 9', 'Android 3', 'firefox 20', 'last 2 versions'],
      cascade: true
    }))
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

// CSS Production Build
gulp.task('sass-build', function() {
  return gulp.src('./src/scss/{,*/}*.{scss,sass}')
    .pipe(sass({
      errLogToConsole: false
    }))
    .on("error", function(err) {
      notifyError(err, "SASS")
    })
    .pipe(autoprefixer({
      browsers: ['ie 9', 'Android 3', 'firefox 20', 'last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/css/'))
});

//Copy assets to Build folder
gulp.task('copy-assets', function(){
  return gulp.src(['src/*.html', 'src/fonts/**', 'src/js/lib/**'], {base: "./src"})
    .pipe(gulp.dest('build'));
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

gulp.task('build', function(callback) {
  runSequence('clean', 'html', 'sass-build', 'copy-assets');
});
