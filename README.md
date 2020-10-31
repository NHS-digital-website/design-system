# NHSD Frontend
Code you need to start building accessible user interfaces for NHSDigital websites and services.

## Project requirements

The project requires EST/ERBIUM version of Node. This isn't firmly policed yet, but to make sure that everyone who works on this codebase uses the same version for consistency and less time spent on debugging "it works on my machine" type issues in the future.

The best way to ensure that you have the correct version of Node and NPM when you work on this project, please use [NVM](https://medium.com/@jamesauble/install-nvm-on-mac-with-brew-adb921fb92cc)

## Install the project

    $ npm i

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

### Folder structure

- src
    - Source for everything
- (lab)
    - Laboratory code for working on the UI components and styling fundamentals
- dist
    - Distribution - production ready, versioned static assets ready to be pushed to a CDN
- package
    - NPM package code for distribution via Node Package Manager.

### Gulp tasks

Check the `package.json` file for NPM scripts, and make sure you check out the Gulp tasks in the `gulpfile.js` folder for details on what the tasks do.

#### Run Storybook for active component development

	$ npm run storybook
	
#### Deploy Storybook to S3

The latest version of the Storybook instance is available at [http://sb.ui-toolkit.digital.nhs.uk.s3-website.eu-west-2.amazonaws.com/](http://sb.ui-toolkit.digital.nhs.uk.s3-website.eu-west-2.amazonaws.com/). This is used for development, QA, and demo purposes only, but not intended to act as documentation. 

To deploy the Storybook containing the UI toolkit components, the UI developer has to have AWS access to the `sb.ui-toolkit.digital.nhs.uk` S3 bucket, and their credentials and the bucket details have to be added to the repository. The documentation about the bucket details can be found on the (NHS Digital Confluence)[https://nhsd-confluence.digital.nhs.uk/display/CW/Brand+-+UI+toolkit+AWS+setup]. Use the `aws-config.sample.json` file to configure AWS. When the AWS config is correctly set up, the following command builds a static version Storybook with the UI components, and it syncs the files to the S3 bucket:

    $ npm run sb:deploy

#### (Lab)

> Before Storybook was implemented, we used the Lab to work on the components. Lab most probably will be removed from the project, as Storybook seems to do everything we need out of the box.
	
#### Build assets for distribution

> Note this is work in progress - when we need distribution vis CDN delivery, we'll tailor this task to our needs. For now this is only a placeholder task.

	$ gulp build:dist --buildMode=prod

or

    $ npm run build:dist
	
#### Build assets for distribution

> Note this is work in progress - when we need distribution via NPM, we'll tailor this task to our needs. For now this is only a placeholder task.

	$ gulp build:package --buildMode=prod

or

    $ npm run build:package

### SASS component and class naming conventions

In our styling system every component is either an atom, a molecule or an organism as per the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles.

The components are placed under the src/components` folder, where each component's name reflects their atomic level.

The class name of a component must reflect what atomic level they represent - so for instance a button is `.a-button`, a header organism is `.o-header`.

To make sure the class names in this styling system don't clash existing class names in any website project, every class name must be prefixed with `nhsd`.

#### So after the system wide prefix the component class names will look the following:

- **Atoms / Button**: `nhsd-a-button`
- **Molecules / Menu bar**: `nhsd-m-menu-bar`
- **Organisms / Header**: `nhsd-o-header`
- **Templates / News hub**: `nhsd-t-news-hub`

Following this logic, any reusable "utility" classes should have the `u` prefix. For instance:

- `nhsd-u-sr-only`

## Licence
The codebase is released under the MIT Licence, unless stated otherwise. This covers both the codebase and any sample code in the documentation. The documentation is © Crown copyright and available under the terms of the Open Government 3.0 licence.
