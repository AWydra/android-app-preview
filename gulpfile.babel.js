import gulp from "gulp";
import babel from "gulp-babel";
import sass from "gulp-sass";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import autoprefixer from "gulp-autoprefixer";
import clean from "gulp-clean-css";
import browserSync from "browser-sync";
import del from "del";
import connect from "gulp-connect-php";

const sync = browserSync.create();
const reload = sync.reload;
const config = {
  paths: {
    src: {
      php: "./src/**/*.php",
      img: "./src/img/**/*.*",
      sass: ["src/sass/style.scss"],
      app: ["src/js/plugins/*.js", "src/js/app/*.js"],
      creator: ["src/js/creator/*.js"],
      html: "src/*.html",
      fonts: "src/fonts/*.*"
    },
    dist: {
      main: "./dist",
      css: "./dist/css",
      js: "./dist/js",
      img: "./dist/img",
      fonts: "./dist/css/fonts/"
    }
  }
};

gulp.task("sass", () => {
  return gulp
    .src(config.paths.src.sass)
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(clean())
    .pipe(gulp.dest(config.paths.dist.css))
    .pipe(sync.stream());
});

function refresh(done) {
  reload();
  done();
}

gulp.task(
  "js",
  gulp.series(function js() {
    return gulp
      .src(config.paths.src.app)
      .pipe(
        babel({
          presets: ["env"]
        })
      )
      .pipe(concat("main.js"))
      .pipe(uglify())
      .pipe(gulp.dest(config.paths.dist.js));
  }, refresh)
);

gulp.task(
  "creator",
  gulp.series(function js() {
    return gulp
      .src(config.paths.src.creator)
      .pipe(
        babel({
          presets: ["env"]
        })
      )
      .pipe(concat("creator.js"))
      .pipe(uglify())
      .pipe(gulp.dest(config.paths.dist.js));
  }, refresh)
);

gulp.task(
  "static",
  gulp.series(
    function movePHP() {
      return gulp
        .src(config.paths.src.php)
        .pipe(gulp.dest(config.paths.dist.main));
    },
    function moveHTML() {
      return gulp
        .src(config.paths.src.html)
        .pipe(gulp.dest(config.paths.dist.main));
    },
    function moveFonts() {
      return gulp
        .src(config.paths.src.fonts)
        .pipe(gulp.dest(config.paths.dist.fonts));
    },
    function moveImages() {
      return gulp
        .src(config.paths.src.img)
        .pipe(gulp.dest(config.paths.dist.img));
    },
    refresh
  )
);

gulp.task("clean", () => {
  return del([config.paths.dist.main]);
});

gulp.task("build", gulp.series(["clean", "sass", "js", "static", "creator"]));

function server() {
  connect.server({}, function() {
    sync.init({
      injectChanges: true,
      proxy: "127.0.0.1/android-app-preview/dist"
    });
  });
}

gulp.task("default", gulp.series(["build"]));

gulp.task(
  "watch",
  gulp.series(["default"], function watch() {
    gulp.watch("src/sass/**/*.scss", gulp.series(["sass"]));
    gulp.watch("src/js/app/*.js", gulp.series(["js"]));
    gulp.watch("src/js/creator/*.js", gulp.series(["creator"]));
    gulp.watch(["src/*.php", "src/*.html"], gulp.series(["static"]));
    return server();
  })
);
