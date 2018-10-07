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

export { chunkHash, createCanvas }
