/* global ENV PATHS */

const gulp = require('gulp')
const awspublish = require('gulp-awspublish')

let s3Config;
try {
  s3Config = require('../aws-config.json')
} catch(error) {
  return;
}

gulp.task('s3:sync', () => {
  // Create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  const publisher = awspublish.create({
    region: s3Config.buckets.storybook.region,
    params: {
      Bucket: s3Config.buckets.storybook.name
    },
    credentials: {
      accessKeyId: s3Config.auth.accessKeyId,
      secretAccessKey: s3Config.auth.secretAccessKey,
      signatureVersion: 'v3',
    }}, {
      cacheFileName: `.awspublish-${s3Config.buckets.storybook.name}`
    }
  );

  // Define custom headers
  const headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  return (
    gulp
      .src("./storybook-static/**/*.*")
      // gzip, Set Content-Encoding headers and add .gz extension
      // .pipe(awspublish.gzip({ ext: ".gz" }))

      // Publisher will add Content-Length, Content-Type and headers specified above
      // If not specified it will set x-amz-acl to public-read by default
      .pipe(publisher.publish(headers))

      // Create a cache file to speed up consecutive uploads
      .pipe(publisher.cache())

      // Print upload updates to console
      .pipe(awspublish.reporter())
  );
});
