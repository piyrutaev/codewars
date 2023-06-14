function asd(a, b) {
    return a && b ? false :
    a || b ? true :
    false;

    // return a != b;
}

function qwe() {
    console.log(asd(false, false)); 
}

qwe();
