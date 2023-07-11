function asd(n, m) {
    // version 1
    // let initN = n;
    // if(m <= n) return 'INVALID';
    // else {
    //     let arr = [n]
    //     while(n < m-initN) {
    //         arr.push(n += initN)
    //     }
    //     return arr.reduce((acc, el) => acc + el);
    // }

    // version 2
    if(n >= m) return 'INVALID';

    let result = 0;
    for(let i = n; i < m; i += n) {
        result += i;
    }
    return result;
}

function qwe() {
    console.log(asd(2, 9)); // 
}

qwe();
