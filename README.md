# NHSD Design System

The NHSD design system provides everything you need to build accessible user interfaces for NHS Digital websites and services.

This repository contains code for the NHSD design system and installation instructions.

For documentation on component usage please refer to the Storybook documentation which can be found on the [NHSD design system homepage](https://design-system.digital.nhs.uk/). Here you will also find links to latest CDN assets needed to get started.

-----------------------------------------------------------------


## Installation

### Install via CDN

Installing via the NHSD CDN is the easiest way to use the NHS design system.

First confirm the toolkit version you wish to use, then simply import the following resources into your HTML head:

```html
<link href="https://design-system.digital.nhs.uk/" rel="preconnect" crossorigin>

<!-- Fonts -->
<link type="font/woff2" href="https://design-system.digital.nhs.uk/cdn/v0.166.0/fonts/FrutigerLTW01-55Roman.woff2" rel="preload" as="font" crossorigin>
<link type="font/woff2" href="https://design-system.digital.nhs.uk/cdn/v0.166.0/fonts/FrutigerLTW01-65Bold.woff2" rel="preload" as="font" crossorigin>
<link type="font/woff2" href="https://design-system.digital.nhs.uk/cdn/v0.166.0/fonts/FrutigerLTW01-45Light.woff2" rel="preload" as="font" crossorigin>

<!-- Styles -->
<link rel="stylesheet" href="https://design-system.digital.nhs.uk/cdn/v0.166.0/stylesheets/nhsd-frontend.css" media="screen" type="text/css"/>
```

And the following just before your `</body>` closing tag:

```html
<!-- JavaScript -->
<script defer src="https://design-system.digital.nhs.uk/cdn/v0.166.0/scripts/nhsd-frontend.js"></script>
```

### Install via compiled files

Alternatively, you can include the compiled files in your project.

To do this you can either download the latest pre-compiled CDN assets from the [releases page](https://github.com/NHS-digital-website/design-system/releases/) or [build from source](#build-from-source).

You may then include the resources in your project as required.

### Install via npm

Unfortunately this isn't supported yet. Check back soon when we hope to have support for installing with npm. 


## Build from source

### Using nvm (optional)

We recommend you install nvm to manage your node versions.

Mac & Linux: https://github.com/nvm-sh/nvm#installing-and-updating

Windows: https://github.com/coreybutler/nvm-windows

### Install npm dependencies

Before you begin you will need to install the npm dependencies:

`npm install`


## Storybook

We use storybook to document our components. It can also be a useful place to develop and test components.

To run Storybook locally:

`npm run storybook`

You can also build Storybook for distribution:

`npm run storybook:build`

## Build Distribution Assets

To build distribution assets for use in your projects:

`npm run dist:build`

or

`npm run dist:build:prod`


## Design System Homepage

To build the design system homepage first cd into the `/homepage` directory.

Then install the npm dependencies:

`npm install`

To start a development server:

`npm run serve`

To build the homepage ready for static hosting:

`npm run build`

-----------------------------------------------------------------


## Contributing

We welcome your feedback and feature requests.

### Report a bug

If you notice a bug please raise an issue along with as much detail as possible.

We will then investigate the issue and work on a fix if required. Alternatively, you are welcome to raise a pull request with your proposed fix and a link to the issue. We will then review your changes and merge or decline with an explaination.


### Request a new feature / component

If you believe a new feature or component would be useful you may raise an issue with your proposal.

You should include an explaination of the feature / component, along with the reasoning for the proposal.

Generally speaking new features and components will only be considered if they introduce some unique, and useful, functionality which can't be achieved with existing components.

### Unsure what you needed? Start a discussion

If you're not sure if you've found a bug or need to request new feature or component, you may start a discussion.

### Contributing code 

Before contributing code please see our [contributing page](https://github.com/NHS-digital-website/design-system/blob/main/CONTRIBUTING.md).

-----------------------------------------------------------------


## Deployment & releases

### Versioned deployments

To deploy a new version of the toolkit, a tag should be created following [semantic versioning](https://semver.org/) rules and prefixed with "v". Eg, "v1.0.2-beta".

Once pushed, the distribtion workflow will deploy a version of storybook and CDN matching the tagged version name.

For example, tag "v1.0.2-beta" would create the following resources:

https://design-system.digital.nhs.uk/storybook/v1.0.2-beta/

https://design-system.digital.nhs.uk/cdn/v1.0.2-beta/

Release versions should always be created from the master branch. Note: this will require elevated repo permissions.

### Releases

Releases can be created from the Github release page.

To create a release, a version must first be tagged and pushed. Once pushed the tag can be selected from the new release page.

Next, enter a release title (typically the version number) and a description of the changes - this should include any breaking changes and mirgration information.

Once the release has been created release assets will be automatically built and attached to the release. The "latest" version of storybook and the CDN will also be updated and can be found here:

https://design-system.digital.nhs.uk/storybook/latest/

https://design-system.digital.nhs.uk/cdn/latest/

Finally, any changes to the design system homepage (https://design-system.digital.nhs.uk/) will be deployed.

-----------------------------------------------------------------

## Licence
The codebase is released under the MIT Licence, unless stated otherwise. This covers both the codebase and any sample code in the documentation. The documentation is © Crown copyright and available under the terms of the Open Government 3.0 licence.
