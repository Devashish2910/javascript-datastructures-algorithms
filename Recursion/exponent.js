//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

exponentWithWhile = (base, expo) => {
    let result = 1;
    while(expo > 0) {
        result *= base;
        expo--;
    }
    return result;
}

//console.log(exponentWithWhile(2,5))

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

exponentWithRecursion = (base, expo) => {
    let result = 1;
    
    calculation = (expo) => {
        if(expo === 0) {
            return result;
        } else {
            result *= base;
            calculation(expo - 1);
        }
    }
    calculation(expo);
    return result;
}

//console.log(exponentWithRecursion(2, 3));