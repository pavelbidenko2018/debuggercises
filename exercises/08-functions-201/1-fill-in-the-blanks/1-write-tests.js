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
function add(x, y) {
    if (typeof x !== 'number') { throw new TypeError(); }
    if (typeof y !== 'number') { throw new TypeError(); }

    const result = x + y;

    if (typeof result !== 'number') { throw new TypeError(); }
    return result;
}

const _1_expect = 1;
const _1_actual = add(1, 0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = -2;
const _2_actual = add(-1, -1);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = Infinity;
const _3_actual = add(Infinity, Infinity);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = -Infinity;
const _4_actual = add(-Infinity, 12);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = -Infinity;
const _5_actual = add(-Infinity, -Infinity);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = Infinity;
const _6_actual = add(0, Infinity);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 0;
const _7_actual = add(-0.0, 0.0);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 1.12164654654654654654e3 + 1.0003;
const _8_actual = add(1.0003, 1.12164654654654654654e3);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = -1.998e+100;
const _9_actual = add(-9.99e99, -9.99e99);
console.assert(_9_actual === _9_expect, 'Test 9');