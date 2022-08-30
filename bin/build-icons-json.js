/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const { minify } = require('html-minifier');

const IN_DIR = path.resolve(__dirname, '../icons');
const OUT_FILE = path.resolve(__dirname, '../src/icons.json');

/**
 * Get contents between opening and closing `<svg>` tags.
 * @param {string} svg
 * @returns {string}
 */
function getSvgContents(svg) {
  const $ = cheerio.load(svg);
  return minify($('svg').html(), { collapseWhitespace: true });
}


/**
 * Build an object in the format: `{ <name>: <contents> }`.
 * @param {string[]} svgFiles - A list of filenames.
 * @param {Function} getSvg - A function that returns the contents of an SVG file given a filename.
 * @returns {Object}
 */
function buildIconsObject(svgFiles, getSvg) {
  return svgFiles
    .map((svgFile) => {
      const name = path.basename(svgFile, '.svg');
      const svg = getSvg(svgFile);
      const contents = getSvgContents(svg);
      return { name, contents };
    })
    .reduce((icons, icon) => {
      const newArr = icons;

      newArr[icon.name] = icon.contents;
      return newArr;
    }, {});
}

// Script execution starts here.

// eslint-disable-next-line no-console
console.log(`Building ${OUT_FILE}...`);

const svgFiles = fs
  .readdirSync(IN_DIR)
  .filter((file) => path.extname(file) === '.svg');

const getSvg = (svgFile) => fs.readFileSync(path.join(IN_DIR, svgFile));

const icons = buildIconsObject(svgFiles, getSvg);

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(icons));
