function asd(price) {
  return price === null ? -1 : +(price / 1.15).toFixed(2);
  return price === null ? -1 : +((price / 115) * 100).toFixed(2);
}

function qwe() {
    console.log(asd(123)); 
}

qwe();
