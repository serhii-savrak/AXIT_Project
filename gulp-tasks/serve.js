const browserSync = require("browser-sync").create();

function serve() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    online: true,
  });
}

exports.browserSync = browserSync;
exports.serve = serve;
