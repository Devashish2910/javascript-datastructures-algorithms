const balcancedParenthesis = (str) => {
    
    console.log(`Pattern: ${str}`);
    
    let index = 0,
        balanced = true,
        tempStack = new Stack();
    
    const opening = '[{(',
          closing = ']})';
    
    while(index < str.length) {
        
        const el = str.charAt(index);
        
        if(opening.indexOf(el) >= 0) {
            
            balanced = false;
            tempStack.push(el);
            console.log(`Element pushed: ${el}`);
            
        } else if (closing.indexOf(el) >= 0) {
            if(tempStack.isEmpty()) {
                console.log(`Stack Empty`);
                balanced = false;
            } else {
                const top = tempStack.pop();
                
                if(opening.indexOf(el) === closing.indexOf(top)) {
                    console.log(`Popped: ${top} For Element: ${el} `);
                    balanced = true;
                } else {
                    balanced = false;
                }
            }
        }
        
        index++;
    }  
    
    if(balanced === true && tempStack.isEmpty()) {
        return true;
    } else {
        return false;
    }
}

console.log(balcancedParenthesis('([{{[({})]}}])'));
