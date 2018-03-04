/*
* Map is key-value pair data-structure
* which stores unique keys
* Map is also known as dictionaries
* Map is already introduced in ES6 so it doesn't need special implementation
* key could be anything primitive types, objects any thing...
* Maps are iterable*/

// Crate a map
let students = new Map();

// Insert values
students.set("K00401439", "dgpatel@gmail.com");
students.set(401439, "dgpatel2910@gmail.com");

// Get values
const res = students.get("K00401439");
//console.log(res);

// Properties
const size = students.size;
//console.log(`Size: ${size}`);

// Methods:
 // Check a key in Map, returns boolean
 const has = students.has(401439);

 // keys, values, entries
 const keys = students.keys();
 const values = students.values();
 const entries = students.entries();
 // console.log(entries);

 // iterate over Map
 students.forEach((cur, i) => {
    //console.log(`Key: ${i}`);
    //console.log(`Value: ${cur}`);
 });

 // Delete a key from Map
 students.delete("K00401439");

 // Clear whole Map
 students.clear()

// Array to Map and Map to Array
let kvArray = [['key1', 'value1'], ['key2', 'value2']];

 let myMap = new Map(kvArray);
 myMap.set("name", "Devashish");
 console.log(myMap);

 kvArray  = Array.from(myMap);
 console.log(kvArray)