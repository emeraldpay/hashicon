import renderer from './renderer.js';
import params from './params';
import { deepMerge } from './utils';

export default function hashicon(hash, override_params = {}) {
	// TODO: validate hash format

	// overload "override_params": allow to call with only size value (numeric)
	let _params = Number.isInteger(override_params) ? { size: override_params } : {...override_params};
	_params = deepMerge(params, _params);		// Deep merge

	return renderer(hash, _params);
}
