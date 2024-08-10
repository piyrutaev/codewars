function countVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = 0;
    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i].toLowerCase())) {
            result += 1;
        }
    }
    return result;
}

function result() {
    console.log(countVowels('JavaScript'));
}

// result();


function countVowels2(word) {
    return word.match(/[aeiou]/gi || []).length;
}

function result2() {
    console.log(countVowels2('AEIOU'));
}

result2();