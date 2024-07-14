let a = 50;
let b = 10;

let sum = a + b;
console.log(`${a} + ${b} = ${sum}`);

let sub = a - b;
console.log(`${a} - ${b} = ${sub}`);

let mult = a * b;
console.log(`${a} * ${b} = ${mult}`);

let div = a / b;
console.log(`${a} / ${b} = ${div}`);

let rem = a % b;
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

b_str = '10';
console.log(`Number ${b} == String ${b_str} Result: ${b == b_str}`);
console.log(`Number ${b} === String ${b_str} Result: ${b === b_str}`);
console.log("");

let c = 20;
let d = 30;

if (c == 20 || c == 20+1) {
    console.log(`operator OR: Passed`);
} else {
    console.log(`operator OR: Failed`);
}

if (c == 20+1 || c == 20+2) {
    console.log(`operator OR: Passed`);
} else {
    console.log(`operator OR: Failed`);
}

if (c == 20 && d == 30) {
    console.log(`operator AND: Passed`);
} else {
    console.log(`operator AND: Failed`);
}

if (c == 20 || d == 30+1) {
    console.log(`operator AND: Passed`);
} else {
    console.log(`operator AND: Failed`);
}

if (!(c == 20+1)) {
    console.log(`operator NOT: Passed`);
} else {
    console.log(`operator NOT: Failed`);
}

if (!(c == 20)) {
    console.log(`operator NOT: Passed`);
} else {
    console.log(`operator NOT: Failed`);
}
console.log("");

c > 0 ? console.log(`${c} is Positive`) : console.log(`${c} is negative`);

c = -c;
c > 0 ? console.log(`${c} is Positive`) : console.log(`${c} is negative`);
