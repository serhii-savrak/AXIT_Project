const { watch, series } = require("gulp");
const { styles } = require("./styles.js");
const { browserSync } = require("./serve.js");
const { html } = require("./html.js");

function browserReload() {
  return browserSync.reload();
}

const { copyImages } = require("./copyimages.js");

function watcher() {
  watch("./src/html/**/*.html").on("change", series(html, browserReload));
  watch("./src/scss/*.scss").on("change", series(styles, browserReload));
  watch("./src/img/*").on("change", series(copyImages, browserReload));
}

exports.watcher = watcher;
exports.browserReload = browserReload;
