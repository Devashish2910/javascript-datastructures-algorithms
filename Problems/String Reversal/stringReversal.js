/*
* Time Complexity = O(n)*/
const stringReversal = (str) => {
    myStack = [];
    resultString = "";

    for (let cur of str) {
        myStack.push(cur);
    }

    myStack.forEach(cur => {
        resultString = cur + resultString
    })

    return resultString


}

console.log(stringReversal("Devashish"))