const fs = require('fs');

const dir = './node_modules/moment/locale';

const removeFile = file => {
  fs.unlink(`${dir}/${file}`, () => {});
};

fs.readdir(dir, (err, files) => {
  if (err) {
    return;
  }

  if (!files || !files.length) {
    return;
  }

  files.forEach(file => removeFile(file));
});
