/*Implementation of Palindrome String*/

// Method 1
const stringPalindrome1 = (str) => {
    str = str.toLowerCase()
    let i = 0, j = str.length - 1;
    let isPalindrome = false;

    while (i < j) {
        if (str[i] === str[j]) {
            isPalindrome = true;
            i++;
            j--;
        } else {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
};

// Method 2
const stringPalindrome2 = (str) => {
    let strStack = [];

    for (let cur of str) {
        strStack.push(cur);
    }

    let i = 0, isPalindrome = false;
    while (i <str.length) {
        if (str[i] === strStack.pop()) {
            isPalindrome = true;
            i++;
        } else {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
};

// method 3
const stringPalindrome3 = (str) => {
    return str.split('').every((cur, i) => {
        return cur === str[str.length-i-1]
    })
};


console.log(stringPalindrome3("DeD"));
console.log(stringPalindrome3("DeD3"));
console.log(stringPalindrome3("AoA"));
