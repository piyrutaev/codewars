function asd(code) {
  const a = {
    'H': 'Hello World!',
    'Q': 'Q',
    '9': '99 bottles of beer on the wall',
    'X': undefined
  }
  return code in a ? a[code] : 'no';
  // return a[code]
};


function qwe() {
    console.log(asd('D')); 
}

qwe();
