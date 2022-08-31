/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require('path');
const fs = require('fs');
const format = require('prettier-eslint');
const upperCamelCase = require('uppercamelcase');

// The jsonIcons is created by the other script.
// That's why we disabled the invalid import error from eslint.
// eslint-disable-next-line import/no-unresolved
const jsonIcons = require('../src/icons.json');

const icons = Object.keys(jsonIcons);


// The jsonIcons is created by the other script.
// That's why we disabled the invalid import error from eslint.
// eslint-disable-next-line import/no-unresolved
const jsonFlags = require('../src/flags.json');

const flags = Object.keys(jsonFlags);

const rootDir = path.join(__dirname, '..');
const dir = path.join(rootDir, 'src/icons');
const flagDir = path.join(rootDir, 'src/flags');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
if (!fs.existsSync(flagDir)) {
  fs.mkdirSync(flagDir);
}

const initialTypeDefinitions = `/// <reference types="react" />
import { FC, SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

export type Icon = FC<IconProps>;

export const LeasupMapIcons: {
  [key: string]: Icon;
};

`;

fs.writeFileSync(path.join(rootDir, 'index.js'), '', 'utf-8');
fs.writeFileSync(
  path.join(rootDir, 'index.d.ts'),
  initialTypeDefinitions,
  'utf-8',
);

const attrsToString = (attrs) => {
  return Object.keys(attrs).map((key) => {
    if (key === 'width' || key === 'height' || key === 'stroke') {
      return key + '={' + attrs[key] + '}';
    }
    if (key === 'rest') {
      return '{...rest}';
    }
    return key + '="' + attrs[key] + '"';
  }).join(' ');
};

const completeComponentNameList = [];

// Classic Icons
icons.forEach((i) => {
  const location = path.join(rootDir, 'src/icons', `${i}.js`);
  const ComponentName = (i === 'github') ? 'GitHub' : upperCamelCase(i);
  const defaultAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'color',
    strokeWidth: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    rest: '...rest',
  };

  const element = `
    import React, {forwardRef} from 'react';
    import PropTypes from 'prop-types';

    const ${ComponentName} = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
      return (
        <svg ref={ref} ${attrsToString(defaultAttrs)}>
          ${jsonIcons[i]}
        </svg>
      )
    });

    ${ComponentName}.propTypes = {
      color: PropTypes.string,
      size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
    }

    ${ComponentName}.displayName = '${ComponentName}'

    export default ${ComponentName}
  `;

  const component = format({
    text: element,
    eslintConfig: {
      extends: 'airbnb',
    },
    prettierOptions: {
      bracketSpacing: true,
      singleQuote: true,
      parser: 'flow',
    },
  });

  completeComponentNameList.push(ComponentName);

  fs.writeFileSync(location, component, 'utf-8');

  // eslint-disable-next-line no-console
  console.log('Successfully built', ComponentName);

  const exportString = `import ${ComponentName} from './dist/icons/${i}';\n`;
  fs.appendFileSync(
    path.join(rootDir, 'index.js'),
    exportString,
    'utf-8',
  );

  const exportTypeString = `export const ${ComponentName}: Icon;\n`;
  fs.appendFileSync(
    path.join(rootDir, 'index.d.ts'),
    exportTypeString,
    'utf-8',
  );
});

// Flags Icons
flags.forEach((i) => {
  const location = path.join(rootDir, 'src/flags', `${i}.js`);
  const ComponentName = i;
  const defaultAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size * 3 / 4',
    viewBox: '0 0 32 24',
    rest: '...rest',
  };

  const element = `
    import React, {forwardRef} from 'react';
    import PropTypes from 'prop-types';

    const ${ComponentName} = forwardRef(({ color = 'currentColor', size = 32, ...rest }, ref) => {
      return (
        <svg ref={ref} ${attrsToString(defaultAttrs)}>
          ${jsonIcons[i]}
        </svg>
      )
    });

    ${ComponentName}.propTypes = {
      color: PropTypes.string,
      size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
    }

    ${ComponentName}.displayName = '${ComponentName}'

    export default ${ComponentName}
  `;

  completeComponentNameList.push(ComponentName);

  const component = format({
    text: element,
    eslintConfig: {
      extends: 'airbnb',
    },
    prettierOptions: {
      bracketSpacing: true,
      singleQuote: true,
      parser: 'flow',
    },
  });

  fs.writeFileSync(location, component, 'utf-8');

  // eslint-disable-next-line no-console
  console.log('Successfully built', ComponentName);

  const exportString = `import ${ComponentName} from './dist/flags/${i}';\n`;
  fs.appendFileSync(
    path.join(rootDir, 'index.js'),
    exportString,
    'utf-8',
  );

  const exportTypeString = `export const ${ComponentName}: Icon;\n`;
  fs.appendFileSync(
    path.join(rootDir, 'index.d.ts'),
    exportTypeString,
    'utf-8',
  );
});

// Creating the map of Icons from their name
const objAcc = completeComponentNameList.reduce((acc, name) => {
  return acc + `  ${name},\n`;
}, '');
fs.appendFileSync(
  path.join(rootDir, 'index.js'),
  '\nconst LeasupMapIcons = {\n' + objAcc + '};\n',
  'utf-8',
);

// Creating the export list
const exported = completeComponentNameList.reduce((acc, name) => {
  return acc + `  ${name},\n`;
}, '');

fs.appendFileSync(
  path.join(rootDir, 'index.js'),
  '\nexport {\n' + exported + '  LeasupMapIcons,\n};\n',
  'utf-8',
);
