function asd(str) {
    let a = str[0].split(':')
    let b = str[1].split(':')
    return [a[0] + ':' + b[1], b[0] + ':' + a[1]];
}

function qwe() {
    console.log(asd(['abc:123', 'cde:456'])); 
}
            

qwe();
