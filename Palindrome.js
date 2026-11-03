let num = 121;
let temp = num;
let reverse = 0;

while (num > 0) {
    let rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
}

if (temp === reverse) {
    console.log("Palindrome Number");
} else {
    console.log("Not a Palindrome Number");
}

// Each Word reverse
let str = "Hello World JavaScript";

let result = str.split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');

console.log(result);

//Without using reverse() method
let str1 = "Hello World JavaScript";

let words = str1.split(' ');
let result1 = [];

for (let word of words) {
    let rev = "";

    for (let i = word.length - 1; i >= 0; i--) {
        rev = rev + word[i];
    }

    result.push(rev);
}

console.log(result1.join(' '));