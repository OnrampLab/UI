var gulp        = require("gulp"),
    connect     = require('gulp-connect'),
    notify      = require('gulp-notify'),
    babel       = require("gulp-babel"),
    jsx         = require('react-jsx-anywhere/gulp')
    concat      = require('gulp-concat');

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
    gulp.watch( watchList, ['list', 'compile']);
});

gulp.task('compile', function () {
    return gulp.src(['dist/utils.js', 'src/**/*.jsx'])
        .pipe(jsx())
        .pipe(babel())
        .on('error', notify.onError({
            title: 'babel to ES5:',
            message: 'Failed'
        }))
        .pipe(concat(getBundleName()))
        .pipe(gulp.dest("build"));
});

gulp.task('toAssets', function () {

    gulp.src('./node_modules/react/dist/**')
        .pipe(gulp.dest("build/assets/react/"));

    gulp.src('./node_modules/bootstrap/dist/**')
        .pipe(gulp.dest("build/assets/bootstrap/"));

    gulp.src('./node_modules/font-awesome/css/**')
        .pipe(gulp.dest("build/assets/font-awesome/css/"));
    gulp.src('./node_modules/font-awesome/fonts/**')
        .pipe(gulp.dest("build/assets/font-awesome/fonts/"));

    gulp.src('./node_modules/jquery/dist/*')
        .pipe(gulp.dest("build/assets/jquery/"));

});

// --------------------------------------------------------------------------------

gulp.task('default', function() {
    console.log('---- bundle name ----');
    console.log(getBundleName());
    gulp.run('connect','watch','compile','toAssets');
});

// --------------------------------------------------------------------------------

var getBundleName = function () {
    var name = require('./package.json').bundleName;
    return name + '.' + 'js';
};

