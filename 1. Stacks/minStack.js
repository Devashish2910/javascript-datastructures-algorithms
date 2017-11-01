/*
Implement a MinStack that has a min method which will return the minimum value in the stack in constant time.
*/

class minStack {
    constructor(capacity = Infinity) {
        this._capacity = capacity;
        this._strorage = {};
        this._minStack = new Stack();
        this._index = 1;
    }
    
    push(val) {
        if(this._index < this._capacity) {
            if(this._index === 1) {
                this._strorage[this._index] = val;
                this._minStack.push(val);
                this._index++;
                return this._strorage;
            } else {
                this._strorage[this._index] = val;
                if(this._strorage[this._index] > this._strorage[this._index - 1]) {
                    this._minStack.push(this._strorage[this._index - 1]);
                } else {
                    this._minStack.push(this._strorage[this._index]);
                }
                
                this._index++;
                return this._strorage;
            }
        } else {
            return 'Capacity out!!';
        }
    }
    
    pop() {
        if(this._index > 0) {
            delete this._strorage[this._index];
            this._minStack.pop();
            if(this._index > 1) {
                this._index--;
            }
            return this._strorage  
        } else {
            return 'Stack Empty';
        }
    }
    
    min() {
        return this._minStack.peek();
    }
}

/*
const deva = new minStack();
deva.push(2);
deva.push(3);
deva.push(1);
deva.pop();
console.log(deva.min());
*/