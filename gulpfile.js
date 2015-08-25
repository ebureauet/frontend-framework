var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  rename = require('gulp-rename'),
  glob = require('glob'),
  browserSync = require('browser-sync'),
  reload      = browserSync.reload,
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
  del = require('del'),
  es = require('event-stream');

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

gulp.task('sass', function() {
  return gulp.src('./src/scss/{,*/}*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/css/'));
});

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

/*
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
});*/

gulp.task('scripts', function() {
  return glob('./src/js/main-**.js', function(err, files) {
    var tasks = files.map(function(entry) {
      return browserify({ entries: [entry] },{debug : true})
        .bundle()
        .pipe(source(entry))
        .pipe(buffer())
        //.pipe(uglify({compress: {pure_funcs: [ 'console.log' ]}}))
        .pipe(rename({
          prefix: 'pkgd-',
          extname: '.min.js'
        }))
        .pipe(gulp.dest('.'));
      });
    return es.merge.apply(null, tasks);
  })
});

gulp.task('scripts-build', function() {
  return glob('./src/js/main-**.js', function(err, files) {
    var tasks = files.map(function(entry) {
      return browserify({ entries: [entry] },{debug : false})
        .bundle()
        .pipe(source(entry))
        .pipe(buffer())
        .pipe(uglify({compress: {pure_funcs: [ 'console.log' ]}}))
        .pipe(rename({
          prefix: 'pkgd-',
          extname: '.min.js'
        }))
        .pipe(gulp.dest('.'));
      });
    return es.merge.apply(null, tasks);
  })
});

gulp.task('serve', ['sass','html'], function() {
    browserSync({
        server: "./src"
    });
    //gulp.watch("src/js/main.js",['scripts']).on('change', reload);
    //gulp.watch("src/scss/*.scss", ['sass','']).on('change', reload);
    gulp.watch([
      "src/html/**/*.html",
      "src/scss/**/*.scss"
    ], ['sass','html']).on('change', reload);
});


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

gulp.task('html-lint', function(){
  return gulp.src(['src/*.html'])
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .on("error", function(err) {
      notifyError("", "HTML")
    })
});

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
      fixedWidth: true,
      centerHorizontally: true,
      normalize: true,
      fontHeight:1000
      //descent: 0
     }))
    .pipe(gulp.dest('src/fonts/icons/'));
});

gulp.task('makeicons', function(callback) {
  runSequence('iconfont', 'sass', 'html');
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('./src/images/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss'
  }));

  // Pipe image stream through image optimizer and onto disk
  var imgStream = spriteData.img
    .pipe(gulp.dest('./src/images/sprite/'));

  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    .pipe(gulp.dest('./src/scss/utils/'));

  return merge(imgStream, cssStream);
});

gulp.task('svg2png', function () {
  return gulp.src('src/images/{,*/}*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('src/images/'));
});

gulp.task('img-optim', function () {
  return gulp.src('src/images/**/{,*/}*.{jpg,gif,png}')
    .pipe(imagemin({
      progressive : true,
      optimizationLevel : 5
    }))
    .pipe(gulp.dest('build/images/'));
});

gulp.task('copy-assets', function(){
  return gulp.src(['src/*.html', 'src/fonts/**', 'src/js/pkgd-**.min.js', 'src/js/assets/**', 'src/images/{,*/}*.{svg,ico}'], {base: "./src"})
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function (cb) {
  del('build', cb);
});

gulp.task('default', function () {
  gulp.watch('./src/scss/**/{,*/}*.{scss,sass}', ['sass']);
  gulp.watch('src/html/**/*.html', ['html']);
  gulp.watch(['src/main*.js','src/js/assets/*.js','src/js/general/*.js'], ['scripts']);
});

gulp.task('build', function(callback) {
  runSequence('clean', 'html', 'sass-build', 'copy-assets', 'scripts-build', 'img-optim');
});
