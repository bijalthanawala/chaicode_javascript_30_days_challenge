/* global console */
/* eslint-disable id-length */
/* eslint-disable one-var */
/* eslint-disable prefer-const */

console.log('hello from day_001: chaicode Javascript 30 days challenge');

/* eslint-disable no-var */
/* eslint-disable vars-on-top */
var n = 50;
console.log(`n=${n}`);
console.log(`typeof(n)=${typeof(n)}`);
console.log("\n");
/* eslint-enable vars-on-top */
/* eslint-enable no-var */

let s = 'This is a string variable created by "let"';
console.log(`s=${s}`);
console.log(`typeof(s)=${typeof(s)}`);
console.log("\n");

const constBool = true;
console.log(`constBool=${constBool}`);
console.log(`typeof(constBool)=${typeof(constBool)}`);
console.log("\n");

let obj = {'apple': 1, 'beetroot': 2, 'carrot': 3};
console.log(`obj=${obj}`);
console.log(`typeof(obj)=${typeof(obj)}`);
console.log("\n");


let arr = ['one', 1, 'two', 2, 'three', 3];
console.log(`arr=${arr}`);
console.log(`typeof(arr)=${typeof(arr)}`);
console.log("\n");

console.log('Reassigning value to var');
try {
    n = 100;
} catch {
    console.log('Failed to reassign value to var');
}

console.log(`n=${n}`);
console.log("\n");

console.log('Reassigning value to const');
try {
    /* eslint-disable no-const-assign */
    constBool = false;
    /* eslint-enable no-const-assign */
} catch (e) {
    console.log('Failed to reassign value to const');
    console.log(`Error=${e}`);
}

console.log(`constBool=${constBool}`);
console.log("\n");
