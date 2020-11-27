import "../src/nhsd/scss-core/base/_base.scss";
import "../src/nhsd/scss-core/tokens/_overrides.scss";

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
