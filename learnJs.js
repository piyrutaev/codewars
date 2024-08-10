function asd(a, b) {
    if(b === 1) {
        return a;
    } else {
        return a * asd(a, b - 1);
    }
}



function qwe() {
    console.log(asd(2, 3));
}

qwe();