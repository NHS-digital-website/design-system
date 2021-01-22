# NHSD Frontend
Code you need to start building accessible user interfaces for NHSDigital websites and services.

Before you start working with this codebase, please make sure you follow these steps:
- Read the README for information about everything there is to know about the project and ways of working with the code
- Stick to the already existing
    - Folder structure
    - Naming conventions
    - Sass module loading and file structuring conventions

## Project requirements

The project requires EST/ERBIUM version of Node. This isn't firmly policed yet, but to make sure that everyone who works on this codebase uses the same version for consistency and less time spent on debugging "it works on my machine" type issues in the future.

The best way to ensure that you have the correct version of Node and NPM when you work on this project, please use [NVM](https://medium.com/@jamesauble/install-nvm-on-mac-with-brew-adb921fb92cc)

## Install the project

    $ npm i

## Developer notes

- Please make sure for development you're using the **Node version** specified in the `package.json`'s file `engine` config
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
- The project uses [Dart Sass](https://www.npmjs.com/package/sass) for compiling stylesheets. This is to futureproof the project and avoid reliance on an outdated and - by the looks of it - [to be deprecated Node Sass](https://github.com/sass/node-sass/issues/2952). However because [`gulp-sass`](https://www.npmjs.com/package/gulp-sass) marks the `node-sass` compiler as a peer dependency even if it's not used in a project , from time to time developers are required to rebuild their local node-sass package. This is a [known issue](https://github.com/dlmanning/gulp-sass/issues/715, and hopefully in future versions of `gulp-sass` this will be fixed.

### Folder structure

- src
    - Source for everything
- dist
    - Distribution - production ready, versioned static assets ready to be pushed to a CDN
- package
    - NPM package code for distribution via Node Package Manager.

### Gulp tasks

Check the `package.json` file for NPM scripts, and make sure you check out the Gulp tasks in the `gulpfile.js` folder for details on what the tasks do.

#### Run Storybook for active component development

	$ npm run storybook

or

    $ npm start

#### Build static version of Storybook

	$ npm run storybook:build
	
#### Build & deploy Storybook to S3

The latest version of the Storybook instance is available at [http://sb.ui-toolkit.digital.nhs.uk.s3-website.eu-west-2.amazonaws.com/](http://sb.ui-toolkit.digital.nhs.uk.s3-website.eu-west-2.amazonaws.com/). This is used for development, QA, and demo purposes only, but not intended to act as documentation. 

To deploy the Storybook containing the UI toolkit components, the UI developer has to have AWS access to the `sb.ui-toolkit.digital.nhs.uk` S3 bucket, and their credentials and the bucket details have to be added to the repository. The documentation about the bucket details can be found on the [NHS Digital Confluence](https://nhsd-confluence.digital.nhs.uk/display/CW/Brand+-+UI+toolkit+AWS+setup). Use the `aws-config.sample.json` file to configure AWS. When the AWS config is correctly set up, the following command builds a static version Storybook with the UI components, and it syncs the files to the S3 bucket:

    $ npm run storybook:build:deploy
	
#### Dist and Package tasks

> Note the `dist` and `package` build tasks are work in progress stage - when we need distribution via CDN and NPM delivery, we'll tailor these task to our needs.

**The `dist` and `package` build tasks are the following:**

	$ npm run dist:build
    $ npm run dist:build:watch
    $ npm run dist:build:prod

    $ npm run package:build
    $ npm run package:build:watch
    $ npm run package:build:prod

### Naming and ordering (in general)

Stick to alphabetically ordered lists when defining macros, including macros.

### SASS component and class naming conventions

In our styling system every component is either an atom, a molecule or an organism as per the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles.

The components are placed under the src/components` folder, where each component's name reflects their atomic level.

The class name of a component must reflect what atomic level they represent - so for instance a button is `.a-button`, a header organism is `.o-header`.

To make sure the class names in this styling system don't clash existing class names in any website project, every class name must be prefixed with `nhsd`.

#### Naming organisms

Some organisms are named and structured in a way that the name and strucure implies an arrangement of instances of the same molecule. The "list" doesn't necessarily mean that we have a semantic list of these molecules, but rather represents the structure and idea of having multiple instances of the same molecule in a similar (column-like) arrangement.

Hopefully this makes sense - but even if it doesn't necesserily - follow this naming and strucuring convention helps us maintaining the code and reuse styling solutions. Sticking to the same conventions also will allow us to rename and restructure the code, as we followed a consistent approach.

**Some "list" organism examples:**

- Card list
- Graphic block list
- Nav block list 
- Image with link list

#### So after the system wide prefix the component class names will look the following:

- **Atoms / Button**: `.nhsd-a-button`
- **Molecules / Menu bar**: `.nhsd-m-menu-bar`
- **Organisms / Header**: `.nhsd-o-header`
- **Templates / News hub**: `.nhsd-t-news-hub`

#### Component variant naming

- **Background variants:** `&--bg-dark-grey`
- **Border variants:** `&--border-blue`
- **Colour (or fill) variants:** `&--col-yellow`

#### Nested atom naming vs. Component element naming

Nested atoms (and molecules) are already established components embedded in new higher level components, such as molecules and organisms. Already established, embedded components must be names using their names - for instance the atoms used in the **Card molecule** are called with their own names: `.nhsd-a-button`, `.nhsd-a-link`.

Elements, that not yet have been atomised can be named using BEM style `__` naming convention. For instance - the non-atomised elements in the **Card molecule** are called `.nhsd-m-card__icon`, `.nhsd-m-card__title`, `.nhsd-m-card__text`. This naming must be used until the element reaches a level of reusability, so that it becomes an established atom on its own right - in that case the first naming rule applies. 

### Development gotchas

- The Nunjucks Webpack loader seems to quietly fail when there is an error in a template file, so if the Storybook app seems broken (components missing or the page isn't loading), make sure you check your template file for errors.

## Keeping the UI toolkit up to date

- It is the UI developer's responsibility to keep the NPM packages (including Storybook) up to date.

## Responsive breakpoints

- The **responsive breakpoint** and **media query config** can be found [here](src/nhsd/scss-core/settings/_media-queries.scss).
- To switch off the breakpoint debug showing in the browser, comment [this line](https://github.com/NHS-digital-website/nhsd-frontend/blob/e7ce90d6ac3621550aa97f919147493c436861a1/src/nhsd/scss-core/settings/_media-queries.scss#L19) out.
- The **grid config** can be found [here](src/nhsd/scss-core/tokens/_grid.scss).

## (Hosting static files - this needs figuring out, it doesn't work yet!

The static files (fonts, icons, compiled CSS) is hosted on an AWS bucket using Cloudfront for distribution. The CORS settings allow any website to load up these files. The URL of the static server is [https://d3ao5xdv7leyhd.cloudfront.net/](https://d3ao5xdv7leyhd.cloudfront.net/), but it will soon change to a more human readable, on brand URL [ie. https://files.ui-toolkit.digital.nhs.uk](https://files.ui-toolkit.digital.nhs.uk))

Currently the above setup isn't working due to CORS issues, so the UI toolkit loads the font files from the NHSUK static file server ([https://assets.nhs.uk/](https://assets.nhs.uk/fonts/)).

## Tokens

Tokens are everything in SASS that are not atoms (molecules, organisms...).

There are 2 types of tokens based on intended use:

1. Internal use only - sass mixins, vars, functions: Consume in SASS
2. Inline use only - utility and override classes: Consume in HTML

### Notes

- We group our SCSS source files into tokens based on functionality. Examples:
    - Colours
    - Easings
    - Fonts
    - Grid
    - Overrides
    - Spacing
    - Typescale
    - Utilities
- We do this for better semantics and to make it easier for developers (who are not necessarily UI specialists) to find settings, vars, mixins and utility classes.
- Tokens can be found at [src/nhsd/scss-core/tokens](./src/nhsd/scss-core/tokens).

#### Colours (override tokens)

- `.nhsd-!t-col-white`
- `.nhsd-!t-fill-red`
- `.nhsd-!t-bg-dark-grey`
- `.nhsd-!t-border-yellow`

#### Grid

- `.nhsd-t-grid`
- `.nhsd-t-grid--full-width`
- `.nhsd-t-row`
- `.nhsd-t-col-xs-2`
- `.nhsd-t-offset-m-2`

#### Utilities (regular tokens)

- `.nhsd-t-sr-only`

#### Utilities (override tokens)

- `.nhsd-!t-no-gutters`
- `.nhsd-!t-text-align-left`, `.nhsd-!t-text-align-center`, `.nhsd-!t-text-align-right`

#### Spacing (override tokens)

- `.nhsd-!t-margin-bottom-0` => `margin-bottom: 0`
- `.nhsd-!t-margin-10` => `margin: 90px / 5rem`
- `.nhsd-!t-padding-top-3` => `margin: 15px / 0.833333333rem`

## Component checklist

Every new component (in most cases) should have the following files in the correspinding ATOMIC folder. For example:

**molecules/my-molecule**

- `_index.scss`
- `template.njk`
- `my-molecule.stories.js`

Every ATOMIC element should also be referenced in the corresponding Sass file - so for instance in the case of this example molecule, the molecule Sass file needs to be added to the `molecules/_index.scss` file.

The new component should also be added to the 

### Checklist

- [] ATOMIC files (`.scss`, `.njk`, `.stories.js`)
- [] Sass include in the corresponding ATOMIC SASS file (`ATOMICLEVEL/_index.scss`)
- [] Add the new component to the corresponding Nunjucks Macro file (`njk/macros/ATOMICLEVEL.njk`)


## Actions to take

- Think about versioning for QA
- Carry on tokenising non-atomic SCSS stuff
- Introduce Typescript (involved replacing exiting JS code with TS code)
- Add TS compile and linting tasks back (don't compile stories)
- Define `dist` tasks and build workflow
- Add filename versioning mechanism to `dist` tasks
- Add NVM development version enforcing task
- Document Sass file export versions (Components only and full version)
- Tidy up - make 1 shared path config for Gulp and Storybook
- Document how Storybook is configured, and where the stories are placed in the project
- Document the component and styling folder and file structure + strategy

## Notes for implementation

- For the utility classes to be loaded in the correct order - load them after any other stylesheet

## Licence
The codebase is released under the MIT Licence, unless stated otherwise. This covers both the codebase and any sample code in the documentation. The documentation is © Crown copyright and available under the terms of the Open Government 3.0 licence.
