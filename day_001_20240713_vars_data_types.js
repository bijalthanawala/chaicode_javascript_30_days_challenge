console.log('hello from day_001: chaicode Javascript 30 days challenge');

var n = 50;
console.log(`n=${n}`);
console.log(`typeof(n)=${typeof(n)}`);
console.log("\n");

let s = 'This is a string variable created by "let"';
console.log(`s=${s}`);
console.log(`typeof(s)=${typeof(s)}`);
console.log("\n");

const const_bool = true;
console.log(`const_bool=${const_bool}`);
console.log(`typeof(const_bool)=${typeof(const_bool)}`);
console.log("\n");

let obj = {'one': 1, 'two': 2, 'three': 3};
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
    const_bool = false;
} catch (e) {
    console.log('Failed to reassign value to const');
    console.log(`Error=${e}`);
}

console.log(`const_bool=${const_bool}`);
console.log("\n");
