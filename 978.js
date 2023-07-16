function asd(string) {
    let symbols = {
        5: 'S',
        0: 'O',
        1: 'I',
    }
     return string.replace(/[5,0,1]/g, (key) => symbols[key]);
}

function qwe() {
    console.log(asd('DUBL1N')); 
}

qwe();
