/*
Implemetation of Priority Queue in ES6

Logic:
- Take an empty array
- create a class of queue element with value and priority
- To add an element..
  - Iterate a loop over the array and add the element at end of the elements which has the same priority.
  - If an elemet has high priority than exixsting elements then add the new element at beginning otherwise add it at last

Methods:
- enqueue(value):  to add an element
- dequeue(): to remove the first element
- peek(): return and element from the head
- peekPriority(): return priority of the element at top
- isEmpty(): check queue is empty or not
- size(): return size of a queue
- print(): print all elements of the queue
- clear(): to make queue empty

*/
class queueElement {
    constructor(value, priority) {
        this._value = value;
        this._priority = priority;
    }
}
class PriorityQueue {
    constructor(capacity = Infinity) {
        this._capacity = capacity;
        this._storage = [];
    }
    
    enqueue(val, prio) {
        const queueEle = new queueElement(val, prio);
        let added = false;
        if (this._storage.length > 0) {
            for (let i = 0; i < this._storage.length; i++) {
                if (queueEle._priority < this._storage[i]._priority) {
                    this._storage.splice(i, 0, queueEle);
                    added = true;
                    break;
                }
            }
        }
        else {
            this._storage.push(queueEle);
            added = true;
        }
        if (added === false) {
            this._storage.push(queueEle);
        }
    }
    
    dequeue() {
        const elementToBeDeleted = this._storage.shift();
        return elementToBeDeleted;
    }
    
    peek() {
        if(this._storage.length > 0) {
            return this._storage[0];
        }
        return -1;
    }
    
    peekPriority() {
        if(this._storage.length > 0) {
           return this._storage[0]._priority;
        }
        return -1; 
    }
    
    isEmpty() {
        if(this._storage.length === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    size() {
       return this._storage.length;
    }
    
    clear() {
        this._storage = [];
    }
    
    print() {
        this._storage.forEach(cur => {
            console.log(cur);
        })
    }
}

/*

const myPQ = new PriorityQueue();

myPQ.enqueue('deva', 1);
myPQ.enqueue('palak', 2);
myPQ.enqueue('gc', 1);
myPQ.print();

myPQ.dequeue();
myPQ.print();

*/


