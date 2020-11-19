fs = require('fs')
module.exports = function(dirname, extname, callback) {
	fs.readdir(dirname, (err, list) => err ? callback(err) : callback(null, list.filter(file => file.endsWith("." + extname))))
}
