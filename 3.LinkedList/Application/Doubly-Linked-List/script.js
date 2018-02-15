/*
 -> Implementation of Doubly Linked List with ES6
*/

class NodeForDLL { // Data structure for linked list
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList extends Node {
  constructor(data) {
    super();
    this.length = 0;
    this.head = null; 
    this.tail = null;
  }

  // To add a node at the end of the list
  append(el) {
    const node = new NodeForDLL(el);
    let current = this.head;
    if(this.length === 0) {
      this.head = node;
    } else {
      while(current.next) {
        current = current.next;
      }
      node.previous = current;
      current.next = node;
    }
    this.length++;
    this.tail = node;
  }

  // To add a node at a specific position
  insert(el, pos) {
    if(pos <= this.length && pos > 0) {
      let current = this.head,
          previous;
      const node = new NodeForDLL(el);
      if(pos === 1) {
        current.previous = node;
        node.next = current;
        this.head = node;
    } 
    else {
      let i = 1;
      while(i < pos) {
        previous = current;
        current = current.next;
        i++;
      }
      previous.next = node;
      node.previous = previous;
      current.previous = node;
      node.next = current;  
    }
      this.length++;
    } 
    else {
      return false;
    }
  }

  // To remove a node from the end of the list
  remove() {
    if(this.length > 0) {
      let current = this.head,
          previous = null;
      if(this.length > 1) {
        while(current.next) {
          previous = current;
          current = current.next;
        }
        previous.next = null;
      }
      this.tail = previous;
      this.length--;
      return current;
    }
    return null;
  }

  // To remove node from a specific position
  removeAt(pos) {
    if(pos > 0  && pos <= this.length) {
      let current = this.head,
          previous = null;
      if(pos === 1) {
        current.next.previous = null;
        this.head = current.next;
        this.length--;
        return current;
      } 
      else {
        let i, j = Math.ceil(this.length / 2);
        if(pos <= j) {
          i = 1;
          while(i <= pos) {
            previous = current;
            current = current.next;
            i++;
          }
          current.previous = previous.previous;
          previous.previous.next = previous.next;
          this.tail = current;
          this.length--;
          return previous;
        } 
        else {
          i = this.length;
          if(i === pos) {
            const val = this.remove();
            return val;
          }
          current = this.tail;
          while(i > pos) {
            previous = current;
            current = current.previous;
            i--;
          }
          previous.previous = current.previous;
          current.previous.next = current.next;
          this.length--;
          return current;
        }
      }
    }
    return null;
  }

  // To return an index of list element
  indexOf(el) {
    if(this.length > 0) {
      let current = this.head, i = 1, previous;
      while(current.next) {
        previous = current;
        if(previous.data === el) {
          return i;
        }
        current = current.next;
        i++;
      }
      return i;
    }
    return null;
  }

  // To check a list is empty or not
  isEmpty() {
    if (this.length > 0) {
      return false;
    }
    return true;
  }

  // To check size of the list
  size() {
    return this.length;
  }

  // To print the list
  print() {
    const length = this.length;
    if (length > 0) {
      let i = 1,
          current = this.head,
          previous;
      while (i <= length) {
        if (i === 1) {
          console.log(`${current.previous} <- ${i}: ${current.data} -> ${current.next.data}`);
          i++;
        }
        else {
          previous = current;
          current = current.next;
          if (i === length) {
            console.log(`${current.previous.data} <- ${i}: ${current.data} ->  ${current.next}`);
          }
          else {
            console.log(`${current.previous.data} <- ${i}: ${current.data} -> ${current.next.data}`)
          }
          i++;
        }
      }
      console.log(`Head: ${this.head.data}`);
      console.log(`Tail: ${this.tail.data}`);
    }
    else {
      console.log(null);
    }
    //console.log(this.head);
  }
}

let list  = new DoublyLinkedList();

list.append("Devashish");
list.append("Patel");

list.insert("G", 2);
list.insert(24, 4);

list.remove();
list.removeAt(4);

console.log(`Size: ${list.size()}`);
console.log(`IndexOf: ${list.indexOf("Patel")}`);
console.log(`Is Empty: ${list.isEmpty()}`);

list.print();

