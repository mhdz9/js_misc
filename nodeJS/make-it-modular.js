dirname = process.argv[2];
extname = process.argv[3];
mymodule = require('./mymodule.js')

mymodule(dirname, extname, (err, list) => err ? console.log(err) : list.forEach(file => console.log(file)))
