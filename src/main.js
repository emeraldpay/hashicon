import renderer from './renderer.js';
import params from './params';


// outputs n even integers from a hash
function chunkHash(hash, n, prefix="0x") {
	hash = hash.split(prefix).pop()
	chunks = Math.floor(  hash.length / n )

	array = hash.match(new RegExp('.{1,' + chunks + '}', 'g'))

	// hex first 4 digits > int
	for (let i = 0; i < array.length; i++) {
	  array[i] = parseInt(array[i].substring(1, 5), 16)
	}

	return array;
}

export default function identicon(hash, _params = {}) {
		// TODO: validate hash format
	return renderer(hash, {...params, ..._params});

	// const numbers = chunkHash(hash);
	// return renderer(numbers, {...params, ..._params});
}