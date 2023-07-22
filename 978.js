function asd(string) {
    let a = {
    'ą': 'a',
    'ć': 'c',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    'ó': 'o',
    'ś': 's',
    'ź': 'z',
    'ż': 'z'
    }

    return string.replace(/[ąćęłńóśźż]/g, el => a[el])
}

function qwe() {
    console.log(asd("Jędrzej Błądziński")); 
}

qwe();
