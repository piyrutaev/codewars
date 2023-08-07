function asd(items, a, b) {
    // let one = items.slice(0, a)
    // let two = items.slice(b)
    return items.slice(0, a).concat(items.slice(b))
}

function qwe() {
    console.log(asd([12, 14, 63, 72, 55, 24], 2, 4)); 
}

qwe();
