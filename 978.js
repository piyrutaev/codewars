function asd(card) {
    let suits = {
        9824: 'spades',
        9827: 'clubs',
        9829: 'hearts',
        9830: 'diamonds',
    }
    return suits[card.charCodeAt(card.length-1)]

}

function qwe() {
    console.log(asd('Q♠')); 
}

qwe();
