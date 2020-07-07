import {StandardFigures} from './figures';
import {Sprites} from './sprite';
import {Shapes} from './shapes';
import {Params, Range} from "./params";


/**
 * map numbers for param
 * @param  {Object} param Parameter containing min and max values
 * @param  {Number} value Number to process
 * @return {Number}       Normalised number
 */
function processParam(param: Range, value: number): number {
	return param.min + (value % (param.max - param.min));
}

/**
 * Canvas renderer
 * @param  {Uint16Array}	hashValues Integers
 * @param  {Object} params Rendering parameters
 * @return {Object}        Canvas HTML object
 */
function renderer(hashValues: Uint16Array, params: Params) {

	const hue = processParam(params.hue, hashValues[0]);
	const saturation = processParam(params.saturation, hashValues[1]);
	const lightness = processParam(params.lightness, hashValues[2]);
	const shift = processParam(params.shift, hashValues[3]);
	const figureAlpha = processParam(params.figureAlpha, hashValues[4]);
	const figureIndex = hashValues[5] % StandardFigures.length;
	const createCanvas = params.createCanvas;

	// Draw on canvas
	const size = params.size || 100;
	const canvas = createCanvas(size, size);
	const ctx = canvas.getContext('2d');


	Sprites.forEach((line, i) => {
		const light = params.light.enabled ? params.light[line.light] : 1;

		// variations
		const x = Math.round(hashValues[6] / (i + 1));
		const variation = params.variation.enabled ? processParam(params.variation, x) : 0;

		// Draw on canvas
		ctx.beginPath();

		if (!line.hidden) {
			const shape = Shapes[line.shape];
			ctx.moveTo(size * (shape.x1 + line.x), size * (shape.y1 + line.y));
			ctx.lineTo(size * (shape.x2 + line.x), size * (shape.y2 + line.y));
			ctx.lineTo(size * (shape.x3 + line.x), size * (shape.y3 + line.y));
		}

		// Fill background
		ctx.fillStyle = `hsla(${hue + variation}, ${saturation}%, ${lightness + light}%, 1)`;
		ctx.fill();

		// draw figure ( whats when opacity of data > 0 )
		const figure = StandardFigures[figureIndex];
		if (figure[i] > 0) {
			const alpha = figure[i] * figureAlpha / 10;
			ctx.fillStyle = `hsla(${hue + shift + variation}, ${saturation}%, ${lightness + light}%, ${alpha})`;
			ctx.fill();
		}
	});
	return canvas;
}

export default renderer;
