const hashicon = require('../../dist/hashicon.cjs.js')
const fs = require('fs');
const outputDir = __dirname + "/output";
const hashString = "test";

const { createCanvas } = require('canvas');
const canvas = hashicon(hashString, { createCanvas });

// Try canvas.toDataURL
fs.writeFile(
	`${outputDir}/${hashString}.html`,
	`<img src="${canvas.toDataURL()}" />`,
	err => console.log(`HTML file ${err ? 'got error: ' + err : 'created'}`)
);

// Try canvas.createPNGStream
const out = fs.createWriteStream(`${outputDir}/${hashString}.png`);
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () =>  console.log('PNG file created'));
