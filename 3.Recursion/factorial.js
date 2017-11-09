//7. Implement a recursive function which gives factorial of a given number.

factorial = (n) => {
    let result = 1;
    
    calculation = (a) => {
        if(a === 1) {
            return result;
        } else {
            result *= a;
            return calculation(a-1);
        }   
    }
    calculation(n);
    
    return result;
}


console.log(factorial(3));