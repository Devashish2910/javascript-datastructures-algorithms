/*
* Hashing consists of finding a value in a data structure in the shortest time possible.
* Here, we are converting keys to a specific number from its ASCII code
* So while retrieving data we can directly go to that position and fetch data.
* In array at any position we are using LinkedList to prevent collision within hash table
* And as a element of LinkedList, we are using a simple Map*/

// Import LinkedList
const LinkedList = require('./../../3.LinkedList/linkedlist');

// Private method for key hashing
const loseHashCode = (key) => {
    let hash = 0;

    if (typeof(key) === 'number') {
        key = key.toString();
    }

    for (let i in key) {
        hash += key.charCodeAt(i);
    }
    // To work with lower numbers, we must use the rest of the division (mod) of the hash number using an arbitrary number
    return hash % 37;
}

class HashMap {
    constructor() {
        this.table = [];    // storage for hashMap
        this._keys = [];    // storage for keys
    }

    // Insert element in the HashMap
    set(key, value) {
        const hashedKey = loseHashCode(key);  // Create a hashed key
        if(this.table[hashedKey] == undefined) {
            this.table[hashedKey] = new LinkedList();  // Create a LinkedList
        }
        const tempMap = new Map();  // Crate a Map as a LinkedList element
        tempMap.set(key,value);
        this.table[hashedKey].append(tempMap);  // Append Map in the LinkedList
        this._keys.push(key);

    }

    get(key) {
        const hashedKey = loseHashCode(key);
        if(this.table[hashedKey] != undefined) {
            let current = this.table[hashedKey].getHead();  // Assign Head of the LL to current
            while(current.next) {  // Loop until second last element
                if (current.data.has(key)) {  // Check current position has key
                    return current.data.get(key);  // If has then return
                }
                current = current.next;  // Else assign next element to current
            }
            if (current.data.has(key)) {  // If last element has key
                return current.data.get(key); // return last element
            }
        }
        return undefined;
    }

    has(key) {
        const hashedKey = loseHashCode(key);

        if (this.table[hashedKey] != undefined) {   // if position is not undefined
            let current = this.table[hashedKey].getHead();  // assign head
            if(current.next == null) {  // only has one element
                if(current.data.has(key)) {     // current has key
                    return true;
                }
                return false;
            } else {
                while(current.next) {   //loop until second last element
                    if (current.data.has(key)) {  //// current has key
                        return true;
                    }
                    current = current.next;
                }
                if(current.data.has(key)) {     // if last element has key
                    return true;
                }
                return false;
            }
        }
        return false;
    }

    size() {
        return this._keys.length;
    }

    keys() {
        return this._keys;
    }

    remove(key) {
        const hashedKey = loseHashCode(key);

        if (this.table[hashedKey] != undefined) {   // if hashedkey position isn't undefined
            let current = this.table[hashedKey].getHead();      // assign head
            if(current.next == null) {      // only has one element
                if(current.data.has(key)) {     // which has the key
                    current.data.delete(key);   // delete it
                    const index = this._keys.indexOf(key);  // find index of key from keys
                    this._keys.splice(index, 1);  // remove it
                    return true;
                }
                return false;
            } else {        // has more than one element
                while (current.next) {      // loop until second last
                    if (current.data.has(key)) {
                        current.data.delete(key);
                        const index = this._keys.indexOf(key);
                        this._keys.splice(index, 1)
                        return true;
                    }
                    current = current.next;
                }
                if (current.data.has(key)) {
                    current.data.delete(key);
                    const index = this._keys.indexOf(key);
                    this._keys.splice(index, 1)
                    return true;
                }
                return false;
            }
        }
        return false;
    }

    clear() {
        this._keys = [];
        this.table = [];
    }
}

/*
// How to use!!
let students = new HashMap();
students.set('Jamie', "Devashish");
students.set('Sue', "GC");

let has = students.has(1); // false
has = students.has('Sue'); // True

let get = students.get(1); // undefined
get = students.get('Sue'); //GC

let s = students.size(); // 2

let k = students.keys(); // ['Jamie', 'Sue']

let r = students.remove('Jamie');
get = students.get('Jamie');

console.log(get)
*/


