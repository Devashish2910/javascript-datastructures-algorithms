//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

recursiveReverse = (arr) => {
    let resultArr = [],
        arrLength = arr.length;
    
    
    calculation =  (arrLength) => {
        if(arrLength === 0) {
            return resultArr;
        } else {
            resultArr.push(arr.pop());
            calculation(arrLength - 1);
        }
    }
    calculation(arrLength);
    return resultArr;
}

console.log(recursiveReverse([1, 2, 3, 4, 5]));