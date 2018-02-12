/*
Insertion Sort - Selects the first element in an array, pushes it into a new array. As each new element is added, insert the new element in the correct order.
Time Coplexity - O(n^2)

Pseudocode:
'A' is a list of elements and 'n' is the length of the list
'ResA' is a new resulting list, 'N' is the length of the list

- for i = 0 to n-1
-   if i === 0 then push element to ResA
-   else, while j < i
=       loop through all element in ResA
-           add new alement just before larger element than it self
*/

insertionSort = (...list) => {
    let resultList = [];
    
    for(let i = 0; i < list.length; i++) {
        if( i === 0) {
            resultList.push(list[i]);
        } else {
            let j = 0,
                added = false;
            while(j < i) {
                if(resultList[j] > list[i]) {
                    resultList.splice(j, 0, list[i]);
                    added = true;
                    j = i;
                } 
                ++j;
            }
            if(!added) {
                resultList.push(list[i]);
            }
            
        }
    }
    
    return resultList;
};

// const result = insertionSort(10, 1,12,4, 5, 12, 1);
// console.log(result);