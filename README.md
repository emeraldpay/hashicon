[![GitHub release](https://img.shields.io/github/release/ETCDEVTeam/hashicon.svg)](https://github.com/ETCDEVTeam/hashicon/releases)
[![npm](http://img.shields.io/npm/v/hashicon.svg)](https://www.npmjs.com/package/hashicon)
[![License](https://img.shields.io/npm/l/hashicon.svg)](LICENSE)


Hashicon
========

Generates a beautiful representation of any hash.

[Example page](https://ETCDEVTeam.github.io/hashicon/examples/)   
More examples here: [source](examples/index.html)

![Sample hashicon image](examples/hashicons.png "Hashicons")



Browser
---

Install with: 
```npm install hashicon```   
-or-   
CDN: ```<script src="//unpkg.com/hashicon"></script>```   
-or-   
Download the [current build](dist/hashicon.umd.js)   

```javascript


const hash = "0xdc53525847b67a9e32d80066202d5744c86ae500";
document.body.appendChild( hashicon(hash) ); // icon is a canvas element
document.body.appendChild( hashicon(hash), 80 ); // 80px (with HiDPI/retina adjustments)

// or with custom configuration
const params = {...};
const icon = hashicon(hash, params);
document.body.appendChild(icon); // icon is a canvas element
```

Saving to PNG:  ```right-click "Save Image As..."```



Params
---
See [default params](src/params.js)

```
HashIcons are generated from a hash number using the 
modulo operator to extract bits of information as needed. 
With this params you can controll the possible visual output. 
Colors are calculated in hsla ( Hue, Saturation, Lightness, Alpha ).

// primary color range radius ( 0=red, 60=yellow, 120=green, ... 360=red )
hue: { min: 0, max: 360 },

// saturation ( 0=grey, 100=colorfull )
saturation: { min: 70, max: 100 },

// lightness ( 50=optimal, <50=darker, >50=lighter, 0=extremlydark, 100=extremlybright )
lightness: { min: 45, max: 65 },

// hue variation for each triangle
variation: { min: -12, max: 12, enabled: true },

// color shift from primary hue to secondary hue ( the pattern )
shift: { min: 150, max: 210 },

// the pattern opacity
figurealpha: { min: .7, max: 1.2 }, // alpha

// simulate a 3d cube by different areas gets some more/less light applyed 
light:{ top:10, right:-8, left:-4, enabled: true}

```




Node
---
```TODO: node-canvas example```   
Install with: ```npm install hashicon```   
See ESM+CJS builds [here](dist)


Development
-----------
```1. npm install```   
```2. npm run dev```
```3. http://localhost:3000```

Changes are built in "dev" folder with sourcemaps and are live-reloaded.

Build
-----
```npm run build``` into "dist" folder

License
-----
See [LICENSE](LICENSE)


