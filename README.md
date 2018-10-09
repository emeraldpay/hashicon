[![GitHub release](https://img.shields.io/github/release/ETCDEVTeam/hashicon.svg)](https://github.com/ETCDEVTeam/hashicon/releases)
[![npm](http://img.shields.io/npm/v/hashicon.svg)](https://www.npmjs.com/package/hashicon)
[![License](https://img.shields.io/npm/l/hashicon.svg)](LICENSE)



Hashicon
==========

Generates a beautiful representation of any hash.

[Example page](https://ETCDEVTeam.github.io/hashicons/examples/)   
More examples here: [source](examples/index.html)

![Sample hashicon image](xexamples/hashicons.png "Hashicons")



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
	TODO: description

	hue: { min: 0, max: 360 },
	saturation: { min: 70, max: 100 },
	lightness: { min: 45, max: 65 },
	variation: { min: 2, max: 6, enabled: true },
	shift: { min: 150, max: 210 },
	figurealpha: { min: .7, max: 1.2 },
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


