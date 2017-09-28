const displayValue = (value) => {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log('value is', value);
			resolve();
		}, 1000)
	});
};

const arr = [1, 2, 3, '4', '5', '6'];

arr.reduce((prev, item)=> {
	return prev.then(() => displayValue(item));
}, Promise.resolve());

