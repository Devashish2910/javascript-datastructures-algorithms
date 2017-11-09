// decimal number to binary convertor
/*
Steps:
1. Untill the division result is 0, divide the decimal number with base value 
2. Add the reminder result to Stack
3. Pop the reminder elements when you get the 0 untill stack is empty
*/

// Decimal to binary
const divideBy2 = (decimalNum) => {
    let reminder,
        resultString = "",
        decitobina = new Stack();
    
    while(decimalNum > 0) {
        reminder = Math.floor(decimalNum % 2);
        decitobina.push(reminder);
        decimalNum = Math.floor(decimalNum / 2);
    }
    
    while(decitobina.size() > 0) {
        resultString += decitobina.pop();
    }
    return resultString;
}

const binary = divideBy2(10);
console.log('Read Right to Left:');
console.log(binary);

// Decimal to any base

const divideBy2 = (decimalNum, base) => {
    let reminder,
        resultString = "",
        decitobina = new Stack();
    
    while(decimalNum > 0) {
        reminder = Math.floor(decimalNum % base);
        decitobina.push(reminder);
        decimalNum = Math.floor(decimalNum / base);
    }
    
    while(decitobina.size() > 0) {
        resultString += decitobina.pop();
    }
    return resultString;
}