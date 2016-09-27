var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');


gulp.task('build', function () {
    gulp.src([
            'node_modules/corslite/corslite.js',
            'L.UTFGrid.js','L.UTFGridCanvas.js'
        ])
        .pipe(concat('L.UTFGrid.js'))
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest('./'))
});

gulp.task('watch', function () {
    gulp.watch(['L.UTFGrid.js','L.UTFGridCanvas.js'], ['build']);
});

gulp.task('default', ['build', 'watch']);


