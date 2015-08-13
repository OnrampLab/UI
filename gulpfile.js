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
        .pipe(concat('react-stargazer.js'))
        .pipe(gulp.dest("build"));
});

// --------------------------------------------------------------------------------

gulp.task('default', function() {
    console.log(getBundleName());
    gulp.run('connect','watch','compile');
});

// --------------------------------------------------------------------------------

var getBundleName = function () {
    var version = require('./package.json').version;
    var name = require('./package.json').bundleName;
    return name + '.' + version + '.' + 'js';
};

