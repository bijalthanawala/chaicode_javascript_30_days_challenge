/* global console */
/* eslint-disable id-length */
/* eslint-disable one-var */

console.log('hello from day_003: chaicode Javascript 30 days challenge');

// Activity 1: Task 1
let n = 100;
if (n > 0) {
    console.log(`n(${n}) is a positive number`);
} else if(n < 0) {
    console.log(`n(${n}) is a negative number`);
} else {
    console.log(`n(${n}) is a negative number`);
}

n = -100;
if (n > 0) {
    console.log(`n(${n}) is a positive number`);
} else if(n < 0) {
    console.log(`n(${n}) is a negative number`);
} else {
    console.log(`n(${n}) is a negative number`);
}

n = 0;
if (n > 0) {
    console.log(`n(${n}) is a positive number`);
} else if(n < 0) {
    console.log(`n(${n}) is a negative number`);
} else {
    console.log(`n(${n}) is a negative number`);
}

// Activity 1: Task 2
const mrJrAge=15, mrSrAge=45;
if (mrSrAge > 18) {
    console.log(`Person with age ${mrSrAge} is eligible to vote`);
} else {
    console.log(`Person with age ${mrSrAge} is *not* eligible to vote`);
}
if (mrJrAge > 18) {
    console.log(`Person with age ${mrJrAge} is eligible to vote`);
} else {
    console.log(`Person with age ${mrJrAge} is *not* eligible to vote`);
}

// Activity 2: Task 3
const n1 = 500, n2 = 1000, n3 = 100;
/* eslint-disable no-useless-assignment */
let largest = -1;
/* eslint-enable no-useless-assignment */
if (n1 > n2) {
    if (n1 > n3) {
        largest = n1;
    } else {
        largest = n3;
    }
} else if (n2 > n3) {
        largest = n2;
    } else {
        largest = n3;
}
console.log(`${largest} is the largest of the three (${n1}, ${n2}, ${n3})`);


// Activity 3: Task 4
const dayNum = 4;
/* eslint-disable no-useless-assignment */
let dayName = "[Unknown]";
/* eslint-enable no-useless-assignment */
switch(dayNum) {
    case 0: { dayName = 'Sunday'; break;}
    case 1: { dayName = 'Monday'; break; }
    case 2: { dayName = 'Tuesday'; break; }
    case 3: { dayName = 'Wednesday'; break; }
    case 4: { dayName = 'Thursday'; break; }
    case 5: { dayName = 'Friday'; break; }
    case 6: { dayName = 'Saturday'; break; }
    default: { dayName = '[Unknown]'; break; }
}
console.log(`Day ${dayNum} is ${dayName}`);


// Activity 3: Task 5
const score = 70;
/* eslint-disable no-useless-assignment */
let grade = '';
/* eslint-enable no-useless-assignment */
switch(true) {
    case score >= 80:
        grade = 'A';
        break;
    case score >= 70:
        grade = 'B';
        break;
    case score >= 60:
        grade = 'C';
        break;
    case score >= 50:
        grade = 'D';
        break;
    default:
        grade = 'F';
        break;
}
console.log(`For the score of ${score}, the grade is ${grade}`);

// Activity 4: Task 6
n = 42;
const result = (n % 2) === 0 ? "Even" : "Odd";
console.log(`${n} is a ${result} number`);

// Activity 5: Task 7
const yr = 1700;
let isLeap = false;
if( yr % 4  === 0 ) {
    if ( yr % 100  === 0) {
        if ( yr % 400  === 0 ) {
            isLeap = true;
        }
    } else {
        isLeap = true;
    }
}
console.log(`Is the year ${yr} a leap year? ${isLeap ? 'Yes' : 'No'}`);
