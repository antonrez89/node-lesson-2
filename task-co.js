const co = (generator) => {
	const d = ({done, value}) => {
		if (done){
			return Promise.resolve(value);
		}
		return value.then((result) => d(generator.next(result)));
	};
	return d(generator.next());
};


const go = (iter, state) => {
	if (!state) {
		return go(iter, iter.next());
	}

	let value = state.value;

	function next(v) {
		if (!state.done) {
			return go(iter, iter.next(v));
		}
		return v;
	}

	if (!(value instanceof Promise)) {
		value = Promise.resolve(value);
	}

	return value.then(v => next(v));
};