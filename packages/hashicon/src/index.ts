import renderer from './renderer';
import {Params, DefaultParams} from './params';
import {deepMerge} from './utils';
import {keccak256} from 'js-sha3';

export {Params} from './params';

export function hashicon(hash: string, options: number | Partial<Params> = {}): HTMLCanvasElement {
	let extraParams = {};
	// overload "options": allow to call with only size value (numeric)
	if (typeof options == "number") {
		extraParams = {...extraParams, ...{size: options}};
	} else if (typeof options == "object") {
		extraParams = {...extraParams, ...options};
	}

	// Deep merge
	const params: Params = deepMerge(DefaultParams, extraParams);

	// encrypt hash to a keccak256 Uint16Array.
	const uint16Array = new Uint16Array(keccak256.arrayBuffer(hash));

	return renderer(uint16Array, params);
}
