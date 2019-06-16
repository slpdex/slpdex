const babel = require('@babel/core');
const fs = require('fs');
const glob = require('fast-glob');

const transform = file => {
  babel.transformFile(
    file,
    {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              ie: '11',
            },
          },
        ],
      ],
      plugins: [
        '@babel/transform-runtime',
        '@babel/plugin-syntax-dynamic-import',
      ],
    },
    (err, result) => {
      if (err) throw err;

      fs.writeFile(file, result.code, { encoding: 'utf-8' }, err => {
        if (err) throw err;
        return;
      });
    },
  );
};

glob
  .sync([
    './node_modules/cashcontracts/**/*.js',
    './node_modules/bitcoin-ts-cashcontracts/**/*.js',
    './node_modules/cashcontracts-wasm/**/*.js',
  ])
  .forEach(file => {
    console.log(file);
    transform(file);
  });
