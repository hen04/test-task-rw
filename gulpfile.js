var gulp = require('gulp'),
    stylus = require('gulp-stylus'), 
    jade = require('gulp-jade'), 
    autoprefixer = require('gulp-autoprefixer'), 
    rename = require('gulp-rename'), 
    nib = require('nib'),
    minifyCss = require('gulp-minify-css');
 


// Stylus
gulp.task('stylus', function () {
  gulp.src('src/*.styl') // Исходный файл
    .pipe(stylus({
      use: nib(), 
      compress: false
    })) // Используем nib и сжимаем файл
    .on('error', console.log) // Выводим ошибки в консоль
    .pipe(gulp.dest('build/css/')); // Файл на выходе
});

// минификация css, добавление префиксов, добавляет .min к имени файла
gulp.task('mainfile', function () {
  return gulp.src('build/css/test-task-rw.css')
    .pipe(minifyCss())
    .pipe(autoprefixer('last 10 version', '> 1%', 'ie9'))
    .pipe(rename('test-task-rw.min.css'))
    .pipe(gulp.dest('build/css/'));
});


// Jade
gulp.task('jade', function(){
  gulp.src('src/*.jade') // Исходный файл
    .pipe(jade({pretty: true})) // Выводим красивый код
    .on('error', console.log) // Выводим ошибки в консоль
    .pipe(gulp.dest('build/')); // Файл на выходе
});



// Watch
gulp.task('watch', function(){
  gulp.watch('src/*.jade',['jade']);
  gulp.watch('src/*.styl',['stylus']);
});