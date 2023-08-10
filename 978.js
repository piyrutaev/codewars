function asd(...n) {
    for(let i = 1; i < n.length; i++) {
        if(n[0] % n[i] != 0) return false;
    }
    return true;
}

function asd(n) {
    for(let i = 1; i < arguments.length; i++) {
        if(n[0] % arguments[i] != 0) return false;
    }
    return true;
}

function qwe() {
    console.log(asd(8,3,4,2,5)); 
}

qwe();
