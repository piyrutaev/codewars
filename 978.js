function asd(message) {
    // let arr = message.map(el => parseInt(el, 2));
    // return arr.map(el => String.fromCharCode(el)).join('');

    return message.map(el => parseInt(el, 2)).map(el => String.fromCharCode(el)).join('');
}

function qwe() {
    console.log(asd(['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010'])); // ['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010']
}

qwe();
