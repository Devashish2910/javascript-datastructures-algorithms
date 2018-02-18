class NodeForCLL {
  constructor(el) {
    this.data = el;
    this.previous = null;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  append(el) {
    const node = new NodeForCLL(el);
    let current = this.head, previous;
    if(this.length === 0) {
      this.head = node;
    } else {
      let i = 1;
      while(i < this.length) {
        current = current.next;
        i++;
      }
      node.previous = current;
      node.next = this.head;
      current.next = node;
    }
    this.length++;
    this.tail = node;
    this.head.previous = node;
  }
  
  insertAt(el, pos) {
    const node = new NodeForCLL(el);
    let current = this.head, previous;
    if(pos > 0 && pos <= this.length) {
      if(pos === 1) {
        current.previous = node;
        this.tail.next = node;
        node.next = current;
        node.previous = this.tail;
        this.head = node;
      } 
      else {
        let i = 1;
        while(i < pos) {
          previous = current;
          current = previous.next;
          i++;
        }
        previous.next = node;
        node.previous = previous;
        current.previous = node;
        node.next = current;
      }
      this.length++;
    }
  }
  
  remove() {
    if(this.length > 0) {
      let current = this.head,
          previous;
          
      if(this.length === 1) {
        this.head = null;
        this.tail = null;
      }
      else {
        let i = 1;
        while(i < this.length) {
          previous = current;
          current = current.next;
          i++;
        }
        previous.next = current.next;
        this.tail = previous;
        this.head.previous = this.tail;
      }
      this.length--;
      return current;
    }
    return null;
  }
  
  removeFrom(pos) {
    if(pos > 0 && pos <= this.length) {
      let current = this.head,
          previous,
          i = 1;
      if(pos === 1) {
        current.next.previous = current.previous;
        this.head = current.next;
        this.tail.next = this.head;
      }
      else {
        if(pos === this.length) {
          current = this.remove();
        }
        else {
          while(pos > i) {
            previous = current;
            current = current.next;
            i++;
          }
          current.next.previous = previous;
          previous.next = current.next;
        } 
      }
      this.length--;
      return current;
    }
    return null;
  }
  
  size() {
    return this.length;
  }
  
  isEmpty() {
    return this.length > 0 ? false : true;
  }
  
  print() {
    console.log(this.head);
  }
}

let myCLL = new CircularLinkedList();
myCLL.append(1);
myCLL.append(2);
myCLL.append(4);
myCLL.insertAt(3, 3);
myCLL.removeFrom(1);
myCLL.removeFrom(2);
myCLL.remove();
myCLL.append(3)
myCLL.insertAt(2.5, 2);

console.log(myCLL.isEmpty());
console.log(myCLL.size());


myCLL.print();