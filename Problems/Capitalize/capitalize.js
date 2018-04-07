/*Make each first char of each word in the string capital*/
capitalize = (str1) => {
    const alpha = /^[A-Za-z]+$/;
    for (let i = 0; i < str1.length; i++) {
        if (i === 0 && str1[0].match(alpha)) {
            str1 = str1[0].toUpperCase() + str1.slice(i+1)
        } else {
            if (str1[i-1] === " ") {
                str1 = str1.slice(0, i) + str1[i].toUpperCase() + str1.slice(i+1)
            }
        }
    }

    return str1;
};

console.log((capitalize("?deva")));