# Debuggercises 

> 6/26/2020, 8:00:06 AM 

## [exercises](../../README.md)/[19-implicit-coercion](../README.md)/2-write-tests-relational 

- [/greater-than-or-equal-to.js](#greater-than-or-equal-tojs) - _pass_ 
- [/greater-than.js](#greater-thanjs) - _pass_ 
- [/less-than-or-equal-to.js](#less-than-or-equal-tojs) - _pass_ 
- [/less-than.js](#less-thanjs) - _pass_ 
---

## /greater-than-or-equal-to.js 

> pass 
>
> [review source](../../../exercises/19-implicit-coercion/2-write-tests-relational/greater-than-or-equal-to.js)

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

// a >= b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

const greaterThanOrEqualTo = (left, right) => left >= right;

const _1_a = '1';
const _1_b = 1;
const _1_expect = true;
const _1_native = greaterThanOrEqualTo(_1_a, _1_b);
console.assert(_1_expect === _1_native, 'Test 1');

const _2_a = 0;
const _2_b = null;
const _2_expect = true;
const _2_native = greaterThanOrEqualTo(_2_a, _2_b);
console.assert(_2_expect === _2_native, 'Test 2');

const _3_a = NaN;
const _3_b = null;
const _3_expect = false;
const _3_native = greaterThanOrEqualTo(_3_a, _3_b);
console.assert(_3_expect === _3_native, 'Test 3');

const _4_a = '0.0';
const _4_b = false;
const _4_expect = true;
const _4_native = greaterThanOrEqualTo(_4_a, _4_b);
console.assert(_4_expect === _4_native, 'Test 4');

const _5_a = false;
const _5_b = true;
const _5_expect = false;
const _5_native = greaterThanOrEqualTo(_5_a, _5_b);
console.assert(_5_expect === _5_native, 'Test 5');

const _6_a = '13';
const _6_b = true;
const _6_expect = true;
const _6_native = greaterThanOrEqualTo(_6_a, _6_b);
console.assert(_6_expect === _6_native, 'Test 6');

const _7_a = 'aa';
const _7_b = 'ab';
const _7_expect = false;
const _7_native = greaterThanOrEqualTo(_7_a, _7_b);
console.assert(_7_expect === _7_native, 'Test 7');

const _8_a = 'aa';
const _8_b = 'aa';
const _8_expect = true;
const _8_native = greaterThanOrEqualTo(_8_a, _8_b);
console.assert(_8_expect === _8_native, 'Test 8');

const _9_a = 0;
const _9_b = '';
const _9_expect = true;
const _9_native = greaterThanOrEqualTo(_9_a, _9_b);
console.assert(_9_expect === _9_native, 'Test 9');
```

[TOP](#debuggercises)

---

## /greater-than.js 

> pass 
>
> [review source](../../../exercises/19-implicit-coercion/2-write-tests-relational/greater-than.js)

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

// a > b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

const greaterThan = (left, right) => left > right;

const _1_a = '1';
const _1_b = 1;
const _1_expect = false;
const _1_native = greaterThan(_1_a, _1_b);
console.assert(_1_expect === _1_native, 'Test 1');

const _2_a = 1;
const _2_b = null;
const _2_expect = true;
const _2_native = greaterThan(_2_a, _2_b);
console.assert(_2_expect === _2_native, 'Test 2');

const _3_a = -null;
const _3_b = null;
const _3_expect = false;
const _3_native = greaterThan(_3_a, _3_b);
console.assert(_3_expect === _3_native, 'Test 3');

const _4_a = true;
const _4_b = false;
const _4_expect = true;
const _4_native = greaterThan(_4_a, _4_b);
console.assert(_4_expect === _4_native, 'Test 4');

const _5_a = false;
const _5_b = true;
const _5_expect = false;
const _5_native = greaterThan(_5_a, _5_b);
console.assert(_5_expect === _5_native, 'Test 5');

const _6_a = '13';
const _6_b = true;
const _6_expect = true;
const _6_native = greaterThan(_6_a, _6_b);
console.assert(_6_expect === _6_native, 'Test 6');

const _7_a = 'aa';
const _7_b = 'ab';
const _7_expect = false;
const _7_native = greaterThan(_7_a, _7_b);
console.assert(_7_expect === _7_native, 'Test 7');

const _8_a = 'bc';
const _8_b = 'ab';
const _8_expect = true;
const _8_native = greaterThan(_8_a, _8_b);
console.assert(_8_expect === _8_native, 'Test 8');

const _9_a = 0;
const _9_b = 'ab';
const _9_expect = false;
const _9_native = greaterThan(_9_a, _9_b);
console.assert(_9_expect === _9_native, 'Test 9');
```

[TOP](#debuggercises)

---

## /less-than-or-equal-to.js 

> pass 
>
> [review source](../../../exercises/19-implicit-coercion/2-write-tests-relational/less-than-or-equal-to.js)

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

// a <= b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

const lessThanOrEqualTo = (left, right) => left <= right;

const _1_a = '1';
const _1_b = 1;
const _1_expect = true;
const _1_native = lessThanOrEqualTo(_1_a, _1_b);
console.assert(_1_expect === _1_native, 'Test 1');

const _2_a = -Infinity;
const _2_b = null;
const _2_expect = true;
const _2_native = lessThanOrEqualTo(_2_a, _2_b);
console.assert(_2_expect === _2_native, 'Test 2');

const _3_a = 1;
const _3_b = null;
const _3_expect = false;
const _3_native = lessThanOrEqualTo(_3_a, _3_b);
console.assert(_3_expect === _3_native, 'Test 3');

const _4_a = '0.0';
const _4_b = false;
const _4_expect = true;
const _4_native = lessThanOrEqualTo(_4_a, _4_b);
console.assert(_4_expect === _4_native, 'Test 4');

const _5_a = false;
const _5_b = true;
const _5_expect = true;
const _5_native = lessThanOrEqualTo(_5_a, _5_b);
console.assert(_5_expect === _5_native, 'Test 5');

const _6_a = '13';
const _6_b = true;
const _6_expect = false;
const _6_native = lessThanOrEqualTo(_6_a, _6_b);
console.assert(_6_expect === _6_native, 'Test 6');

const _7_a = 'aa';
const _7_b = 'ab';
const _7_expect = true;
const _7_native = lessThanOrEqualTo(_7_a, _7_b);
console.assert(_7_expect === _7_native, 'Test 7');

const _8_a = 'aa';
const _8_b = 'aa';
const _8_expect = true;
const _8_native = lessThanOrEqualTo(_8_a, _8_b);
console.assert(_8_expect === _8_native, 'Test 8');

const _9_a = 0;
const _9_b = '';
const _9_expect = true;
const _9_native = lessThanOrEqualTo(_9_a, _9_b);
console.assert(_9_expect === _9_native, 'Test 9');
```

[TOP](#debuggercises)

---

## /less-than.js 

> pass 
>
> [review source](../../../exercises/19-implicit-coercion/2-write-tests-relational/less-than.js)

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

// a < b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

const lessThan = (left, right) => left < right;

const _1_a = '1';
const _1_b = 1;
const _1_expect = false;
const _1_native = lessThan(_1_a, _1_b);
console.assert(_1_expect === _1_native, 'Test 1');

const _2_a = -Infinity;
const _2_b = null;
const _2_expect = true;
const _2_native = lessThan(_2_a, _2_b);
console.assert(_2_expect === _2_native, 'Test 2');

const _3_a = NaN;
const _3_b = null;
const _3_expect = false;
const _3_native = lessThan(_3_a, _3_b);
console.assert(_3_expect === _3_native, 'Test 3');

const _4_a = '0.0';
const _4_b = false;
const _4_expect = false;
const _4_native = lessThan(_4_a, _4_b);
console.assert(_4_expect === _4_native, 'Test 4');

const _5_a = false;
const _5_b = true;
const _5_expect = true;
const _5_native = lessThan(_5_a, _5_b);
console.assert(_5_expect === _5_native, 'Test 5');

const _6_a = '13';
const _6_b = true;
const _6_expect = false;
const _6_native = lessThan(_6_a, _6_b);
console.assert(_6_expect === _6_native, 'Test 6');

const _7_a = 'aa';
const _7_b = 'ab';
const _7_expect = true;
const _7_native = lessThan(_7_a, _7_b);
console.assert(_7_expect === _7_native, 'Test 7');

const _8_a = 'aa';
const _8_b = 'aa';
const _8_expect = false;
const _8_native = lessThan(_8_a, _8_b);
console.assert(_8_expect === _8_native, 'Test 8');

const _9_a = 0;
const _9_b = '';
const _9_expect = false;
const _9_native = lessThan(_9_a, _9_b);
console.assert(_9_expect === _9_native, 'Test 9');
```

[TOP](#debuggercises)

