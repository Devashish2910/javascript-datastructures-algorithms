//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

recursiveMultiplier = (arr, num) => {
    const resultArr = [];
    let arrLength = arr.length;
    
    calculation = (arrLength) => {
        if(arrLength === 0) {
            return resultArr;
        } else {
            resultArr.push(num * arr.shift());
            calculation(arrLength - 1);
        }
    }
    calculation(arrLength);
    return resultArr;
}

//const arr = [1, 2, 3, 4, 5];
//console.log(recursiveMultiplier(arr, 2));