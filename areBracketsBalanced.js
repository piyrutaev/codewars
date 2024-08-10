function areBracketsBalanced(str) {
    let stack = [];
    let bracketsMap = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    for(let char of str) {
        if(bracketsMap[char]) {
            stack.push(char)
        } else if(Object.values(bracketsMap).includes(char)) {
            if(stack.length === 0 || char !== bracketsMap[stack.pop()]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(areBracketsBalanced("()(){}[]"));
