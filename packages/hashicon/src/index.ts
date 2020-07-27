import renderer from './renderer';
import {Params, DefaultParams} from './params';
import {deepMerge} from './utils';
import {keccak256} from 'js-sha3';
import {BLAKE2s} from '@stablelib/blake2s';
import {TextEncoder} from 'text-encoding';

export {Params, HasherType} from './params';

const enc = new TextEncoder();
const key = new Uint8Array(enc.encode("emerald/hashicon"));

function hashKeccak(hash: string): Uint8Array {
	return new Uint8Array(keccak256.arrayBuffer(hash));
}

function hashBlake2(hash: string): Uint8Array {
	const hasher = new BLAKE2s(16, {key});
	hasher.update(enc.encode(hash));
	return hasher.digest();
}

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
	let result;

	if (params.hasher === "blake2") {
		result = new Uint16Array(hashBlake2(hash));
	} else if (params.hasher === "legacy" || params.hasher === "keccak") {
		result = new Uint16Array(hashKeccak(hash));
	} else {
		throw Error("Unsupported hasher: " + params.hasher)
	}

	return renderer(result, params);
}
