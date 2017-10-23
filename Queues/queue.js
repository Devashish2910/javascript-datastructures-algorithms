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
        this._capacity = capacity;
        this._storage = {};
        this._head = 0;
        this._tail = 0;
    }
    enqueue(value) {
        const sizeOfQueue = this._tail - this._head;
        if (sizeOfQueue < this._capacity) {
            this._storage[this._tail] = value;
            this._tail++;
            return this._storage;
        }
        return `Max Capacity has reached. Delete some lements first.`;
    }
    dequeue() {
        const sizeOfQueue = this._tail - this._head;
        if (sizeOfQueue < 1) {
            return `No elements to be deleted`;
        }
        const elementToBeDeleted = this._storage[this._head];
        delete this._storage[this._head];
        if (this._head < this._tail) {
            this._head++;
        }
        return elementToBeDeleted;
    }
    peek() {
        return this._storage[this._head];
    }
    size() {
        return this._tail - this._head;
    }
    contains(value) {
        for (let i = this._head; i < this._tail; i++) {
            if (this._storage[i] === value) {
                return true;
            }
            return false;
        }
    }
    isEmpty() {
        const sizeOfQueue = this._tail - this._head;
        if (sizeOfQueue < 1) {
            return true;
        }
        return false;
    }
    print() {
        if (this._tail > this._head) {
            for (let i = this._head; i < this._tail; i++) {
                console.log(this._storage[i]);
            }
        }
        return -1;
    }
    clear() {
        this._storage = {};
        this._head = 0;
        this._tail = 0;
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