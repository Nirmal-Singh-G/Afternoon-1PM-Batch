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
