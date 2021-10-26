/* global PATHS */

const { Transform } = require('stream');
const gulp = require('gulp');
const newer = require('gulp-newer');
const hexSvg = require('../../src/nhsd/script-core/helpers/icons/hexagonal-icon');

const hexIconTransformer = new Transform({
    readableObjectMode: true,
    writableObjectMode: true,
    transform(file, _, callback) {
        if (file.isBuffer()) {
            const nestedSvg = file.contents.toString();
            file.contents = Buffer.from(hexSvg(nestedSvg));
        }
        callback(null, file);
    },
});

gulp.task('icons:copy', () => gulp.src(`${PATHS.src.icons}/**/*`)
.pipe(newer(PATHS.dist.icons))
.pipe(gulp.dest(PATHS.dist.icons)));

gulp.task('icons:nested', () => gulp.src(`${PATHS.src.icons}/**/*`)
.pipe(newer(PATHS.dist.hexIcons))
.pipe(hexIconTransformer)
.pipe(gulp.dest(PATHS.dist.hexIcons)));
