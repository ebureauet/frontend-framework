var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  watch = require('gulp-watch'),
  runSequence = require('run-sequence'),
  minifyCSS = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  notify = require('gulp-notify'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  fileinclude = require('gulp-file-include'),
  htmlhint = require('gulp-htmlhint'),
  imagemin = require('gulp-imagemin'),
  iconfont = require('gulp-iconfont'),
  iconfontcss = require('gulp-iconfont-css'),
  del = require('del');

var notifyError = function(err, lang) {
  console.log(err);
  notify.onError({
    title: lang + " error",
    // subtitle: "Error!",
    message: "Check console",
    sound: "Basso"
  })(err);
};

var fontName = 'Icons';

// Compile SASS
gulp.task('sass', function() {
  return gulp.src('./src/scss/{,*/}*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer({
      browsers: ['ie 9', 'Android 3', 'firefox 20', 'last 2 versions'],
      cascade: true
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
   .pipe(gulp.dest('src/'));
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
    .pipe(gulp.dest('./build/css/'));
});

// Scripts browserify
gulp.task('scripts', function() {
  return browserify('./src/js/main.js', { debug: true })
    .bundle()
    .on("error", function(err) {
      notifyError(err, "JS")
    })
    .pipe(source('main.min.js'))
    .pipe(buffer())
    //.pipe(uglify({compress: {pure_funcs: [ 'console.log' ]}}))
    .pipe(gulp.dest('src/js'));
    //.pipe(reload({stream:true}));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass','html'], function() {
    browserSync({
        server: "./src"
    });

    gulp.watch("src/scss/*.scss", ['sass','']);
    gulp.watch("src/html/**/*.html", ['html']).on('change', reload);
});

//browser-sync task
/*
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: "src/",
    },
    open: false,
    ghostMode: false
  });
});
*/

//look for suspicious html coding
gulp.task('html-lint', function(){
  return gulp.src(['src/*.html'])
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .on("error", function(err) {
      notifyError("", "HTML")
    })
});

//create svg icon fonts
gulp.task('iconfont', function(){
  gulp.src(['src/svg/*.svg'])
    .pipe(iconfontcss({
      fontName: fontName,
      path: './node_modules/gulp-iconfont-css/templates/_icons.scss',
      targetPath: '../../scss/components/_icons.scss',
      fontPath: '../fonts/icons/'
    }))
    .pipe(iconfont({
      fontName: fontName,
      normalize: true,
      fontHeight: 1010
     }))
    .pipe(gulp.dest('src/fonts/icons/'));
});

//handle svg icon fonts and scss requirements for it
gulp.task('iconscss', function(callback) {
  runSequence('iconfont', 'sass', 'html');
});

//process images for optimization
gulp.task('img-optim', function () {
    return gulp.src('src/img/**')
      .pipe(imagemin())
      .pipe(gulp.dest('build/img/'));
});

//Copy assets to Build folder
gulp.task('copy-assets', function(){
  return gulp.src(['src/*.html', 'src/fonts/**', 'src/js/lib/**'], {base: "./src"})
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function (cb) {
  del('build', cb);
});

gulp.task('default', ['sass'], function () {
  gulp.watch('./src/scss/{,*/}*.{scss,sass}', ['sass'])
});

gulp.task('build', function(callback) {
  runSequence('clean', 'html', 'sass-build', 'copy-assets');
});
