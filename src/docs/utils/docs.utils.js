import docsConfig from '../../../docs/docs.config';

const getPaths = (path) => {
  const splitPath = path.split('/').filter(item => item !== '');
  const type = splitPath.shift();
  let section = '';
  let article = '';
  let component = '';

  if (splitPath.length > 0) {
    if (docsConfig.packagePath === `./${type}`) {
      article = splitPath.join('/');
      component = splitPath[splitPath.length - 1];
    } else {
      section = splitPath.shift();
      article = splitPath.length > 0 ? splitPath.join('/') : '';
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
  const path = basePath || '';
  const regex = /<\s*a href="\/(.*?)">(.*?)<\s*\/\s*a>/gi;
  const parse = links.replace(regex, `<router-link to="${path}/$1">$2</router-link>`);
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

export default {
  getPaths,
  parseLinks,
  getListLinks,
};
