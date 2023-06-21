function asd(operation, value1, value2) {
  let result;
  // switch(operation) {
  //   case '+' :
  //     result = value1 + value2;
  //     break;
  //   case '-' :
  //     result = value1 - value2;
  //     break;  
  //   case '*' :
  //     result = value1 * value2;
  //     break;
  //   case '/' :
  //     result = value1 / value2;
  //     break;  
  //   default : return 'Invalid operator'
  // }  
  // return result;

  // switch(operation) {
  //   case '+' : return value1 + value2;
  //   case '-' : return value1 - value2;
  //   case '*' : return value1 * value2;
  //   case '/' : return value1 / value2;
  //   default : return 'Invalid operator'
  // }

  let cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2,
  }
  return cases[operation]
}

function qwe() {
    console.log(asd('/', 4, 7)); 
}

qwe();
