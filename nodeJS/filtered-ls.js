fs = require('fs')
//fs.readdir(process.argv[2], (err, list) => err ? console.log(err) : console.log(list.filter(item => item.endsWith("." + process.argv[3]))))
fs.readdir(process.argv[2], (err, list) => err ? console.log(err) : list.forEach(file => file.endsWith("." + process.argv[3]) ? console.log(file): null))
