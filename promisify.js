
const {promisify} = require('util');
const fs = require('fs');
const request = require('request');
const readFileAsync = promisify(fs.readFile);
const requestAsync = promisify(request);

const readFile = (fileName) => readFileAsync(fileName)
	.then((configTxt) => JSON.parse(configTxt));


const getRequestStatusCode = (url) => requestAsync(url)
	.then((response) => response.statusCode);

readFile('config.json')
	.then((config) => getRequestStatusCode(config.url))
	.then((statusCode) => console.log('Status code', statusCode))
	.catch((err) => {
		console.log('Catch', err);
	});

