function asd(s) {
    // return s.toLowerCase().includes('english');
    return /english/i.test(s);
}

function qwe() {
    console.log(asd("english")); 
}

qwe();
