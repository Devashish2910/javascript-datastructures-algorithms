/*Implementation of Array Chunk
e.g -
arrayChunk([1, 2, 3, 4], 2) => [[1, 2], [3, 4]]
arrayChunk([1, 2, 3, 4], 5) => [[1, 2, 3, 4]]
arrayChunk([1, 2, 3, 4, 5], 2) => [[1,2], [3, 4], [5]]*/

// Solution 1
const arrayChunk = (arr, n) => {
    let resArr = [], queue = [];

    for (let cur of arr) {
        queue.push(cur);
        if (queue.length === n) {
            resArr.push(queue);
            queue = []
        }
    }

    if (0 < queue.length && queue.length < n) {
        resArr.push(queue);
    }
    return resArr;
};

// Solution 2
const arrayChunk1 = (arr, n) => {
    let resArr = [], i = 0;

    while(i < arr.length) {
        resArr.push(arr.slice(i, i+n));
        i += n;
    }

    return resArr;
}

console.log(arrayChunk1([1, 2, 3, 4], 2));
console.log(arrayChunk1([1, 2, 3, 4], 5));
console.log(arrayChunk1([1, 2, 3, 4, 5], 2));