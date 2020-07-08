Hashicon React
==============

> Generates a beautiful representation of any string value.

React component for [@emeraldpay/hashicon](https://www.npmjs.com/package/@emeraldpay/hashicon)

Install
---

Install with: 
```shell
$ npm install @emeraldpay/hashicon-react --save
```   

Usage
---

```js
import { Hashicon } from 'hashicon-react';

// something that you want to represent visually. For example ID of an object on the screen.
const value = "9dddff8f-be81-4c27-80c8-099327865f3f";

// icon is a <canvas> element
<Hashicon value={value}/>

// Same icon with 80px in size
<Hashicon value={value} size={89}/>
```



