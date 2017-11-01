/*
8. Implement a function that will reverse a string recursively.
reverse('abcdefg')
=> 'gfedcba'
*/

reverse = (str) => {
    let resultStr = '';
    const stringLength = str.length;
    
    calc = (stringLength) => {
        if(stringLength === 0) {
            return resultStr;
        } else {
            resultStr += str.charAt(stringLength - 1);
            calc(stringLength - 1);
        }
    }
    calc(stringLength);
    return resultStr;
};

const result = reverse('abcde');

console.log(result);