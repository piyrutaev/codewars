function asd(s) {
    let str = s.trim();
    let res = '';

    for(let i = 0; i <= 5; i++) {
        res = res + str.repeat(i) + '\n';
    }
    return res.trim();
}

function qwe() {
    console.log(asd("  a")); 
}
            

qwe();
