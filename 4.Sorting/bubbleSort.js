/*
Time Coplexity: O(n^2)
Space Complexity: O(1)

Pseudocode:
A -> List of elements

loop 'i' from 0 to (length - 1) 
 loop 'j' from 0 to (length - 1 - i)
  if(A[j] > A[j+1])
    swap both
*/

bubbleSort = (...list) => {
    for(let i = 0; i < list.length; i++) { //O(n)
        for(let j = 0; j < list.length - 1 - i; j++) { //O(n)
            let temp;
            if(list[j] > list[j+1]) {
                temp = list[j];  
                list[j]  = list[j+1]; 
                list[j+1] = temp;
            }
        }
    }
    return list;
};

//const result = bubbleSort(111, 32, 45, 56, 1);
//console.log(result);

