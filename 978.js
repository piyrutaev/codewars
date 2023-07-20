function asd(s) {
    return /tree fiddy|3.50|three fifty/.test(s);
    return s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty');

}

function qwe() {
    console.log(asd("Your girlscout cookies are ready to ship. Your total comes to tree fiddy")); 
}

qwe();
