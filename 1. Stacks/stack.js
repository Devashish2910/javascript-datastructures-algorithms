// Implementing Stack by using 'string' in ES6
// For separating each element I'm using '***' at the beginning of each element

class Stack {
    constructor(storage) {
        
        // an empty string as raw data structure
        this.storage = "";
    }
    
    // push - add an element at the end 
    push(val) {
        
        //concat new element with existing data structure
        this.storage = this.storage.concat('***', val.toString());
        return this.storage;
    }
    
    // pop - remove an element from the end
    pop() {
        
        // slice the last element from last index of  '***' and add it to the temporary variable 
        const removingElement = this.storage.slice(this.storage.lastIndexOf('***') + 3);
        
        // slice the main data structure till last index of '***'
        this.storage = this.storage.slice(0, this.storage.lastIndexOf('***'));
        
        // return the eleminated element
        return removingElement;
    }
    
    // size - size of a stack
    size() {
        
        // split the string into array and count the size
        const arrForSize = this.storage.split('***');
        
        // size-1 because need not to count intital empty string
        return arrForSize.length - 1;
    }
    
    // peek - for returning element from the top
    peek() {
        // slice the top element by using last index of  '***'
        const topElement = this.storage.slice(this.storage.lastIndexOf('***') + 3);
        return topElement;
    }
    
    // isEmpty - to check whether the stack is empty or not => true - empty, false - not empty
    isEmpty() {
        if(this.storage.length === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    // clear - to empty the stack
    clear() {
        this.storage = "";
        return this.storage;
    }
}

/*let myStack = new Stack();

// push
myStack.push('Red');
myStack.push('Pink');
myStack.push('Blue');

// pop
myStack.pop();

// size 
console.log(myStack.size());

// peek
console.log(myStack.peek());

// clear
myStack.clear();

// isEmpty
console.log(myStack.isEmpty());*/