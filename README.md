# NHSD Frontend
Code you need to start building accessible user interfaces for NHSDigital websites and services.

## Developer notes

- The **Node Engine** version should always be up to date to [LTS/Erbium](https://nodejs.org/en/about/releases/)
- Any new files, please stick to only using the file extensions already used in the project. (i.e. use `.yml` instead of `.yaml` and `.scss` instead of `.sass`). **The acceptable file extensions are:**
	- **.njk** for Nunjucks files
	- **.html** for HTML Files
	- **.scss** for Sassy CSS files
	- **.css** for CSS files
	- **.json** for JSON files
	- **.js** for JavaScript files
	- **.ts** for Typescript files
	- **.yml** for Yaml files
	- **.sh** for shell scripts
	- **.md** for Markdown files
- To enforce consistensy in coding style, we have to enforce the settings in the `.editorconfig` file. Please make sure your code editor is using this file if not, you will need to install a plugin (such as [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- The project uses [Dart Sass](https://www.npmjs.com/package/dart-sass) for compiling stylesheets. This is to futureproof the project and avoid reliance on an outdated and - by the looks of it - [to be deprecated Node Sass](https://github.com/sass/node-sass/issues/2952). However because [`gulp-sass`](https://www.npmjs.com/package/gulp-sass) marks the `node-sass` compiler as a peer dependency even if it's not used in a project , from time to time developers are required to rebuild their local node-sass package. This is a [known issue](https://github.com/dlmanning/gulp-sass/issues/715, and hopefully in future versions of `gulp-sass` this will be fixed.

## Licence
The codebase is released under the MIT Licence, unless stated otherwise. This covers both the codebase and any sample code in the documentation. The documentation is © Crown copyright and available under the terms of the Open Government 3.0 licence.
