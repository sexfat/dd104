var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');


//搬家
gulp.task('concat', function () {
    //do something
    return gulp.src('./js/*').pipe(gulp.dest('./dist/js'))
});


gulp.task('minicss', function () {
    //do something
    return gulp.src('./css/plugin.css').pipe(cleanCSS({
        compatibility: 'ie8'
    })).pipe(gulp.dest('./dist/css/'))
});

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});