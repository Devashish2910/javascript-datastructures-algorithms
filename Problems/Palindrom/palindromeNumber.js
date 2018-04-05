/*Implementation of Palindrome Number
* e.g - 121 => true
*       122 => false*/

const palindromeNumber = (num) => {
    if (num < 0) {
        return false;
    }

    let reversedNum = 0;
    const mainNum = num;

    while (num > 0) {
        const dig = num % 10;
        reversedNum = (reversedNum * 10) + dig;
        num = Math.floor(num/10);
    }

    return mainNum === reversedNum;
};

console.log(palindromeNumber(-10))
