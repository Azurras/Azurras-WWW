var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var concat = require('gulp-concat');
//var gulpLoadPlugins = require('gulp-load-plugins');
//var plugins = gulpLoadPlugins();

var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});


gulp.task('scripts', function() {
    return gulp.src([
        "apps/blog/js/blog.js",
        "apps/header/js/header.js",
        "apps/footer/js/footer.js",
        "apps/Survive/Wrappers/Survive-Wrapper-Start.js",
        "apps/Survive/Entities/Player/Player.js",
        "apps/Survive/Entities/Enemies/Enemy.js",
        "apps/Survive/Wrappers/Survive-Wrapper-End.js"])
        //.pipe(uglify())
        .pipe(concat("main.js"))
        //.pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('js/'));
});

gulp.task('styles', function() {
    return gulp.src(
        "assets/css/azurras/azurras.css")
        //.pipe(uglify())
        .pipe(concat("main.css"))
        //.pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('css/main/'));
});

gulp.task('watch', function() {
    gulp.watch('css/**/*.css', ['styles']); 
});


//  Watch Tasks
//gulp.task('watch', function() {
//    gulp.watch('js/**/.js', ['scripts'] )
//});

gulp.task('default', ['scripts', 'styles']);



	// place code for your default task here
	//gulp.src("js/Survive/Wrappers/Survive-Wrapper-Start")
	  //  .pipe(concat("main.all.js"));

//	gulp.src('js/**.js')
//		.pipe(concat("main.all.js"))
//		.pipe(uglify())
//		.pipe(gulp.dest('js'));
//
//
//
//
//	gulp.src('css/**.css')
//		.pipe(concat("main.all.css"))
//		.pipe(uglify())
//		.pipe(gulp.dest('css'));
//});
