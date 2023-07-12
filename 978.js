function asd(str, n) {
  // version 1
  // let result = '';
  // let count = 1;
  // while(count <= n) {
  //   if (count == 1) {
  //     result = str;
  //   }
  //   if (count % 2 == 0) {
  //     result = result + '*';
  //   }
  //   if (count % 2 != 0) {
  //     result = '*' + result;
  //   }
  //   count++;
  // }
  // return result;

  // version 2
  while(n > 0) {
    str = n % 2 == 0 ? str + '*' : '*' + str;
    n--;
  }
  return str;
}

function qwe() {
    console.log(asd("a", 5)); // 
}

qwe();
