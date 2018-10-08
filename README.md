[![GitHub release](https://img.shields.io/github/release/ETCDEVTeam/identicon.svg)](https://github.com/ETCDEVTeam/identicon/releases)
[![npm](http://img.shields.io/npm/v/identicon.svg)](https://www.npmjs.com/package/identicon)
[![License](https://img.shields.io/npm/l/identicon.svg)](LICENSE)



Identicon
==========

TODO: Richard.
A tiny library for generating identicon.

[Example page](https://oori.github.io/identicons-temp/examples/)

![Sample identicon image](examples/identicons.png "Identicons")


Browser
---

```javascript
<script src="https://www.jsdelivr.com/?docs=gh"></script>
<script src="http://unpkg.com/identicon"></script>

const hash = "...";
document.body.appendChild( identicon(hash) ); // icon is a canvas element
document.body.appendChild( identicon(hash), 80 ); // 80px (with HiDPI/retina adjustments)

// or with custom configuration
const params = {...};
const icon = identicon(hash, params);
document.body.appendChild(icon); // icon is a canvas element
```

Saving to PNG:  ```right-click "Save Image As..."```



Params
---
TODO


Node
---
TODO   (see identicons.esm)


Development
-----------
```1. npm install```
```2. npm run dev```



Build
-----

    ```npm run build```

