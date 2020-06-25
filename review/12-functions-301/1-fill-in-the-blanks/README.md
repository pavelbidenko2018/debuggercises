# Debuggercises 

> 6/25/2020, 1:45:39 PM 

## [exercises](../../README.md)/[12-functions-301](../README.md)/1-fill-in-the-blanks 

- [/1-write-tests.js](#1-write-testsjs) - _pass_ 
- [/2-write-tests.js](#2-write-testsjs) - _pass_ 
- [/3-pass-tests.js](#3-pass-testsjs) - _pass_ 
- [/4-pass-tests.js](#4-pass-testsjs) - _pass_ 
---

## /1-write-tests.js 

> pass 
>
> [review source](../../../exercises/12-functions-301/1-fill-in-the-blanks/1-write-tests.js)

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
'use strict';

// fill in the blanks to write 9 passing test cases for this function
// be curious!  what happens if you use strange numbers like
//  NaN, Infinity, -0.0, 1.0003, -Infinity, -NaN, ...

/**
 * adds two numbers together
 * @param {number} x
 * @param {number} y
 * @returns {number} the sum of x and y
 */
const add = (x, y) => {
    if (typeof x !== 'number') { throw new TypeError('x'); }
    if (typeof y !== 'number') { throw new TypeError('y'); }

    const result = x + y;

    if (typeof result !== 'number') { throw new TypeError('result'); }
    return result;
};

const _1_expect = 3;
const _1_actual = add(1, 2);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 4;
const _2_actual = add(-1, 5);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = -12;
const _3_actual = add(-10, -2);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = Infinity;
const _4_actual = add(0, Infinity);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = -Infinity;
const _5_actual = add(0, -Infinity);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 2.0006;
const _6_actual = add(1.0003, 1.0003);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 0;
const _7_actual = add(-0.00, -0.00);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 100;
const _8_actual = add(100, 0);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 99;
const _9_actual = add(-1, 100);
console.assert(_9_actual === _9_expect, 'Test 9');
```

[TOP](#debuggercises)

---

## /2-write-tests.js 

> pass 
>
> [review source](../../../exercises/12-functions-301/1-fill-in-the-blanks/2-write-tests.js)

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
'use strict';

// fill in the blanks to write 9 passing test cases for this function
// be curious!  what happens if you use strange values?

/**
 * compares the type and value of two parameters
 * @param {any} a
 * @param {any} b
 * @returns {boolean} result of the comparison
 */
const strictEqual = (a, b) => {
    // no need to check a or b, they can be any type

    const result = a === b;

    if (typeof result !== 'boolean') { throw new TypeError('result'); }
    return result;
};


const _1_expect = false;
const _1_actual = strictEqual(1, '1');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = strictEqual(true, 1);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = strictEqual(false, Boolean(0));
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = strictEqual(typeof 'a', typeof 'b');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = strictEqual(false, true);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = true;
const _6_actual = strictEqual(Infinity, Infinity);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = false;
const _7_actual = strictEqual(Infinity, -Infinity);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = false;
const _8_actual = strictEqual(NaN, NaN);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = true;
const _9_actual = strictEqual(undefined, undefined);
console.assert(_9_actual === _9_expect, 'Test 9');
```

[TOP](#debuggercises)

---

## /3-pass-tests.js 

> pass 
>
> [review source](../../../exercises/12-functions-301/1-fill-in-the-blanks/3-pass-tests.js)

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
'use strict';

// write the logic to pass these tests

/**
 * checks if two values have the same truthiness
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
const sameTruthiness = (a, b) => {
    // no need to check a or b, they can be any type

    const result = Boolean(a) === Boolean(b);

    if (typeof result !== 'boolean') { throw new TypeError('result'); }
    return result;
};


const _1_expect = false;
const _1_actual = sameTruthiness(1, 0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = sameTruthiness('', ' ');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = false;
const _3_actual = sameTruthiness(null, 'null');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = sameTruthiness(false, -Infinity);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = sameTruthiness(NaN, 'false');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = true;
const _6_actual = sameTruthiness(2, '2');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = true;
const _7_actual = sameTruthiness('true', true);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true;
const _8_actual = sameTruthiness(-1, 1);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = true;
const _9_actual = sameTruthiness('hi!', 'bye :(');
console.assert(_9_actual === _9_expect, 'Test 9');
```

[TOP](#debuggercises)

---

## /4-pass-tests.js 

> pass 
>
> [review source](../../../exercises/12-functions-301/1-fill-in-the-blanks/4-pass-tests.js)

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
'use strict';

// write the logic to pass the tests
// describe the function's behavior in the comment

/**
 * _
 * @param {any} a
 * @returns {boolean}
 */
const mystery = (a) => {
    // no need to check a , they can be any type

    const result = (typeof(a) === 'undefined') || isNaN(Number(a)) === true;

    if (typeof result !== 'boolean') { throw new TypeError('result'); }
    return result;
};


const _1_expect = false;
const _1_actual = mystery('1');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = mystery(true);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = false;
const _3_actual = mystery(null);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = mystery(8.5);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = mystery('Infinity');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = mystery('');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = true;
const _7_actual = mystery(undefined);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true;
const _8_actual = mystery('four');
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = true;
const _9_actual = mystery('hi!');
console.assert(_9_actual === _9_expect, 'Test 9');
```

[TOP](#debuggercises)

