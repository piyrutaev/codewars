function asd(one, two, three) {
    let result = '';
    for(let i = 0; i < one.length; i++) {
        result += one[i] + two[i] + three[i];
    }
    return result

    let res = []
    for(let i = 1; i <= one.length; i++) {
        res.push(one.slice(i-1, i))
        res.push(two.slice(i-1, i))
        res.push(three.slice(i-1, i))
    }
    return res.join('')
}

function qwe() {
    console.log(asd("Sea","urn","pms")); 
}

qwe();
