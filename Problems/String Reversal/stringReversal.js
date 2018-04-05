/*
* Time Complexity = O(n)*/
// First Solution
const stringReversal1 = (str) => {
    myStack = [];
    resultString = "";

    for (let cur of str) {
        myStack.push(cur);
    }

    myStack.forEach(cur => {
        resultString = cur + resultString;
    });

    return resultString;
}

// Second Solution
const stringReversal2= (str) => {
    const tempArr = str.split('')
    tempArr.reverse()
    return tempArr.join('')
}

// Third Solution
const stringReversal3 = (str) => {
    return str.split('').reduce((prev, cur) => {
        return cur + prev;
    }, '');
}
console.log(stringReversal3("Devashish"))