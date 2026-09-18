import "../src/nhsd/nhsd-frontend.scss";
import init from "../src/nhsd/script-core/init";
import "../src/nhsd/nhsd-frontend";

export const tags = ['autodocs'];

const legacyBackgrounds = {
  light: '#ffffff',
  dim: '#425563',
  dark: '#231f20',
  blue: '#005bbb',
  bright: '#fae100',
  grey: '#edf1f1',
};

export const decorators = [
  (Story, context) => {
    const name = context.parameters?.backgrounds?.default;
    const colour = legacyBackgrounds[name];

    // The light background is Storybook's normal Docs canvas. Only add a
    // wrapper for stories that explicitly need a contrasting legacy colour.
    if (context.viewMode !== 'docs' || !colour || name === 'light') return Story();

    return `<div style="background-color: ${colour}; box-shadow: 0 0 0 32px ${colour}; margin-top: -22px; margin-bottom: -22px;">${Story()}</div>`;
  },
];

const rootNode = document.getElementById('storybook-root');
const docsRootNode = document.getElementById('storybook-docs');

window.nhsd = Object.assign(nhsd, init);

// Wait for storybook to initalise
const observer = new MutationObserver(() => {
  observer.disconnect();
  nhsd.init();
  if (globalThis.MathJax?.startup) {
    MathJax.startup.defaultReady();
    MathJax.startup.promise.catch(() => undefined);
  }
  if (rootNode) observer.observe(rootNode, { childList: true, attributes: true });
  if (docsRootNode) observer.observe(docsRootNode, { childList: true, attributes: true });
});

if (rootNode) observer.observe(rootNode, { childList: true, attributes: true });
if (docsRootNode) observer.observe(docsRootNode, { childList: true, attributes: true });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dim', value: '#425563' },
      { name: 'dark', value: '#231f20' },
      { name: 'blue', value: '#005bbb' },
      { name: 'bright', value: '#fae100' },
      { name: 'grey', value: '#edf1f1' },
    ],
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '1024px',
          height: '768px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1280px',
          height: '1024px',
        },
      },
      hd: {
        name: 'HD',
        styles: {
          width: '1366px',
          height: '768px',
        },
      },
      fullHd: {
        name: 'Full HD',
        styles: {
          width: '1920px',
          height: '1080px',
        },
      },
    },
  },
}
