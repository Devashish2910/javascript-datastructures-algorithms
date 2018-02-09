/*
- Implementation of Queue data structure in ES6
- FIFO:  First In, First Out
- Methods:
  - enqueue(value): to add a value at the end
  - dequeue(): to remove an element from start
  - peek(): return an element from start
  - size(): return size of an queue
  - contains(value): to check element in the queue
  - isEmpty(): to check queue is empty or not
  - print(): to print each element of the queue
  - clear(): to clear the queue
*/
class Queue {
    constructor(capacity = Infinity) {
        this.capacity = capacity;
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(val) {
        const sizeOfQueue = this.tail - this.head;
        if (sizeOfQueue < this.capacity) {
            this.storage[this.tail] = val;
            this.tail++;
            return this.storage;
        }
        return "QUEUE IS FULL";
    }
    dequeue() {
        const sizeOfQueue = this.tail - this.head;
        if (sizeOfQueue > 0) {
            const val = this.storage[this.head];
            delete this.storage[this.head];
            this.head++;
            return val;
        }
        return
    }
    isEmpty() {
        const sizeOfQueue = this.tail - this.head;
        if (sizeOfQueue > 0) {
            return false;
        }
        return true;
    }
    peek() {
        const sizeOfQueue = this.tail - this.head;
        if (sizeOfQueue > 0) {
            return this.storage[this.tail - 1];
        }
        return undefined;
    }
    front() {
        const sizeOfQueue = this.tail - this.head;
        if (sizeOfQueue > 0) {
            return this.storage[this.head];
        }
        return undefined;
    }
    size() {
        return this.tail - this.head;
    }
    contains(val) {
        let answer = false;
        for (let i = this.head; i < this.tail; i++) {
            if (this.storage[i] === val) {
                answer = true;
            }
        }
        return answer;
    }
    print() {
       if(this.head < this.tail) {
           for(let i = this.head; i < this.tail; i++) {
               console.log(this.storage[i]);
           }
       } else {
           return -1;
       }
    }
    
    clear() {
        this.storage = {};
        this.head = [];
        this.tail = [];
    }
}

/*

const myQueue = new Queue(5);

myQueue.enqueue('hey');
myQueue.enqueue('devashish');
myQueue.enqueue('patel');
myQueue.enqueue('361-228-7361');

myQueue.dequeue();

console.log("Size:" + myQueue.size());
console.log("Peek:" + myQueue.peek());
console.log("Contains: " + myQueue.contains('devashish'));
console.log("isEmpty:" + myQueue.isEmpty());

myQueue.print();

myQueue.clear();

myQueue.print();
*/