
const {promisify} = require('util');
const fs = require('fs');
const co = require('co');
const request = require('request');
const readFileAsync = promisify(fs.readFile);
const requestAsync = promisify(request);

const readFile = (fileName) => readFileAsync(fileName)
	.then((configTxt) => JSON.parse(configTxt));

const getRequestStatusCode = (url) => requestAsync(url)
	.then((response) => response.statusCode);


function* gen() {
	let config = yield readFile('config.json');
	return yield getRequestStatusCode(config.url);
}

co(gen()).then(statusCode => {
	console.log(`status code = ${statusCode}`)
}, err => {
	console.error('Generator error', err)
});

