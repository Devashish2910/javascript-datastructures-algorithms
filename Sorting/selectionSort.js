/*
Selection Sort - Selects the smallest element in an array, pushes it into a new array.

Time Complexity - O(n^2)

Pseudocode:
-'A' is list of items and 'n' is the length of A
- 'ResA' is resulting list anf 'N' is the length of ResA

    while n > 0 {
     count = 0
     for i = o  to n-1 {
        if A[count] > A[i]
         count = 0
     }
     push A[count] in ResA
     remove A[count] from A
    }


*/

selectionSort = (...list) => {
    let resultList = [];
    
    while(list.length > 0) {
        let count = 0;
        for(let i = 0; i < list.length; i++) {
            if(list[count] > list[i]) {
                count = i;
            }
        }
        resultList.push(list[count]);
        list.splice(count, 1);
    }
    
    return resultList;
};

const answer = selectionSort(12, 40, 6, 2, 78);
console.log(answer);