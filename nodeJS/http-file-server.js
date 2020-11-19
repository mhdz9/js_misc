fs = require('fs')
http = require('http')
server = http.createServer((req, res) => {
	fs.createReadStream(process.argv[3]).pipe(res)
}).listen(process.argv[2])
