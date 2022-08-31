/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const { minify } = require('html-minifier');

const propsToReplace = [
  ['fill-rule', 'fillRule'],
  ['stroke-width', 'strokeWidth'],
  ['fill-opacity', 'fillOpacity'],
  ['clip-path', 'clipPath'],
  ['stroke-linejoin', 'strokeLinejoin'],
  ['stroke-linecap', 'strokeLinecap'],
  ['stop-color', 'stopColor'],
  ['gradienttransform', 'gradientTransform'],
  ['gradientunits', 'gradientUnits'],
  ['stroke-miterlimit', 'strokeMiterlimit'],
  ['font-family', 'fontFamily'],
  ['font-weight', 'fontWeight'],
  ['class', 'className'],
  ['font-size', 'fontSize'],
  ['letter-spacing', 'letterSpacing'],
  ['text-anchor', 'textAnchor'],
  ['word-spacing', 'wordSpacing'],
  ['stroke-opacity', 'strokeOpacity'],
  ['stop-opacity', 'stopOpacity'],
  ['stroke-dashoffset', 'strokeDashoffset'],
  ['style=\\"mix-blend-mode:multiply\\"', 'style={{ mixBlendMode: \\"multiply\\" }}'],
  ['style=\\"marker:none\\"', 'style={{ marker: \\"none\\" }}'],
  ['style=\\"line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;marker:none\\"', 'style={{ lineHeight: \\"normal\\", textIndent: \\"0\\",textAlign: \\"start\\",textDecorationLine: \\"none\\",textTransform: \\"none\\",marker: \\"none\\" }}'],
];

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
  const json = JSON.stringify(icons);
  let result = json;
  propsToReplace.forEach((prop) => { result = result.replaceAll(prop[0], prop[1]); });

  fs.writeFileSync(outFile, result);

  // eslint-disable-next-line no-console
  console.log(`Building ${outFile}...`);
}

// Script execution starts here.
createJsonFile(path.resolve(__dirname, '../icons'), path.resolve(__dirname, '../src/icons.json'));
createJsonFile(path.resolve(__dirname, '../flags'), path.resolve(__dirname, '../src/flags.json'));
