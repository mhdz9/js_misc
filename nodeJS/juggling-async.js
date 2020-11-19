http = require('http')
url = [...process.argv.slice(2)]
url.forEach(url => http.get(url, (res) => {rawData = ''; res.on('data', (chunk) => rawData += chunk); res.on('end', () => console.log(rawData))}))
