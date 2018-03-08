/*
 -> Implementation of Linked List with ES6
*/

class Node { // Data structure for linked list
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(data) {
    this.length = 0;
    this.head = null; //Kind of starting point
  }

  // To add a node at the end of the list
  append(el) {
    const node = new Node(el);
    let current;
    if (this.head === null) {
      this.head = node;
    }
    else {
      current = this.head;
      while (current.next) { //means untill current.next === null
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  // To add a node at a specific position
  insert(el, pos) {
    const node = new Node(el);
    let current = this.head,
        previous, i = 1,
        length = this.length;
    if (pos > 0 && pos <= length) {
      if (pos === 1) {
        node.next = current;
        this.head = node;
      }
      else {
        while (i < pos) {
          previous = current;
          current = current.next;
          i++;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
    }
    return -1;
  }

  // To remove a node from the end of the list
  remove() {
    let current, previous, index = 1;
    if (this.length > 0) {
      current = this.head;
      if (this.length === 1) {
        this.head = null;
      }
      else {
        while (index < this.length) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = null;
      }
      this.length--;
      return current.data;
    }
    else {
        return null;
    }
  }

  // get elements from top
  get() {
      let current, previous, index = 1;
      if (this.length > 0) {
          current = this.head;
          if (this.length === 1) {
              return current.data;
          }
          else {
              while (index < this.length) {
                  previous = current;
                  current = current.next;
                  index++;
              }
          }
          return current.data;
      }
      else {
          return null;
      }
  }

  // get head of the list
    getHead() {
      return this.head;
    }

  // To remove node from a specific postion
  removeAt(pos) {
    let current, previous, index = 1;
    if (pos > 0 && pos <= this.length) {
      current = this.head;
      if (pos === 1) {
        this.head = current.next;
      }
      else {
        while (index < pos) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.data;
    }
    else {
      return null;
    }
  }

  // get element from a specific position
  getAt(pos) {
      let current, previous, index = 1;
      if (pos > 0 && pos <= this.length) {
          current = this.head;
          if (pos === 1) {
              return current.data;
          }
          else {
              while (index < pos) {
                  previous = current;
                  current = current.next;
                  index++;
              }
          }
          return current.data;
      }
      else {
          return null;
      }
  }

  // To return an index of list element
  indexOf(el) {
    const length = this.length;
    if (length > 0) {
      let i = 0,
          previous,
          current = this.head;
      while (i++ < length) {
        if (i === 1) {
          if (current.data === el || current.data.hasOwnProperty(el)) {
            return i;
          }
        }
        else {
          previous = current;
          current = current.next;
          if (current.data === el || current.data.hasOwnProperty(el)) {
            return i;
          }
        }
      }
      return -1;
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
    if (this.length > 0) {
      return this.length;
    }
    return null;
  }

  // To print the list
  print() {
    const length = this.length;
    if (length > 0) {
      let i = 1,
          current = this.head,
          previous, final = "";
      while (i <= length) {
        if (i === 1) {
          final += `${i}: ${current.data} ->`;
          i++;
        }
        else {
          previous = current;
          current = current.next;
          if (i === length) {
            final += ` ${i}: ${current.data} -> null`;
          }
          else {
            final += ` ${i}: ${current.data} ->`;
          }
          i++;
        }
      }
      console.log(final);
    }
    else {
      console.log(null);
    }
  }
}
 /*
const list = new LinkedList();
list.append({key1: 'value1'})
list.append({key2: 'value2'})
console.log(list)
*/

module.exports = LinkedList;
