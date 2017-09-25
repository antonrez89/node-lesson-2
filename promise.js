
const fs = require('fs');
const request = require('request');

const readFile = (fileName) => new Promise((resolve, reject) => {
	fs.readFile(fileName, (err, config) => {
		if (err) {
			return reject(err);
		}
		resolve(JSON.parse(config));
	});
});

const getRequestStatusCode = (url) => new Promise((resolve, reject) => {
	request(url, (err, response) => {
		if (err) {
			return reject(err);
		}
		resolve(response.statusCode);
	});
});

readFile('config.json')
	.then((config) => getRequestStatusCode(config.url))
	.then((statusCode) => console.log('Status code', statusCode))
	.catch((err) => {
		console.log('Catch', err);
	});

