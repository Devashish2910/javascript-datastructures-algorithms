/*
* ES6 already has Set class so there is no need to implement it
* Sets: - Same as Array but stores only unique values, can iterate
* */

// Create a set
const mySet = new Set();

// add elements in set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);

// size of the set
const mySetSize = mySet.size;
console.log(mySetSize);

// check value in set - returns bool
const mySetHas1 = mySet.has(1);
const mySetHas2 = mySet.has("Devashish");
console.log(mySetHas1);

// entries, keys and values from Set
let keys, values, entries;
keys = mySet.keys();
values = mySet.values();
entries = mySet.entries();
console.log(entries);

// forEach loop over set
mySet.forEach((cur, i) => {
    console.log(`Pos[${i}] = Val[${cur}]`)
});

// delete element from set
mySet.delete(2);

// clear whole set
mySet.clear();