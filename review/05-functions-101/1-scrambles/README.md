# Debuggercises 

> 6/25/2020, 5:13:37 PM 

## [exercises](../../README.md)/[05-functions-101](../README.md)/1-scrambles 

- [/1-write-expected.js](#1-write-expectedjs) - _pass_ 
- [/2-write-arguments.js](#2-write-argumentsjs) - _pass_ 
- [/3-write-function.js](#3-write-functionjs) - _pass_ 
---

## /1-write-expected.js 

> pass 
>
> [review source](../../../exercises/05-functions-101/1-scrambles/1-write-expected.js)

```txt
+ PASS: Assertion 1
+ PASS: Assertion 2
+ PASS: Assertion 3
+ PASS: Assertion 4
+ PASS: Assertion 5
+ PASS: Assertion 6
```

```js
'use strict';

function scramble(param1, param2, param3) {
    return `${param3}${param1}${param2}`;
}

const arg1 = "a";
const arg2 = "c";
const arg3 = "b";
const returned1 = scramble(arg1, arg2, arg3);
const isTrue1 = returned1 === 'bac';
console.assert(isTrue1, 'Assertion 1');

const arg4 = "a";
const arg5 = "b";
const arg6 = "c";
const returned2 = scramble(arg4, arg5, arg6);
const isTrue2 = returned2 === 'cab';
console.assert(isTrue2, 'Assertion 2');

const arg7 = "c";
const arg8 = "b";
const arg9 = "a";
const returned3 = scramble(arg8, arg9, arg7);
const isTrue3 = returned3 === 'cba';
console.assert(isTrue3, 'Assertion 3');

const arg10 = "b";
const arg11 = "a";
const arg12 = "c";
const returned4 = scramble(arg12, arg11, arg10);
const isTrue4 = returned4 === 'bca';
console.assert(isTrue4, 'Assertion 4');

const arg13 = "b";
const arg14 = "c";
const arg15 = "a";
const returned5 = scramble(arg14, arg15, arg13);
const isTrue5 = returned5 === 'bca';
console.assert(isTrue5, 'Assertion 5');

const arg16 = "c";
const arg17 = "a";
const arg18 = "b";
const returned6 = scramble(arg18, arg17, arg16);
const isTrue6 = returned6 === 'cba';
console.assert(isTrue6, 'Assertion 6');
```

[TOP](#debuggercises)

---

## /2-write-arguments.js 

> pass 
>
> [review source](../../../exercises/05-functions-101/1-scrambles/2-write-arguments.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
```

```js
function mystery(a, b) {
    let result = '';
    if (typeof a === b) {
        result = 'path 1';
    } else if (a === typeof b) {
        result = 'path 2';
    } else {
        result = 'path 3';
    }
    return result;
}


const _1_expect = 'path 1';
const _1_actual = mystery(_1_expect, 'string');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 1';
const _2_actual = mystery(1, 'number');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'path 1';
const _3_actual = mystery(false, 'boolean');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'path 2';
const _4_actual = mystery('string', 'hello');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'path 2';
const _5_actual = mystery('number', 123);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 2';
const _6_actual = mystery('boolean', false);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 'path 3';
const _7_actual = mystery(1, '1');
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 3';
const _8_actual = mystery(false, _8_expect);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'path 3';
const _9_actual = mystery(undefined, NaN);
console.assert(_9_actual === _9_expect, 'Test 9');
```

[TOP](#debuggercises)

---

## /3-write-function.js 

> pass 
>
> [review source](../../../exercises/05-functions-101/1-scrambles/3-write-function.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
```

```js
function mystery(a, b) {
    if (a === Number(b) && b === null || b === Boolean(a) || b === undefined) {
        return 'path 1';
    } else if (typeof a === typeof b || b === NaN) {
        return 'path 2';
    } else return 'path 3';
}

const _1_expect = 'path 1';
const _1_actual = mystery(0, null);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 1';
const _2_actual = mystery('', undefined);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'path 1';
const _3_actual = mystery(NaN, false);
console.assert(_3_actual === _3_expect, 'Test 3');

//////////////////////////////////////////////////////

const _4_expect = 'path 2';
const _4_actual = mystery('hello', 'goodbye');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'path 2';
const _5_actual = mystery(-1, NaN);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 2';
const _6_actual = mystery(true, false);
console.assert(_6_actual === _6_expect, 'Test 6');


//////////////////////////////////////////////////////

const _7_expect = 'path 3';
const _7_actual = mystery('hello', 100);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 3';
const _8_actual = mystery(true, null);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'path 3';
const _9_actual = mystery(0, '0');
console.assert(_9_actual === _9_expect, 'Test 9');
//////////////////////////////////////////////////////
```

[TOP](#debuggercises)

