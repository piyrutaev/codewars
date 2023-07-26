function asd(s, n) {
  while(n) {
    // s = s.replace(/!/, '^');
    s = s.replace('!', '*');
    // s = s.replace('!', '');
    n--;
  }
  return s
};


function qwe() {
    console.log(asd('!!Hi!!!', 5)); 
}

qwe();
