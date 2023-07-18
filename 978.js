function asd(card) {
    // return card == '' ? '' : 'sex '.repeat(card.split(' ').length).slice(0, -1)
    return card.replace(/[^ ]+/g, 'sex')

}

function qwe() {
    console.log(asd('This is a sample sentence.')); 
}

qwe();
