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