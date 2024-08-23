// Это вариант, предложенный ИИ.
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


// Это мой вариант, до которого я додумался сам, когда повторял решение этой задачи.
// Показал оба варианта ИИ, он утверждает, что мое решение предпочтительней, т.к. не содержит
// дополнительной проверки `Object.values(bracketsMap).includes(char)`.
function areBracketsBalanced2(str) {
    let stack = [];
    const bracketsMap = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for(let char of str) {
        if(bracketsMap[char]) {
            stack.push(char);
        } else if(stack.length === 0 || char !== bracketsMap[stack.pop()]) {
            return false;
        }
    }
    return stack.length === 0;
}

console.log(areBracketsBalanced2("((())"));
