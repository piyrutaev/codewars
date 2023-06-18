function asd(a, b) {
    return Math.abs(a.reduce((acc, el) => acc * el) - b.reduce((acc, el) => acc * el));

    // let res = [a.reduce((acc, el) => acc * el), b.reduce((acc, el) => acc * el)].sort((a, b) => b - a);
    // return res[0] - res[1];
}

function qwe() {
    console.log(asd([3, 2, 5], [1, 4, 4])); 
}

qwe();
