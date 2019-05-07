const fs = require('fs');

const dir = './prod';
const dirAssets = `${dir}/assets`;

const ignore = ['CNAME', '.git'];

const removeFile = (file, filePath) => {
  const validFile = !ignore.find(x => x === file);

  if (validFile) {
    fs.unlink(`${filePath}/${file}`, () => {});
  }
};

fs.readdir(dir, (err, files) => {
  if (err) {
    return;
  }

  if (!files || !files.length) {
    return;
  }

  files.forEach(file => removeFile(file, dir));
});

fs.readdir(dirAssets, (err, files) => {
  if (err) {
    return;
  }

  if (!files || !files.length) {
    return;
  }

  files.forEach(file => removeFile(file, dirAssets));
});
