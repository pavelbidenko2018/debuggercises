# Debuggercises 

## /exercises/08-block-scope/2-missing-variables 

> 6/17/2020, 8:09:52 AM 

[../README.md](../README.md)

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 
- [/3.js](#3js) - _pass_ 

---

## /1.js 

> pass 
>
> [review source](../../../exercises/08-block-scope/2-missing-variables/1.js)

```txt
+ PASS: Test 1
```

```js
'use strict';

const a = 3;
let b = 3; {
    const a = 5;
    b = a;
}
console.assert(b === 5, 'Test 1');
```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/08-block-scope/2-missing-variables/2.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
```

```js
'use strict';

let x = 'hi!';
let y = 'hi!'; {
    x = 'hi!';
    let y = 'bye!';
}
x = 'bye!';
console.assert(y === 'hi!', 'Test 1');
console.assert(x === 'bye!', 'Test 2');
```

[TOP](#debuggercises)

---

## /3.js 

> pass 
>
> [review source](../../../exercises/08-block-scope/2-missing-variables/3.js)

```txt
+ PASS: Test 1
```

```js
'use strict';

let m = 0; {
    let l = 10;
    const m = 1;
    l = 0;
}
console.assert(m === 0, 'Test 1');
```

[TOP](#debuggercises)

