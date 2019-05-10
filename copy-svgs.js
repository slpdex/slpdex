const fs = require('fs');

fs.readFile(
  './src/svgs/symbol/svg/sprite.symbol.svg',
  { encoding: 'utf-8' },
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    fs.writeFile('./src/app/svgs/svgs.component.html', data, err => {
      if (err) {
        console.log(err);
        return;
      }
    });
  },
);
