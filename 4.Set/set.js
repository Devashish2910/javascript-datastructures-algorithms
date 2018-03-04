/*
* ES6 already has Set class so there is no need to implement it
* Sets: - Same as Array but stores only unique values
* key and value both are same so no index
* Want to retrieve data from set convert it to array
* */

// Create a set
let mySet = new Set();

// add elements in set
mySet.add("Devashish");
mySet.add("Ghanshyambhai");
mySet.add("Patel");
mySet.add("Devashish");

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

// retrieve data from set
const setToArray = Array.from(mySet)
console.log(setToArray);

// convert set from array
mySet = new Set(mySet);
console.log(mySet);

// delete element from set
mySet.delete(2);

// clear whole set
mySet.clear();
