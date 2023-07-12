function asd(month) {
  // version 1
  // switch(month) {
  //   case 4: return 30;
  //   case 6: return 30;
  //   case 9: return 30;
  //   case 11: return 30;
  //   case 2: return 28;
  //   default: return 31
  // }

  // version 2
  // switch(month) {
  //   case 2: return 28;
  //   case 4: 
  //   case 6: 
  //   case 9: 
  //   case 11: return 30;
  // }
  // return 31;

  // version 3
  let days;
  switch(month) {
    case 2: days = 28;
    break;
    case 4: 
    case 6: 
    case 9: 
    case 11: days = 30;
    break;
    default: days = 31;
  }
  return days;
}

function qwe() {
    console.log(asd(11)); // 
}

qwe();
