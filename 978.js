function asd(name, price = 30) {
  // version 1
  // let result = 0;
  // let pricePerCharacter = price;
  // for(let i = 0; i < name.length; i++) {
  //   result += pricePerCharacter;
  // }
  // return result

  // version 2
//   let result = 0;
//   for (let i = 0; i < name.length; i++) {
//     result += price;
//   }
//   return result;


// version 3
// return name.split('').reduce(acc => acc + price, 0);

// version 4
return name.repeat(price).length;
}

function qwe() {
    console.log(asd("Jeong-Ho Aristotelis"));
}

qwe();
