# Debuggercises 

## /exercises/08-block-scope/1-missing-values 

> 6/18/2020, 5:27:50 AM 

[../README.md](../README.md)

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 
- [/3.js](#3js) - _pass_ 

---

## /1.js 

> pass 
>
> [review source](../../../exercises/08-block-scope/1-missing-values/1.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
```

```js
'use strict';

const a = 3;
console.assert(a === 3, 'Test 1'); {
    const a = 5;
    console.assert(a === 5, 'Test 2');
}
console.assert(a === 3, 'Test 3');
```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/08-block-scope/1-missing-values/2.js)

```txt
+ PASS: Test 1: x
+ PASS: Test 2: x
+ PASS: Test 3: y
+ PASS: Test 4: x
```

```js
'use strict';

let x = 3;
console.assert(x === 3, 'Test 1: x'); {
    x = 10;
    const y = 5;

    console.assert(x === 10, 'Test 2: x');
    console.assert(y === 5, 'Test 3: y');
}
console.assert(x === 10, 'Test 4: x');
```

[TOP](#debuggercises)

---

## /3.js 

> pass 
>
> [review source](../../../exercises/08-block-scope/1-missing-values/3.js)

```txt
+ PASS: Test 1: m
+ PASS: Test 2: m
+ PASS: Test 3: l
+ PASS: Test 4: m
```

```js
'use strict';

let m = 3;
console.assert(m === 3, 'Test 1: m'); {
    let l = 10;
    const m = 5;
    l = 0;
    console.assert(m === 5, 'Test 2: m');
    console.assert(l === 0, 'Test 3: l');
}
m = 20;
console.assert(m === 20, 'Test 4: m');
```

[TOP](#debuggercises)

