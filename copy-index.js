const fs = require('fs');

fs.copyFile('./prod/index.html', './prod/404.html', err => {
  if (err) {
    console.log(err);
  }
});
