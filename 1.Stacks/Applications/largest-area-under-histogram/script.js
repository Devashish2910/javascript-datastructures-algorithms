class Stack {
    constructor(capacity = Infinity) {
        this._capacity = capacity;
        this._storage = [];
        this._min = [];
        this._max = [];
    }
    push(el) {
        if (this._storage.length < this._capacity) {
            if (this._storage.length === 0) {
                this._min.push(el);
                this._max.push(el);
            }
            else if (this._storage.length > 0) {
                if (this._max[this._max.length - 1] < el) {
                    this._max.push(el);
                }
                else {
                    this._max.push(this._max[this._max.length - 1])
                }
                if (this._min[this._min.length - 1] > el) {
                    this._min.push(el);
                }
                else {
                    this._min.push(this._min[this._min.length - 1])
                }
            }
            this._storage.push(el);
            return this._storage;
        }
        return 'Stack is full. Delete some elements.'
    }
    pop() {
        if (this._storage.length > 0) {
            const top = this._storage[this._storage.length - 1];
            this._min.pop();
            this._max.pop();
            this._storage.pop();
            return top;
        }
        return 'Stack is empty.'
    }
    peek() {
        if (this._storage.length > 0) {
            const top = this._storage[this._storage.length - 1];
            return top;
        }
        return 'Stack is empty.'
    }
    isEmpty() {
        if (this._storage.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }
    min() {
        const min = this._min[this._min.length - 1];
        return min;
    }
    max() {
        const max = this._max[this._max.length - 1];
        return max;
    }
    show() {
        console.log(this._storage);
    }
    size() {
        return this._storage.length;
    }
}

function largestRectangle(h) {
    // Complete this function
    let indexStack = new Stack()
        , areaStack = new Stack();
    for (let i = 0; i <= h.length; i++) {
        if (i === 0) { // for the first element
            indexStack.push(i);
        }
        else if (i === h.length) {
            while (!indexStack.isEmpty()) {
                const prevTop = h[indexStack.peek()];
                indexStack.pop()
                const leftMostIndex = indexStack.peek();
                if (indexStack.isEmpty()) { // if stack is empty
                    area = prevTop * i;
                    areaStack.push(area);
                }
                else { // if isn't empty
                    area = prevTop * ((i - leftMostIndex) - 1);
                    areaStack.push(area);
                    //console.log(`Area of ${prevTop}: ${area}`);
                }
                //console.log(indexStack._storage);
                //console.log(areaStack._storage);
            }
        }
        else {
            const top = h[indexStack.peek()]; // gives top element of the stack
            const cur = h[i]; //gives current element
            //console.log(`${i}: ${top}`);
            //console.log(`${i}: ${cur}`);
            if (top <= cur) { // if current element is greater or equal than top then push the index
                indexStack.push(i);
                //console.log(indexStack._storage);
            }
            else { // if current element is smaller than top
                while (top > cur) { // while top element is grater than current
                    const prevTop = indexStack.peek(); // gives index of top
                    let area = 0;
                    indexStack.pop(); // pop the top element
                    const leftMostIndex = indexStack.peek();
                    if (indexStack.isEmpty()) { // if stack is empty
                        area = prevTop * i;
                        areaStack.push(area);
                    }
                    else { // if isn't empty
                        area = prevTop * (i - leftMostIndex - 1);
                        areaStack.push(area);
                    }
                    //console.log(indexStack._storage);
                    //console.log(areaStack._storage);
                }
            }
        }
    }
    console.log(areaStack.max());
}

largestRectangle([1, 2, 3, 4, 5]);

