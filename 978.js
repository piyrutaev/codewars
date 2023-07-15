function asd(array) {
    return array ? array.sort((a, b) => a - b).slice(1, -1).reduce((acc, el) => acc + el, 0) : 0;
     
}

function qwe() {
    console.log(asd(null)); 
}

qwe();
