import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const nunjucksLoader = require('nunjucks-loader');
const nunjucksRuntimeShim = require('nunjucks-loader/runtime-shim');
const globalsModuleId = 'virtual:nhsd-nunjucks-template-globals';
const resolvedGlobalsModuleId = `\0${globalsModuleId}`;

export default function nunjucksTemplates({ root }) {
  const absoluteRoot = path.resolve(root);

  return {
    name: 'nhsd-nunjucks-templates',

    resolveId(id) {
      if (id === globalsModuleId) return resolvedGlobalsModuleId;
      return null;
    },

    load(id) {
      if (id === resolvedGlobalsModuleId) {
        const globalsFile = path.resolve(absoluteRoot, '.storybook/nunjucks-template-globals.mjs');
        return `export { svgIcon } from ${JSON.stringify(globalsFile)};`;
      }
      return null;
    },

    transform(source, id) {
      const file = id.split('?')[0];
      const normalizedFile = file.replaceAll('\\', '/');

      if (normalizedFile.endsWith('/helpers/icons/inline-icon.js')) {
        return source
          .replace("const hexIcon = require('./hexagonal-icon');", "import hexIcon from './hexagonal-icon.js';")
          .replace('module.exports = inlineIcon;', 'export default inlineIcon; export { icons };');
      }

      if (normalizedFile.endsWith('/helpers/icons/hexagonal-icon.js')) {
        return source.replace('module.exports = function nestSVG', 'export default function nestSVG');
      }

      if (!file.endsWith('.njk')) return null;

      const compiled = nunjucksLoader.call({
        target: 'web',
        query: '?{"jinjaCompat":true,"opts":{"trimBlocks":true,"lstripBlocks":true}}',
        rootContext: absoluteRoot,
        resourcePath: file,
        options: { context: absoluteRoot },
        context: path.dirname(file),
        cacheable() {},
        emitWarning(warning) {
          this.warn(warning);
        },
        emitError(message) {
          throw new Error(message);
        },
        warn: this.warn,
      }, source);

      const imports = [`import { svgIcon } from ${JSON.stringify(globalsModuleId)};`];
      const inlineModules = [];
      let importIndex = 0;
      let code = compiled.replace(/\brequire\(\s*(["'])(.*?)\1\s*\)/g, (match, quote, specifier) => {
        if (specifier.replaceAll('\\', '/').endsWith('/nunjucks-loader/runtime-shim')) {
          const binding = `__nunjucksImport${importIndex}`;
          importIndex += 1;
          inlineModules.push(`const ${binding} = (${nunjucksRuntimeShim.toString()});`);
          return binding;
        }

        let resolvedSpecifier = specifier;
        if (path.isAbsolute(specifier)) {
          resolvedSpecifier = specifier;
        } else if (specifier.startsWith('src/') || specifier.startsWith('.storybook/')) {
          resolvedSpecifier = path.resolve(absoluteRoot, specifier);
        } else if (specifier.startsWith('./') || specifier.startsWith('../')) {
          resolvedSpecifier = path.resolve(path.dirname(file), specifier);
        }

        const binding = `__nunjucksImport${importIndex}`;
        importIndex += 1;
        imports.push(`import ${binding} from ${JSON.stringify(resolvedSpecifier)};`);
        return binding;
      });

      code = code.replace('module.exports = shim(', 'export default shim(');
      code = code.replace(
        'var dependencies = nunjucks.webpackDependencies',
        "env.addGlobal('svgIcon', svgIcon);\nvar dependencies = nunjucks.webpackDependencies",
      );
      code = code.replace(
        /dependencies\[("(?:\\.|[^"])*")\]\s*=\s*(__nunjucksImport\d+);/g,
        'Object.defineProperty(dependencies, $1, { configurable: true, get: () => $2 });',
      );

      return `${imports.join('\n')}\n${inlineModules.join('\n')}\n${code}`;
    },
  };
}
