function asd(name) {
    // return name.split('').map(el => el.repeat(2)).join('');
    return name.split('').map(el => el + el).join('');
     
}

function qwe() {
    console.log(asd('String')); 
}

qwe();
