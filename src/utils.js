// Merge a `source` object to a `target` recursively
// Source: https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6
const deepMerge = (target, source) => {
	// Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
	for (let key of Object.keys(source)) {
		// if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]))
		if (source[key] instanceof Object && key in target) Object.assign(source[key], deepMerge(target[key], source[key]));
	}

	// Join `target` and modified `source`
	Object.assign(target || {}, source);
	return target;
}

// outputs n even integers from a hash
const chunkHash = (hash, n, prefix="0x") => {
	hash = hash.split(prefix).pop();
	const chunks = Math.floor(  hash.length / n );

	const array = hash.match(new RegExp('.{1,' + chunks + '}', 'g'));

	// hex first 4 digits > int
	for (let i = 0; i < array.length; i++) {
		array[i] = parseInt(array[i].substring(1, 5), 16);
	}

	return array
}


const createCanvas = size => {
	const canvas = document.createElement('canvas');

	canvas.style.width = size + "px";
	canvas.style.height = size + "px";

	// Hi-DPI / Retina
	var dpr = 4; //window.devicePixelRatio || 1;
	canvas.width = size * dpr;
	canvas.height = size * dpr;

	const ctx = canvas.getContext('2d');
	ctx.scale(dpr, dpr);

	return canvas;
}

export { deepMerge, chunkHash, createCanvas }
