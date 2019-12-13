var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');


//搬家
gulp.task('concat', function () {
    //do something
    return gulp.src('./js/*').pipe(gulp.dest('./dist/js')) 
});


gulp.task('minicss' ,function(){
//do something
 return gulp.src('./css/plugin.css').pipe(cleanCSS({compatibility: 'ie8'})).pipe(gulp.dest('./dist/css/'))




})


