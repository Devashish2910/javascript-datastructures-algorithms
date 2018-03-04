/*
* Hashing consists of finding a value in a data structure in the shortest time possible.
* Here, we are converting keys to a specific number from its ASCII code
* So while retrieving data we can directly go to that position and fetch data. */

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
        this.table = [];
        this._keys = [];
    }

    set(key, value) {
        const hashedKey = loseHashCode(key);
        this.table[hashedKey] = value;
        this._keys.push(key);
    }

    get(key) {
        const hashedKey = loseHashCode(key);
        return this.table[hashedKey];
    }

    has(key) {
        const hashedKey = loseHashCode(key);
        if (this.table[hashedKey] !== undefined) {
            return true;
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
        if (this.has(key)) {
            this.table[hashedKey] = undefined;
            const index = this._keys.indexOf(key);
            this._keys.splice(index, 1)
            return true;
        }
        return false;
    }

    clear() {
        this._keys = [];
        this.table = [];
    }
}

// How to use!!
let students = new HashMap();
students.set(1, "Devashish");
students.set(2, "Ghanshyambhai");
students.get(1); // "Devashish"
students.keys(); //[1, 2]
students.has(1); // true
students.remove(1); //true
students.clear();


