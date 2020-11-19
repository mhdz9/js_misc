http = require('http')
url = process.argv[2]
http.get(url, (res) => {
	rawData = '';
	res.on('data', (chunk) => rawData += chunk);
	res.on('end', () => {
		console.log(rawData.length)
		console.log(rawData)
	})
});
