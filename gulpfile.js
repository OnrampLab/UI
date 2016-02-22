var path        = require("path");

var gulp        = require("gulp"),
    connect     = require('gulp-connect'),
    notify      = require('gulp-notify'),
    babel       = require("gulp-babel"),
    jsx         = require('react-jsx-anywhere/gulp')
    concat      = require('gulp-concat');

var config = require("./config/config.json");

var watchList = [
    'dist/utils.js',
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.php',
];

// listen
gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('list', function () {
    gulp.src(watchList)
        .pipe(connect.reload());
});
gulp.task('watch', function () {
    gulp.watch( watchList, ['list', 'compileUi']);
});

gulp.task('compileUi', function () {
    return gulp.src(['dist/utils.js', 'src/**/*.jsx', '!src/**/main.jsx'])
        .pipe(jsx())
        .pipe(babel())
        .on('error', notify.onError({
            title: 'babel ES6 to ES5:',
            message: "<%= error %>"
        }))
        .pipe(concat(getUiName()))
        .pipe(gulp.dest("build"));
});

gulp.task('compileBundle', function () {
    return gulp.src([
            './node_modules/react/dist/react.min.js',
            './node_modules/react-dom/dist/react-dom.min.js',
            './node_modules/babel-core/browser.min.js',
        ])
        .pipe(concat(getBundleName()))
        .pipe(gulp.dest("build"));
});

/**
 *  公用程式
 *  注意, 這些檔案 "沒有" watch
 */
gulp.task('toAssets', function () {
    gulp.src('./node_modules/react/dist/**')        .pipe(gulp.dest("build/assets/react/"));
    gulp.src('./node_modules/react-dom/dist/**')    .pipe(gulp.dest("build/assets/react-dom/"));
    gulp.src('./node_modules/babel-core/browser.*') .pipe(gulp.dest("build/assets/babel-core/"));
    gulp.src('./node_modules/bootstrap/dist/**')    .pipe(gulp.dest("build/assets/bootstrap/"));
    gulp.src('./node_modules/font-awesome/css/**')  .pipe(gulp.dest("build/assets/font-awesome/css/"));
    gulp.src('./node_modules/font-awesome/fonts/**').pipe(gulp.dest("build/assets/font-awesome/fonts/"));
    gulp.src('./node_modules/jquery/dist/*')        .pipe(gulp.dest("build/assets/jquery/"));
    gulp.src('./node_modules/lodash/lodash.js')     .pipe(gulp.dest("build/assets/lodash/"));
    gulp.src('./node_modules/trumbowyg/dist/**')     .pipe(gulp.dest("build/assets/trumbowyg/"));
});

// --------------------------------------------------------------------------------

gulp.task('default', function() {
    console.log('---- start ----');
    gulp.run('connect','watch','toAssets','compileUi','compileBundle');
});

// --------------------------------------------------------------------------------

var getUiName = function () {
    return 'react-ui.js';
};

var getBundleName = function () {
    return 'react-bundle.js';
};
