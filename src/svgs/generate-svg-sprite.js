'use strict';

var SVGSpriter = require('svg-sprite'),
  path = require('path'),
  mkdirp = require('mkdirp'),
  fs = require('fs'),
  config = {
    mode: {
      symbol: true,
    },
  },
  spriter = new SVGSpriter(config);

const addFile = file => {
  spriter.add(
    path.resolve(file),
    file,
    fs.readFileSync(path.resolve(file), { encoding: 'utf-8' }),
  );
};

const files = fs.readdirSync('.');

files.forEach(file => {
  if (file.indexOf('.svg') !== -1) {
    addFile(file);
  }
});

// Compile the sprite
spriter.compile(function(error, result, cssData) {
  // Run through all configured output modes
  for (var mode in result) {
    // Run through all created resources and write them to disk
    for (var type in result[mode]) {
      mkdirp.sync(path.dirname(result[mode][type].path));
      fs.writeFileSync(result[mode][type].path, result[mode][type].contents);
    }
  }
});
