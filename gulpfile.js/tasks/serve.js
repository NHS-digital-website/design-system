/* global ENV PATHS */

const gulp = require('gulp')
const fs = require('fs')

// Globally expose BS instance
global.BROWSER_SYNC = require('browser-sync').create();

const serverPort = ENV.isModeDev() ? 3000 : (process.env.PORT || 8080);
const openBowser = ENV.isModeDev() ? 'local' : false;
const serverConfig = {
  server: {
    baseDir: PATHS.lab.root,
    serveStaticOptions: {
      extensions: ['html'],
    },
  },
  tunnel: false,
  host: 'localhost',
  open: openBowser,
  port: serverPort,
  logPrefix: 'nhsd-frontend',
  middleware: [],
};

gulp.task('serve:lab', (done) => {
  if (ENV.isModeDev()) {
    // Server config is based on the environment
    BROWSER_SYNC.init(serverConfig,
      // Middleware to handle errors
      (err, bs) => {
        bs.addMiddleware('*', (req, res) => {
          const errorHTMLFile = fs.readFileSync(`${PATHS.lab.root}/404.html`);
          res.write(errorHTMLFile);
          res.writeHead(404);
          res.end();
        });
      },
    );
  }
  done();
});
