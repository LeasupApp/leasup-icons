/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const { minify } = require('html-minifier');

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

function createJsonFile(inDir, outFile) {
  const svgFiles = fs
    .readdirSync(inDir)
    .filter((file) => path.extname(file) === '.svg');
  const getSvg = (svgFile) => fs.readFileSync(path.join(inDir, svgFile));
  const icons = buildIconsObject(svgFiles, getSvg);

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(icons));

  // eslint-disable-next-line no-console
  console.log(`Building ${outFile}...`);
}

// Script execution starts here.
createJsonFile(path.resolve(__dirname, '../icons'), path.resolve(__dirname, '../src/icons.json'));
createJsonFile(path.resolve(__dirname, '../flags'), path.resolve(__dirname, '../src/flags.json'));
