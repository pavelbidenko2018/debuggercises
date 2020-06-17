# Debuggercises 

## /exercises/08-block-scope/3-assign-values 

> 6/17/2020, 9:42:55 AM 

[../README.md](../README.md)

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 
- [/3.js](#3js) - _pass_ 

---

## /1.js 

> pass 
>
> [review source](../../../exercises/08-block-scope/3-assign-values/1.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
```

```js
'use strict';

const a = '12';
console.assert(a === '12', 'Test 1'); {
    const a = true;
    console.assert(a === true, 'Test 2');
}
console.assert(a === '12', 'Test 3');
```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/08-block-scope/3-assign-values/2.js)

```txt
+ PASS: Test 1: x
+ PASS: Test 2: x
+ PASS: Test 3: y
+ PASS: Test 4: x
```

```js
'use strict';

let x = null;
console.assert(x === null, 'Test 1: x'); {
    x = false;
    const y = null;

    console.assert(x === false, 'Test 2: x');
    console.assert(y === null, 'Test 3: y');
}
console.assert(x === false, 'Test 4: x');
```

[TOP](#debuggercises)

---

## /3.js 

> pass 
>
> [review source](../../../exercises/08-block-scope/3-assign-values/3.js)

```txt
+ PASS: Test 1: m
+ PASS: Test 2: m
+ PASS: Test 3: l
+ PASS: Test 4: m
```

```js
'use strict';

let m = 'tall';
console.assert(m === 'tall', 'Test 1: m'); {
    let l = null;
    const m = 'short';
    l = 'mini';
    console.assert(m === 'short', 'Test 2: m');
    console.assert(l === 'mini', 'Test 3: l');
}
m = 'medium';
console.assert(m === 'medium', 'Test 4: m');
```

[TOP](#debuggercises)

