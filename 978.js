function asd(lastPlayer, win) {
      let oppositePlayer = {
        'white': 'black',
        'black': 'white',
      }
      return win ? lastPlayer : oppositePlayer[lastPlayer];
};



function qwe() {
    console.log(asd("black", true)); 
}

qwe();
