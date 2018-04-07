/*Implementation of Max Char String problem
* e.g - maxChar("aaabbbbcccccc") => "c*/
const maxChar = (str) => {
  const map = {}

  for (let char of str) {
      if (!map[char]) {
          map[char] = 1;
      } else {
          map[char] += 1
      }
  }

  let maxOcc = 1, maxOccChar = null;

  for (let key in map) {
      if (map[key] > maxOcc) {
          maxOcc = map[key];
          maxOccChar = key;
      }
  }

  return maxOccChar;
};

console.log(maxChar("aaabbbbcccccccc"));