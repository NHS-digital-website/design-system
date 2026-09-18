import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import loadIcons from './load-icons.js';
import nunjucksTemplates from './nunjucks-vite-plugin.mjs';

const storybookDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(storybookDirectory, '..');
const sourceDirectory = path.resolve(projectDirectory, 'src/nhsd');

export default {
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  stories: ['../src/nhsd/**/*.stories.js'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  staticDirs: [
    path.resolve(projectDirectory, 'dist'),
    { from: path.resolve(sourceDirectory, 'assets/fonts'), to: '/assets/fonts' },
  ],
  viteFinal: async (config) => mergeConfig(config, {
    plugins: [nunjucksTemplates({ root: projectDirectory })],
    resolve: {
      alias: {
        '@': path.resolve(sourceDirectory, 'script-core'),
      },
    },
    define: {
      SVG_ICONS: JSON.stringify(loadIcons()),
      'process.env.BUILD_DATE': JSON.stringify(new Date().toISOString().slice(0, 10)),
    },
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: [
            path.resolve(projectDirectory, 'node_modules'),
            path.resolve(projectDirectory, 'node_modules/sass-mq'),
            sourceDirectory,
          ],
        },
      },
    },
  }),
};
