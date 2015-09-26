var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

gulp.task('less', function() { 
	return gulp.src('styles.less')
		    .pipe(less())
		    .pipe(autoprefixer({
	            browsers: ['last 2 versions'],
	            cascade: false
	        }))
	        .pipe(minifyCss({compatibility: 'ie8'}))
		    .pipe(gulp.dest('./css'));
});

gulp.task('default',['less'], function() {
	console.log('esto es un task')
});