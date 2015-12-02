var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

// Original
gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify({transform:'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('default',['browserify', 'copy']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});


// Mine
// It seems gulp understand my_browserify === browserify
gulp.task("my_browserify", function(){
  gulp.src("my_src/js/main.js")
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat("main.js"))
    .pipe(gulp.dest("my_dist/js"));
});


gulp.task("my_copy", function(){
  gulp.src("my_src/index.html")
    .pipe(gulp.dest("my_dist"));
});


gulp.task("my_default", ["my_browserify", "my_copy"]);

gulp.task("my_watch", function(){
  gulp.watch("my_src/**/*.*", ["my_default"]);
});


/*
gulp.task("browserify", function(){
  gulp.src("my_src/js/main.js")
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat("main.js"))
    .pipe(gulp.dest("my_dist/js"));
});


gulp.task("copy", function(){
  gulp.src("my_src/index.html")
    .pipe(gulp.dest("my_dist"));
});


gulp.task("default", ["my_browserify", "my_copy"]);
*/

//gulp.task("watch", function(){
//  gulp.watch("my_src/**/*.*", ["my_default"]);
//});
