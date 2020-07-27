Hashicon
==========

> Generates a beautiful representation of any hash.

Install
---

Install with: 
```shell
$ npm install @emeraldpay/hashicon --save
```   

Usage
---

Something that you want to represent visually. For example ID of an object on the screen.
```js
// 
const value = "9dddff8f-be81-4c27-80c8-099327865f3f";
```

Create a `hashicon` with default params:
```js
import { hashicon } from 'hashicon';

const icon = hashicon(value); // icon is a <canvas> element
const icon = hashicon(value, 80);  // size 80px
```

Or, pass custom [params](#params):
```js
const params = {...};
const icon = hashicon(value, params);
```

Finally, append the newly created `hashicon` to the HTML document:
```js
document.body.appendChild(icon);
```


Params
---
> See [default params](src/params.ts)

HashIcon's values are extracted from the hash, and controlled with the following parameters to manipulate the possible visual output:

```js
{

// hasher for the input value. "blake2" is default 
// can also be "keccak" (or "legacy"), at this case add dependency to "js-sha3" package
hasher: "blake2",

// size px (HiDPI/Retina aware)
size: 100,

// primary color range radius ( 0=red, 60=yellow, 120=green, ..., 360=red )
hue: { min: 0, max: 360 },

// saturation ( 0=grey, 100=colorfull )
saturation: { min: 70, max: 100 },

// lightness ( 0=extremlydark, 50=optimal, 100=extremlybright )
lightness: { min: 45, max: 65 },

// hue variation for individual triangles
variation: { min: 7, max: 14, enabled: true },

// color shift from primary hue to secondary hue ( the pattern )
shift: { min: 60, max: 300 },

// the pattern opacity
figurealpha: { min: .7, max: 1.2 }, // alpha

// simulate a 3d cube by different areas gets some more/less light applyed 
light:{ top:10, right:-8, left:-4, enabled: true},

// Allows a custom canvas to be used to render into
createCanvas: (width, height) => HTMLCanvasElement

}
```



