function asd(string) {
    // while(string.endsWith('!')) {
    //     string = string.slice(0, -1);
    // } 
    // return string;

    return string.replace(/!+$/, ''); // удаляет все ! в конце строки.

    // return string.replace(/^!+|!+$/g, ''); // удаляет все ! в начале и в конце строки.
}

function qwe() {
    console.log(asd("!!!Hi!!")); 
}

qwe();
