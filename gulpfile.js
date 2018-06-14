'use strict';

const
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    remember = require('gulp-remember'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    concatCSS = require('gulp-concat-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    notify = require('gulp-notify'),
    debug = require('gulp-debug'),
    gulpIf = require('gulp-if'),
    del = require('del'),
    iconv = require('gulp-iconv'),
    header = require('gulp-header');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
//const isDevelopment = false;

const path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/',
        app_assets: 'dist/app-assets/',
        assets: 'dist/assets/',
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        html_build: 'dist/*.html',
        html_exclude: '!src/___*.html',
        js: 'src/js/index.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'src/css/index.css',
        app_assets: 'src/app-assets/**/*.*',
        assets: 'src/assets/**/*.*',
        img: 'src/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/**/*.js',
        style: 'src/**/*.css',
        img: 'src/**/*.*',
        fonts: 'src/**/*.*'
    },
    clean: 'dist'
};

gulp.task('html:build', function () {
    return gulp.src([ path.src.html, path.src.html_exclude ])
        .pipe(rigger())
        //.pipe(iconv({ decoding:'utf8', encoding: 'cp1251' }))
        .pipe(header('\ufeff'))
        .pipe(gulp.dest(path.build.html))
        //.pipe(reload({stream: true}));
});

gulp.task('html:encode', function () {
    return gulp.src(path.src.html_build)
        .pipe(iconv({ decoding:'win1251', encoding: 'utf8' }))
        .pipe(gulp.dest(path.build.html))
})

gulp.task('html:encode', gulp.series('html:build', 'html:encode') );

gulp.task('js:build', function () {
    return gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(gulpIf(isDevelopment,sourcemaps.init()))
        .pipe(concat('script.min.js'))
        //.pipe(uglify())
        .pipe(gulpIf(isDevelopment,sourcemaps.write()))
        .pipe(gulp.dest(path.build.js))
        //.pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    return gulp.src(path.src.style)
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        //.pipe(sass())
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({ browsers: ['last 4 versions'] }))
        .pipe(cssmin())
        .pipe(gulpIf(isDevelopment,sourcemaps.write()))
        .pipe(gulp.dest(path.build.css))
        //.pipe(reload({stream: true}));
});

gulp.task('assets', function () {
    return gulp.src([path.src.assets, '!src/assets/js/*.*', '!src/assets/css/*.*' ])
        .pipe(gulp.dest(path.build.assets))
        //.del('dist/assets/js/index.js')
        //.pipe(del('dist/assets/js/scripts.js'))
        //.pipe(del('dist/assets/css/custom.css'))
        //.pipe(del('dist/assets/css/index.css'))
})

gulp.task('app_assets', function () {
    return gulp.src(path.src.app_assets)
        .pipe(gulp.dest((path.build.app_assets)))
})

gulp.task('clean', function () {
    return del(path.clean)
});

gulp.task('build', gulp.series('clean', 'style:build', 'js:build', 'html:build', 'assets', 'app_assets') );

gulp.task('watch', function () {
    gulp.watch([path.watch.html], gulp.series('html:build'));
    gulp.watch([path.watch.js], gulp.series('js:build'));
    gulp.watch([path.watch.style], gulp.series('style:build'));
});

gulp.task('dev', gulp.series('build', 'watch'))


