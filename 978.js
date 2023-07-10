function asd(n) {
  if(String(n).length == 1) return n;
  let a = String(n).split('');
  while(a[a.length-1] == 0) {
    a.pop()
  }
  return Number(a.join(''));

  //return Number(String(n).replace(/0+$/,''));
}

function qwe() {
    console.log(asd(0)); 
}

qwe();
