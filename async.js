
const {promisify} = require('util');
const fs = require('fs');
const request = require('request');
const readFileAsync = promisify(fs.readFile);
const requestAsync = promisify(request);

const readFile = (fileName) => readFileAsync(fileName)
	.then((configTxt) => JSON.parse(configTxt));

const getRequestStatusCode = (url) => requestAsync(url)
	.then((response) => response.statusCode);


(async () => {
	try{
		const config = await readFile('config.json');
		const statusCode = await getRequestStatusCode(config.url);
		console.log(`status code = ${statusCode}`)
	} catch (err) {
		console.error('Async error', err)
	}
})();

