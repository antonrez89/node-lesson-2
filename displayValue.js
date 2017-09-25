
const displayValue = (value) => {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log('value is', value);
			resolve();
		}, 1000)
	});
};

