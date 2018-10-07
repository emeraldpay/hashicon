import renderer from './renderer.js';
import params from './params';
import { deepMerge } from './utils';

export default function identicon(hash, _params = {}) {
		// TODO: validate hash format

	return renderer(
		hash,
		deepMerge({...params}, _params)	// TODO: ugly hack to deep merge
	);
}
