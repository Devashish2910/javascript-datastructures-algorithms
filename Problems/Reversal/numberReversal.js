/*Implementation of Integer Reversal*/

// Method 1
const numReverse1 = (num) => {
    let isNegative = false, reversedNum = 0;

    if (num < 0) {
        isNegative = true;
        num = Math.abs(num);
    }

    while(num > 0) {
        reversedNum = (reversedNum * 10) + (num % 10)
        num = Math.floor(num/10)
    }

    if (isNegative) {
        return reversedNum - (2*reversedNum);
    }
    return reversedNum;
};

// Method 2
const numReverse2 = (num) => {
    let isNegative = false;

    if (num < 0) {
        isNegative = true;
    }

    num = Math.abs(num).toString().split('').reverse().join('');

    if (isNegative) {
        return parseInt("-"+num)
    }
    return parseInt(num)

};

console.log(numReverse2(-12));
console.log(numReverse1(12));
