// returns the nth number in the fibonacci sequence
const fibonacci = function(n) {
    if (n < 0) return "OOPS"; // negative numbers are not allowed
    if (n == 0) return 0; // 0th fibonacci number is 0
    if (n == 1) return 1; // 1st fibonacci number is 1
    let a = 0; // 0th fibonacci number
    let b = 1; // 1st fibonacci number
    let c = 1; // 2nd fibonacci number
    // loop through the fibonacci sequence
    for (let i = 2; i <= n; i++) {
        c = a + b; // calculate the next fibonacci number
        a = b; // update the first number
        b = c; // update the second number
    }
    return c;

};

// Do not edit below this line
module.exports = fibonacci;
