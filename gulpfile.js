var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


//搬家
gulp.task('concat', function () {
    //do something
    return gulp.src('./js/*').pipe(gulp.dest('./dist/js'))
});


gulp.task('minicss',['sass'],function () {
    //do something
    return gulp.src('./css/*.css').pipe(cleanCSS({
        compatibility: 'ie8'
    })).pipe(gulp.dest('./dist/css/'))
});

gulp.task('sass' ,function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

//監看
gulp.task('watch',function(){
    gulp.watch('./sass/*.scss' ,['minicss']);
    gulp.watch(['./*.html' ,'./**/*.html'] ,['fileinclude']);
});

// html module
gulp.task('fileinclude', function() {
    gulp.src(['*.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./dist'));
  });


  gulp.task('default', function () {
    browserSync.init({
        server: {
            //根目錄
            baseDir: "./dist",
            index: "index.html"
        }
    });

    gulp.watch(["sass/*.scss", "sass/**/*.scss"], ['minicss']).on('change', reload);
    gulp.watch(["*.html" , "**/*.html"] , ['fileinclude']).on('change', reload);
    gulp.watch(["dist/*.js"] ).on('change', reload);
});