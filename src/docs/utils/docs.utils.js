const getRouteParams = path => {
  const splitPath = path.split('/');
  const pathLength = splitPath.length;
  let section = '';
  let article = '';

  if (pathLength > 3) {
    article = splitPath.pop();
    section = splitPath.join('/');
  } else {
    section = splitPath.join('/');
  }

  return { section, article };
};

/**
 * Change <a> to <router-link> tab
 *
 * @params  {String} links - String with links
 * @returns {String} - String parsed
 */
const parseLinks = links => {
  const regex = /<\s*a href="\/(.*?)">(.*?)<\s*\/\s*a>/gi;
  const parse = links.replace(regex, '<router-link to="/$1">$2</router-link>');
  return parse.replace(/\.md/g, '');
};

/**
 * Generate a list of links in the string
 *
 * @params  {String} links - String with links
 * @returns {Array} - Array of objects with name and path of the link
 */
const getListLinks = links => {
  const list = [];
  const regex = /<\s*a href="(.*?)">(.*?)<\s*\/\s*a>/gi;
  const parse = links.replace(/\.md/g, '');

  let matches = regex.exec(parse);

  while (matches) {
    list.push({ name: matches[2], path: matches[1] });
    matches = regex.exec(parse);
  }

  return list;
};

export default {
  getRouteParams,
  parseLinks,
  getListLinks,
};
