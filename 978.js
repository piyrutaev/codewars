function asd(num) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][num - 1] || "Wrong, please enter a number between 1 and 7";
  
  
  return [, "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][num] || "Wrong, please enter a number between 1 and 7";
  
  
  let days = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday',
  }
  return days[ num ] || 'Wrong, please enter a number between 1 and 7';

  
  switch (num) {
    case 1: return 'Sunday';
    case 2: return 'Monday';
    case 3: return 'Tuesday';
    case 4: return 'Wednesday';
    case 5: return 'Thursday';
    case 6: return 'Friday';
    case 7: return 'Saturday';
    default: return 'Wrong, please enter a number between 1 and 7';
  }
}

function qwe() {
    console.log(asd(7)); 
}

qwe();
