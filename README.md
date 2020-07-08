Hashicon
==========

[![GitHub tag](https://img.shields.io/github/tag/ETCDEVTeam/hashicon.svg)](https://GitHub.com/emeraldpay/hashicon/tags/)
[![npm](http://img.shields.io/npm/v/@emeraldpay/hashicon.svg)](https://www.npmjs.com/package/@emeraldpay/hashicon)
[![License](https://img.shields.io/npm/l/@emeraldpay/hashicon.svg)](LICENSE)

> Generates a beautiful representation of any hash.

![Sample hashicon image](examples/hashicons.png "Hashicons")

Usage
-----

Install with: 
```shell
$ npm install @emeraldpay/hashicon --save
```   

Something that you want to represent visually. For example ID of an object on the screen.
```js
const hash = "9dddff8f-be81-4c27-80c8-099327865f3f";
```

Create a `hashicon` with default params:
```js
import { hashicon } from 'hashicon';

const icon = hashicon(hash); // icon is a <canvas> element
const icon = hashicon(hash, 80);  // size 80px
```

Or, pass custom [params](#params):
```js
const params = {...};
const icon = hashicon(hash, params);
```

Finally, append the newly created `hashicon` to the HTML document:
```js
document.body.appendChild(icon);
```

React
-----

Install with: 
```shell
$ npm install @emeraldpay/hashicon-react --save
```   

And use the component:

```js
import { Hashicon } from 'hashicon-react';

// something that you want to represent visually. For example ID of an object on the screen.
const value = "9dddff8f-be81-4c27-80c8-099327865f3f";

// icon is a <canvas> element
<Hashicon value={value}/>

// Same icon with 80px in size
<Hashicon value={value} size={89}/>
```

Params
---
> See [default params](src/params.ts)

HashIcon's values are extracted from the hash, and controlled with the following parameters to manipulate the possible visual output:

```js
{

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

Development
-----------

1. Install package dependencies locally:
```shell
$ yarn install
```

2. Start development environment:
```shell
$ yarn workspace @emeraldpay/hashicon run storybook
```

A browser pointing to Storybook demo will start automatically. 
If not opened, see console for:

```
╭─────────────────────────────────────────────────────╮
│                                                     │
│   Storybook 5.3.19 started                          │
│   3.62 s for manager and 3.32 s for preview         │
│                                                     │
│    Local:            http://localhost:60490/        │
│    On your network:  http://192.168.0.100:60490/    │
│                                                     │
╰─────────────────────────────────────────────────────╯
```

And open the _local_ url (http://localhost:60490/ in the example above)

Build
-----

```shell
$ yarn build
```

> Builds package into `lib/` folder inside each package.

License
-----

Apache 2

See [LICENSE](LICENSE)


