const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const server = require('gulp-server-livereload');

const fileIncludeSettings = {
	prefix: '@@',
	basepath: '@file'
};

gulp.task('includeFiles', function() {
	return gulp.src('./src/*.html')
		.pipe(fileInclude(fileIncludeSettings))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function() {
	return gulp.src('./src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('copyImages', function() {
	return gulp.src('./src/img/**/*').pipe(gulp.dest('./dist/img/'));
});

const serverOptions = {
	livereload: true,
	open: true
};

gulp.task('startServer', function() {
	return gulp.src('./dist/').pipe(server(serverOptions));
});