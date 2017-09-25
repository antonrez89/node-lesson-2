
const fs = require('fs');
const request = require('request');


fs.readFile("config.json", (err, config) => {
	if (err) {
		// Обработка ошибок
		return;
	}
	let configJSON;
	try {
		configJSON = JSON.parse(config);
	} catch (err) {
		// Обработка ошибок
		return;
	}
	request(configJSON.url, (err, response) => {
		if (err) {
			// Обработка ошибок
			return;
		}
		console.log('statusCode:', response.statusCode);
	});
});

