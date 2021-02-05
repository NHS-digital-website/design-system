# NHSD Frontend production files

This folder contains the most up to date, compiled, minified, uglified versioned static assets for production - to be self-hosted by any project, or to be loaded from the NHSD CDN.

## Tests

Some components need to be tested outside of Storybook, the test folder contains static html files to support this. 

These HTML files work offline, and can be opened using the file system (no need for a server). They load the pre-compiled resource files (CSS, JS, images) from the `dist` folder, so if those files don't exist, the appropriate build command needs to be run (`npm run dist:build:watch` or `npm run dist:build:prod`).

The **test** folder is exluded from the build commands' clean task; please don't delete them manually
