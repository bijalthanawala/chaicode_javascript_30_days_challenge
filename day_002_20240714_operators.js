/* global console */
/* eslint-disable id-length */
/* eslint-disable one-var */

let a = 50;
const b = 10;

const sum = a + b;
console.log(`${a} + ${b} = ${sum}`);

const sub = a - b;
console.log(`${a} - ${b} = ${sub}`);

const mult = a * b;
console.log(`${a} * ${b} = ${mult}`);

const div = a / b;
console.log(`${a} / ${b} = ${div}`);

const rem = a % b;
console.log(`${a} % ${b} = ${rem}`);

a += 50;
console.log(`a += 50 Result: ${a}`);

a -= 5;
console.log(`a -= 50 Result: ${a}`);
console.log("");

console.log(`${a} > ${b} Result: ${a > b}`);
console.log(`${a} < ${b} Result: ${a < b}`);
console.log(`${b} > ${a} Result: ${b > a}`);
console.log(`${b} < ${a} Result: ${b < a}`);
console.log(`${a} < 95  Result: ${a < 95}`);
console.log("");

console.log(`${a} <= 95  Result: ${a <= 95}`);
console.log(`${b} > 10  Result: ${b > 10}`);
console.log(`${b} >= 10  Result: ${b >= 10}`);
console.log("");

const bStr = '10';

/* eslint-disable eqeqeq */
console.log(`Number ${b} == String ${bStr} Result: ${b == bStr}`);
/* eslint-enable eqeqeq */

console.log(`Number ${b} === String ${bStr} Result: ${b === bStr}`);
console.log("");

let c = 20;
const d = 30;

if (c === 20 || c === 20+1) {
    console.log(`operator OR: Passed`);
} else {
    console.log(`operator OR: Failed`);
}

if (c === 20+1 || c === 20+2) {
    console.log(`operator OR: Passed`);
} else {
    console.log(`operator OR: Failed`);
}

if (c === 20 && d === 30) {
    console.log(`operator AND: Passed`);
} else {
    console.log(`operator AND: Failed`);
}

if (c === 20 || d === 30+1) {
    console.log(`operator AND: Passed`);
} else {
    console.log(`operator AND: Failed`);
}

/* eslint-disable no-negated-condition */
if (!(c === 20+1)) {
    console.log(`operator NOT: Passed`);
} else {
    console.log(`operator NOT: Failed`);
}

if (!(c === 20)) {
    console.log(`operator NOT: Passed`);
} else {
    console.log(`operator NOT: Failed`);
}
console.log("");
/* eslint-enable no-negated-condition */

let result = c > 0 ? 'Positive' : 'Negative';
console.log(`${c} is ${result}`);

c = -c;
result = c > 0 ? 'Positive' : 'Negative';
console.log(`${c} is ${result}`);
