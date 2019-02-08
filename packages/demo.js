/*
 * Globally register all components, because they will be used in docs.
 * Components are registered using the PascalCased version of their file name.
 */
import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import path from 'path';
import docsConfig from '../docs/docs.config';

/*
 * Get .vue files in the current directory and subdirectories
 */
const requireComponent = require.context('.', true, /[\w-]+\.vue$/);

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
  let componentName = '';

  if (path.dirname(fileName).includes('demo')) {
    const componentPath = path.dirname(fileName).split('/');
    componentName = `Demo${upperFirst(camelCase(componentPath[1]))}`;
  } else {
    componentName = `${prefix}${upperFirst(camelCase(path.basename(fileName, '.vue')))}`;
  }

  Vue.component(componentName, componentConfig.default || componentConfig);
});
