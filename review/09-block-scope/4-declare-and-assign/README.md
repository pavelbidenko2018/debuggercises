# Debuggercises 

> 6/25/2020, 1:08:02 PM 

## [exercises](../../README.md)/[09-block-scope](../README.md)/4-declare-and-assign 

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 
- [/3.js](#3js) - _pass_ 
---

## /1.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/4-declare-and-assign/1.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
```

```js
'use strict';

let a = false;
console.assert(a === false, 'Test 1'); {
    const a = null;
    console.assert(a === null, 'Test 2');
}
console.assert(a === false, 'Test 3');
```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/4-declare-and-assign/2.js)

```txt
+ PASS: Test 1: x
+ PASS: Test 2: x
+ PASS: Test 3: y
+ PASS: Test 4: x
```

```js
'use strict';

let x = 'hi!';
console.assert(x === 'hi!', 'Test 1: x'); {
    const y = x;
    x = 'bye!';

    console.assert(x === 'bye!', 'Test 2: x');
    console.assert(y === 'hi!', 'Test 3: y');
}
console.assert(x === 'bye!', 'Test 4: x');
```

[TOP](#debuggercises)

---

## /3.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/4-declare-and-assign/3.js)

```txt
+ PASS: Test 1: m
+ PASS: Test 2: m
+ PASS: Test 3: l
+ PASS: Test 4: m
```

```js
'use strict';

let m = 1;
console.assert(m === 1, 'Test 1: m'); {
    m = 2;
    const l = 3;
    console.assert(m === 2, 'Test 2: m');
    console.assert(l === 3, 'Test 3: l');
}
m = 4;
console.assert(m === 4, 'Test 4: m');
```

[TOP](#debuggercises)

