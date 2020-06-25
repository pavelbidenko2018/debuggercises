# Debuggercises 

> 6/25/2020, 2:44:14 PM 

## [exercises](../../README.md)/[14-increment-and-decrement](../README.md)/exercises 

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 
- [/3.js](#3js) - _pass_ 
---

## /1.js 

> pass 
>
> [review source](../../../exercises/14-increment-and-decrement/exercises/1.js)

```txt
+ PASS: Test 1 x
+ PASS: Test 1 y
+ PASS: Test 2 x
+ PASS: Test 2 y
+ PASS: Test 3 x
+ PASS: Test 3 y
+ PASS: Test 3 z
+ PASS: Test 4 x
+ PASS: Test 4 y
+ PASS: Test 4 z
```

```js
'use strict';

let x = 0;

let y = ++x;
console.assert(x === 1, 'Test 1 x');
console.assert(y === 1, 'Test 1 y');

x = y--;
console.assert(x === 1, 'Test 2 x');
console.assert(y === 0, 'Test 2 y');

let z = x++;
console.assert(x === 2, 'Test 3 x');
console.assert(y === 0, 'Test 3 y');
console.assert(z === 1, 'Test 3 z');

y = --x;
console.assert(x === 1, 'Test 4 x');
console.assert(y === 1, 'Test 4 y');
console.assert(z === 1, 'Test 4 z');
```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/14-increment-and-decrement/exercises/2.js)

```txt
+ PASS: Test 1 x
+ PASS: Test 1 y
+ PASS: Test 2 x
+ PASS: Test 2 y
+ PASS: Test 3 x
+ PASS: Test 3 y
+ PASS: Test 3 z
+ PASS: Test 4 x
+ PASS: Test 4 y
+ PASS: Test 4 z
```

```js
'use strict';

let x = 0;

let y = x--;
console.assert(x === -1, 'Test 1 x');
console.assert(y === 0, 'Test 1 y');

x = ++y;
console.assert(x === 1, 'Test 2 x');
console.assert(y === 1, 'Test 2 y');

let z = y++;
console.assert(x === 1, 'Test 3 x');
console.assert(y === 2, 'Test 3 y');
console.assert(z === 1, 'Test 3 z');

x = --z;
console.assert(x === 0, 'Test 4 x');
console.assert(y === 2, 'Test 4 y');
console.assert(z === 0, 'Test 4 z');
```

[TOP](#debuggercises)

---

## /3.js 

> pass 
>
> [review source](../../../exercises/14-increment-and-decrement/exercises/3.js)

```txt
+ PASS: Test 1 x
+ PASS: Test 1 y
+ PASS: Test 2 x
+ PASS: Test 2 y
+ PASS: Test 3 x
+ PASS: Test 3 y
+ PASS: Test 3 z
+ PASS: Test 4 x
+ PASS: Test 4 y
+ PASS: Test 4 z
```

```js
'use strict';

let x = 0;

let y = x--;
console.assert(x === -1, 'Test 1 x');
console.assert(y === 0, 'Test 1 y');

x = y--;
console.assert(x === 0, 'Test 2 x');
console.assert(y === -1, 'Test 2 y');

let z = x++;
console.assert(x === 1, 'Test 3 x');
console.assert(y === -1, 'Test 3 y');
console.assert(z === 0, 'Test 3 z');

z = --z;
console.assert(x === 1, 'Test 4 x');
console.assert(y === -1, 'Test 4 y');
console.assert(z === -1, 'Test 4 z');
```

[TOP](#debuggercises)

