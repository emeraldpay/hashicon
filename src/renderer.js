import figures from './figures';
import sprite from './sprite';

// triangle shapes left and right
const shapes = [
	{ x1:0, y1:50, x2:50, y2:25, x3:50, y3:75 },
	{ x1:0, y1:0, x2:50, y2:25, x3:0, y3:50 }
]

function renderer(hash, config) {
	return draw(hash, config);
}


// draws a single canvas with id(hash)
function draw(id, config) {
	var i = new Object

	const chunks = chunkHash(id, 6);

	i.id = id;
	i.hash = id.split("x").pop();
	i.hue = config.hue.min + (chunks[0] % (config.hue.max-config.hue.min));
	i.saturation = config.saturation.min + (chunks[1] % (config.saturation.max-config.saturation.min));
	i.lightness = config.lightness.min + (chunks[2] % (config.lightness.max-config.lightness.min));
	// i.shift = i.hue + (config.shift.min + (chunks[3] % (config.lightness.max-config.lightness.min)));
	i.shift = config.shift.min + (chunks[3] % (config.shift.max-config.shift.min));
	i.figure = 0 + (chunks[4] % (0-figures.length));
	i.figurealpha = config.figurealpha.min + ( chunks[5] % (config.figurealpha.max- config.figurealpha.min));

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
		if(config.draw.light==true){
			if (sprite[o].light == "top") {  light = config.light.top }
			if (sprite[o].light == "left") {  light = config.light.left }
			if (sprite[o].light == "right") {  light = config.light.right }
		}

		if(config.draw.fx==true){
			light = light / config.light.fx;
		}  /* else { fx = 0; }   <--- NOT IN USE */

		let variation = 0;
		if(config.draw.variation==true){
			variation = config.variation.min + ( parseInt(i.hash.substr(o,1), 16) % ( config.variation.min - config.variation.max ));
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



export default renderer;
