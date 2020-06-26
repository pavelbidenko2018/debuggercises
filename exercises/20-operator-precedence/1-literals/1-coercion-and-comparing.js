'use strict';

// write lots of comments!  explain your thinking at each step

const expected = true;

// the original expression
const step0 = typeof NaN === typeof Infinity;
console.assert(step0 === expected, 'Step 0');

/*

*/
const step1 = typeof NaN === typeof NaN;
console.assert(step1 === expected, 'Step 1');

/*

*/
const step2 = typeof undefined !== typeof null;
console.assert(step2 === expected, 'Step 2');

/*

*/
const step3 = typeof null !== typeof undefined;
console.assert(step3 === expected, 'Step 3');

/*

*/

const step4 = typeof undefined !== typeof 'asa';
console.assert(step4 === expected, 'Step 4');