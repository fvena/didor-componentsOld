import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import path from 'path';
import docsConfig from '../../../docs/docs.config';

// eslint-disable-next-line
const getParams = routerPath => {
  const splitPath = routerPath.split('/').filter(item => item !== '');
  const type = splitPath.shift();
  let section = '';
  let article = '';
  let component = '';

  if (splitPath.length > 0) {
    // If is package
    if (docsConfig.packagePath === `./${type}`) {
      article = splitPath.join('/');
      component = splitPath[splitPath.length - 1];
    } else {
      // section = splitPath.shift();
      // article = splitPath.length > 0 ? splitPath.join('/') : '';
      article = splitPath.pop();
      section = splitPath.join('/');
    }
  }

  return {
    type,
    section,
    article,
    component,
  };
};

/**
 * Change <a> to <router-link> tab
 *
 * @params  {String} links - String with links
 * @returns {String} - String parsed
 */
const parseLinks = (links, basePath) => {
  const pathLink = basePath || '';
  const regex = /<\s*a href="\/(.*?)">(.*?)<\s*\/\s*a>/gi;
  const parse = links.replace(regex, `<router-link to="${pathLink}/$1">$2</router-link>`);
  return parse.replace(/\.md/g, '');
};

/**
 * Generate a list of links in the string
 *
 * @params  {String} links - String with links
 * @returns {Array} - Array of objects with name and path of the link
 */
// prettier-ignore
const getListLinks = links => new Promise((resolve) => {
  const list = [];
  const regex = /<\s*a href="(.*?)">(.*?)<\s*\/\s*a>/gi;
  const parse = links.replace(/\.md/g, '');

  let matches = regex.exec(parse);

  while (matches) {
    list.push({ name: matches[2], path: matches[1] });
    matches = regex.exec(parse);
  }

  resolve(list);
});

/**
 * Globally register all components, because they will be used in docs.
 * Components are registered using the PascalCased version of their file name.
 */
const loadComponentes = (componentsPath, isDemo = false) => {
  /*
   * Get .vue files from the component path
   */
  const requireComponent = require.context('../../../packages', true, /[\w-]+\.vue$/);

  /*
   * For each matching file name:
   * - Get the component config
   * - Get the PascalCase version of the component name and Remove the file extension
   * - Globally register the component
   */
  // prettier-ignore
  requireComponent.keys().forEach((fileName) => {
    const { prefix } = docsConfig;
    const componentConfig = requireComponent(fileName);
    const name = upperFirst(camelCase(path.basename(fileName, '.vue')));

    // If is demo file and isn't demo project return
    if (name.includes('Demo') && !isDemo) return;

    const componentName = name.includes('Demo') ? name : `${prefix}${name}`;

    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};

export default {
  getParams,
  parseLinks,
  getListLinks,
  loadComponentes,
};
