function asd(string) {
    return string.split(' ').map(el => {
        return el.replace(/[a, e, i, o, u]/gi, '')
    }).join(' ');

    // return string.replace(/[aeiou]/g, '')
}

function qwe() {
    console.log(asd('how are you today?')); //how are you today?
}

qwe();
