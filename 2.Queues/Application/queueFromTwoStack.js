/*
 Implement a Queue by using Two Stacks.
*/

class Stack {
    constructor(capacity = Infinity) {
        this._storage = {};
        this._capacity = capacity;
        this._index = 0;
    }
    
    push(val) {
        if(this._index < this._capacity) {
            this._storage[this._index] = val;
            this._index++;
            return this._index;
        }
        return 'Stack is full!!';
    }
    
    pop() {
        if(this._index === 0) {
            return 'Stack is empty!!'
        }
        
        const value = this._storage[--this._index];
        delete this._storage[this._index];
        if(this._index < 0) {
            this._index = 0;
        }
        return value;
    }
    
    peek() {
        const index = this._index - 1;
        return this._storage[index];
    }
    
    size() {
        return this._index;
    }
}

class QueueFromTwoStack {
    constructor() {
        this._stackIn = new Stack();
        this._stackOut = new Stack();
    }
    
    enqueue(val) {
        this._stackIn.push(val);
    }
    
    _transfer() {
        while(this._stackIn.size() > 0) {
            this._stackOut.push(this._stackIn.pop());
        }
    }
    
    dequeue() {
        if(this._stackOut.size() === 0) {
            this._transfer();
        }
        return this._stackOut.pop();
    }
    
    top() {
        if(this._stackOut.size() === 0) {
            this._transfer();
        }
        return this._stackOut.peek();
    }
    
    size() {
        return this._stackIn.size() + this._stackOut.size();
    }
}

class QueueFromOneStack {
    constructor() {
        this.data = []
    }

    enqueue(val) {
        this.data.push(val);
    }

    dequeue() {
        let removedEl, cur_val;
        if (this.data.length === 1) {
            removedEl = this.data.pop();
            return removedEl
        }
        cur_val = this.data.pop();
        removedEl = this.dequeue();
        this.data.push(cur_val);
        return removedEl
    }
}

//const myQueue = new QueueFromTwoStack();
const myQueue = new QueueFromOneStack()
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.data);
//myQueue.dequeue();
//
//console.log("Size:" + myQueue.size()); //1
//console.log("Top:" + myQueue.top()); //3
//











