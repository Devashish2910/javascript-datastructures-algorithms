//1. Write a function that loops through the numbers n down to 0. With while loop.

foo = (n) => {
    while(n >= 0) {
        console.log(n);
        n--;
    }
}

//foo(10);

//2. Next, try looping just like above except using recursion

bar = (n) => {
    if(n === 0) {
        console.log(0);
    } else {
        console.log(n);
        return bar(n-1);
    }
}

//bar(10);