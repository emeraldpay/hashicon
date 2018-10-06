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
https://www.jsdelivr.com/?docs=gh
unpkg.com/
const hash = "...";
document.body.appendChild( identicon(hash) ); // icon is a canvas element

// or with custom configuration
const config = {...};
const icon = identicon(hash, config);
document.body.appendChild(icon); // icon is a canvas element
```

Node
---


Development
-----------
```1. npm install```
```2. npm run dev```



Build
-----

    ```npm run build```

