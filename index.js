const fs = require('fs-extra');

const dir = './tmp/';

fs.pathExists(file)
  .then(exists => return console.log(exists))
  .then(fs.ensureDir(dir).then(() => {
        console.log('success!')
  }).catch(err => {
     console.error(err)
})




