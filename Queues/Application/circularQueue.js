/*
- Circular Queue Implementation
- Best example of a circular key is Hot Popato game.
  - In which first of all we have given an array of names and an integer to iterate a loop
  - Add those names in a queue
  - We have to iterate over the names queue for given integer time and remove a name from the loop at the end of iteration
  - At the end we will be left with a single name who is the winner...
*/

const names = ['Devashish', 'Palak', 'Kartik', 'Krutik', 'Urvish', 'Shail', 'Rutang', 'Niral'];

const hotPotato = function(names, iterator) {
    // add names into a queue
    const participants = new Queue();
    
    names.forEach((cur) => {
        participants.enqueue(cur);
    });
    
    // iterate over the queue 
    while(participants.size() > 1) {
        let eliminated;
        for ( let i = 0; i < iterator; i++) {
           participants.enqueue(participants.dequeue());
        }
        eliminated = participants.dequeue();
        console.log(`${eliminated} is eliminated from the Hot Potato Game.`)
        
    }
    
    return participants.dequeue();
}

/*

const winner = hotPotato(names, 3);
console.log(winner);
*/
