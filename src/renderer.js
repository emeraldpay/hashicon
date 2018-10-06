import figures from './figures';
import sprite from './sprite';

// triangle shapes left and right
const shapes = [
	{ x1:0, y1:50, x2:50, y2:25, x3:50, y3:75 },
	{ x1:0, y1:0, x2:50, y2:25, x3:0, y3:50 }
]



// outputs n even integers from a hash
function chunkHash(hash, n, prefix="0x") {
	hash = hash.split(prefix).pop();
	const chunks = Math.floor(  hash.length / n );

	const array = hash.match(new RegExp('.{1,' + chunks + '}', 'g'));

	// hex first 4 digits > int
	for (let i = 0; i < array.length; i++) {
	  array[i] = parseInt(array[i].substring(1, 5), 16);
	}

	return array
}



function processParam(param, value) {
	return param.min + (value % ( param.max - param.min ));
}

// function getValue(hash, position, )

/**
 * Canvas renderer
 * @param  {String} hash   Hex string seed value
 * @param  {Object} params Rendering parameters
 * @return {Object}        Canvas HTML object
 */
function renderer(hash, params) {
	// return draw(hash, params);
	// console.log(params);

	const chunks = chunkHash(hash, 6);

	const hue = processParam(params.hue, chunks[0]);
	const saturation = processParam(params.saturation, chunks[1]);
	const lightness = processParam(params.lightness, chunks[2]);
	const shift = processParam(params.shift, chunks[3]);
	const figurealpha = processParam(params.figurealpha, chunks[4]);
	const figure = chunks[5] % figures.length;
	// console.log(hue,saturation,lightness,shift,figure,figurealpha);


	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	canvas.height = canvas.width = 200;		// TODO: HiDPI

	sprite.forEach((line, i) => {

		let light = params.draw.light ? params.light[line.light] : 1;
		if(params.draw.fx) light = light / params.light.fx;		// TODO: Richi, I don't get this one..

		const x = parseInt(hash.split("x").pop().substr(i,1), 16);	// TODO processParam
		const variation = params.draw.variation ? processParam(params.variation, x) : 0;

		// Draw on canvas
		ctx.beginPath();

		if (!line.hidden) {
			const shape = shapes[line.shape];
			ctx.moveTo( shape.x1 + line.x, shape.y1 + line.y );
			ctx.lineTo( shape.x2 + line.x, shape.y2 + line.y );
			ctx.lineTo( shape.x3 + line.x , shape.y3 + line.y );
		}

		// Fill background
		ctx.fillStyle = `hsla(${hue+variation}, ${saturation}%, ${lightness+variation+light}%, 1)`;
		ctx.fill();

		// draw figure ( whats when opacity of data > 0 )
		if( figures[figure][i] > 2 ){		// TODO:  two ? not 0?
			const alpha = figures[figure][i] * figurealpha / 10;
			ctx.fillStyle = `hsla(${shift+variation}, ${saturation}%, ${lightness+variation+light}%, ${alpha})`;
			ctx.fill();
		}
		// ctx.closePath();
	});
	return canvas;
}



/*
// draws a single canvas with id(hash)
function draw(id, params) {
	var i = new Object

	const chunks = chunkHash(id, 6);

	i.id = id;
	i.hash = id.split("x").pop();
	i.hue = params.hue.min + (chunks[0] % (params.hue.max-params.hue.min));
	i.saturation = params.saturation.min + (chunks[1] % (params.saturation.max-params.saturation.min));
	i.lightness = params.lightness.min + (chunks[2] % (params.lightness.max-params.lightness.min));
	// i.shift = i.hue + (params.shift.min + (chunks[3] % (params.lightness.max-params.lightness.min)));
	i.shift = params.shift.min + (chunks[3] % (params.shift.max-params.shift.min));
	i.figure = 0 + (chunks[4] % (0-figures.length));
	i.figurealpha = params.figurealpha.min + ( chunks[5] % (params.figurealpha.max- params.figurealpha.min));

	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	canvas.height = canvas.width = 200

	for (var o in sprite){

		ctx.beginPath();

		if (!sprite[o].hidden) {
			const shape = sprite[o].shape
			ctx.moveTo( shapes[shape].x1 + sprite[o].x, shapes[shape].y1 + sprite[o].y );
			ctx.lineTo( shapes[shape].x2 + sprite[o].x, shapes[shape].y2 + sprite[o].y );
			ctx.lineTo( shapes[shape].x3 + sprite[o].x , shapes[shape].y3 + sprite[o].y );
		}

		let light = 1;
		if(params.draw.light==true){
			if (sprite[o].light == "top") {  light = params.light.top }
			if (sprite[o].light == "left") {  light = params.light.left }
			if (sprite[o].light == "right") {  light = params.light.right }
		}

		if(params.draw.fx==true){
			light = light / params.light.fx;
		}  // /* else { fx = 0; }   <--- NOT IN USE

		let variation = 0;
		if(params.draw.variation==true){
			variation = params.variation.min + ( parseInt(i.hash.substr(o,1), 16) % ( params.variation.min - params.variation.max ));
		}

		// fill with hue, saturation, lightness, 100% alpha
		ctx.fillStyle = 'hsla('+ (i.hue+variation) +', '+i.saturation+'%, '+(i.lightness+variation+light)+'%,1)';
		ctx.fill();

		// draw figure ( whats when opacity of data > 0 )
		if( figures[i.figure][o] > 2 ){
			const alpha = figures[i.figure][o] * i.figurealpha / 10;
			ctx.fillStyle = 'hsla('+ (i.shift+variation) +', '+i.saturation+'%, '+(i.lightness+variation+light)+'%,'+ alpha +')';
			ctx.fill();
		}

	}

	return canvas;
}
*/
export default renderer;
