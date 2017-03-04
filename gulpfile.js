var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    cssshrink = require('gulp-cssshrink'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload');
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

var paths = {
    styles: {
        src: 'sass/',
        files: 'sass/**/*.scss',
        dest: 'public/css'
    }
};

gulp.task('sass', () => {
    gulp.src(paths.styles.files)
        .pipe(plumber({
            errorHandler: notify.onError("Sass Error: <%= error.message %>")}
        ))
        .pipe(sassGlob())
        .pipe(sass({
            outputStyle: 'compressed',
            sourceComments: false,
            includePaths: [paths.styles.src],
            errLogToConsole: true
        }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(livereload());
});

gulp.task('concat', () => {
  return gulp.src([
      './scripts/libs/es5-shim.min.js',
      './scripts/libs/es5-sham.min.js',
      './scripts/libs/warn-polyfill.js',
      './scripts/libs/event-polyfill.js',
      './scripts/libs/console-polyfill.js'
    ])
    .pipe(concat('ie8.js'))
    .pipe(gulp.dest('./public/scripts'));
});

gulp.task('js', () => {
  return browserify()
    .transform("babelify", {
      presets: ["latest", "react"]
    })
    .add('./scripts/src/app.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest("./public/scripts"))
    .pipe(livereload());
});

gulp.task('watch', () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch("./scripts/src/**/*.*", ['js']);
  livereload.listen();
});

gulp.task('release', ['concat', 'sass', 'js']);
gulp.task('default', ['watch', 'concat', 'sass', 'js']);
