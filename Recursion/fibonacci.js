// Implement Fibonacci Series With Recursion

fibonacci = (n) => {
    let count = 2,
        resultArr = [0, 1];
    
    foo = (count) => {
        if(count === n) {
            return resultArr;
        } else {
            resultArr.push(resultArr[count - 2] + resultArr[count -1]);
            return foo(++count);
        }
    }
    foo(count);
    return resultArr;
}

//console.log(fibonacci(50));