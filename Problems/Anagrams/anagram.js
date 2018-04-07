/*Implementation of Anagrams
* anagrams('rail safety', 'fairy tales') => true
* anagrams('Hi there', 'Bye there') => false */
// Solution 1
anagrams = (str1, str2) => {
    let char_map = {};
    str1 = str1.trim().toLowerCase().replace(/[^\w]/g, "");
    str2 = str2.trim().toLowerCase().replace(/[^\w]/g, "");

    for (let char of str1) {
        if (!char_map[char]) {
            char_map[char] = 1;
        } else {
            char_map[char] += 1;
        }
    }

    for (let char of str2) {
        if (char_map[char]) {
            char_map[char] -= 1;
        } else {
            return false;
        }
    }

    for (let char in char_map) {
        if (char_map[char] > 0) {
            return false;
        }
    }
    return true;
};


console.log(anagrams('Rail safety!!!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));