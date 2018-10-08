[![GitHub release](https://img.shields.io/github/release/ETCDEVTeam/hashicon.svg)](https://github.com/ETCDEVTeam/hashicon/releases)
[![npm](http://img.shields.io/npm/v/hashicon.svg)](https://www.npmjs.com/package/hashicon)
[![License](https://img.shields.io/npm/l/hashicon.svg)](LICENSE)



Hashicon
==========

Generates a beautiful representation of any hash.

[Example page](https://oori.github.io/hashicons-temp/examples/)

![Sample hashicon image](examples/hashicons.png "Hashicons")



Browser
---

```javascript
<script src="https://www.jsdelivr.com/?docs=gh"></script>
<script src="http://unpkg.com/hashicon"></script>

const hash = "...";
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
TODO


Node
---
TODO   (see hashicons.esm)


Development
-----------
```1. npm install```
```2. npm run dev```



Build
-----

    ```npm run build```

