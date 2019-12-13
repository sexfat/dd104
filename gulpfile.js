var gulp = require('gulp');

gulp.task('concat', function () {
    //do something
    return gulp.src('./index.html').pipe(gulp.dest('./dist/')) 
});