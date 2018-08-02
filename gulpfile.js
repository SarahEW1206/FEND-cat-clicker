var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');


var sassSources = 'sass/**/*.scss';

gulp.task('lint', () => {
    return gulp.src(['js/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});


gulp.task('serve', ['styles', 'lint'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch( sassSources, ['styles']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch('js/**/*.js', ['lint']);
});


gulp.task('styles', function() {
	gulp.src(sassSources)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);


