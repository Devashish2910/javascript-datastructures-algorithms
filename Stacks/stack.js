// Implementing Stack Data Structure by using Primitive data type 'string' ( no arrays used)
// For separating each element I'm using '***' at the beginning of each element

class Stack {
    constructor(storage) {
        
        // an empty string as raw data structure
        this.storage = "";
    }
    
    // add an element at the end 
    push(val) {
        
        //concat new element with existing data structure
        this.storage = this.storage.concat('***', val);
        return this.storage;
    }
    
    // remove an element from the end
    pop() {
        
        // slice the last element from last index of  '***' and add it to the temporary variable 
        const removingElement = this.storage.slice(this.storage.lastIndexOf('***') + 3);
        
        // slice the main data structure till last index of '***'
        this.storage = this.storage.slice(0, this.storage.lastIndexOf('***'));
        
        // return the eleminated element
        return removingElement;
    }
    
    // size of a stack
    size() {
        
        // split the string into array and count the size
        const arrForSize = this.storage.split('***');
        
        // size-1 because need not to count intital empty string
        return arrForSize.length - 1;
    }
}

let myStack = new Stack();

// push an element
myStack.push('Red');
myStack.push('Pink');
myStack.push('Blue');

//console.log(myStack);

// remove an element
myStack.pop();

//console.log(myStack);

// size of a stack
const size = myStack.size();

//console.log(size);