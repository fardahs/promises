const fs = require('fs-extra')

const dir = './tmp/'
const file = 'tmp/pubs.json'
const data =  {"name": "Arawak",
                "owner": {
                    "firstName": "Nicolas",
                    "lastName": "Hodicq",
                    "mail": "nhodicq@bewizyu.com"
                }
               }

fs.pathExists(dir)
  .then(exists => {
    console.log('Le dossier existe : ' + exists)
    if(exists) {
        return fs.remove(dir)
            .then(() => {
                console.log('remove :  success!')
            })
    }
    return;
  })
  .then(() => {
    return fs.ensureDir(dir)
        .then(() => {
          console.log('create directory: success!')
        })
  })
  .then(() => {
    return fs.ensureFile(file)
         .then(() => {
            console.log('create file : success!')
         })
  })
  .then(() => {
    return fs.writeJson(file,data)
           .then(() => {
             console.log('success!')
           })
  })
  .then(() => {
        return fs.watchFile(file, (curr, prev) => {
            console.log(`the current mtime is: ${curr.mtime}`);
            console.log(`the previous mtime was: ${prev.mtime}`);
        })
  })
  .catch(err => {
     console.error(err)
})




