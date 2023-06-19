function asd(numbers) {
    // return Array.from({length: numbers.pop() - numbers[0] + 1}, (_, i) => i + numbers[0]);

    let result = [numbers[0]];
    while(numbers[0] < numbers.at(-1)) {
        result.push(numbers[0] + 1)
        numbers[0]++
    }
    return result
}

function qwe() {
    console.log(asd([])); 
}

qwe();
