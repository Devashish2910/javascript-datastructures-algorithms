// Implementation of 2d arrays

_2dArray = (size) => {
    let resultArray = [];
    
    for(let i = 0; i < size; i++) {
        resultArray[i] = [];
        for(let j = 0; j < size; j++) {
            if((i + j) %2 == 0) {
                resultArray[i][j] = 0;
            } else {
                resultArray[i][j] = 1;
            }
        }
    }
    
    return resultArray;
}

const _3x3 = _2dArray(3);
//console.log(_3x3);