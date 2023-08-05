function asd(text, n, oldValue, newValue) {
  // let regex = new RegExp("((?:[^" +oldValue+ "]*" +oldValue+ "){" + (n-1) + "}[^" +oldValue+ "]*)" +oldValue, "g");
  // return text.replace(regex, `$1${newValue}`);

  if(n > 0) {
    let count = 0;
    let regexp = new RegExp(oldValue, 'g');
    return text.replace(regexp, match => {
      count++;
      return (count % n === 0) ? newValue : match;
    })
  }
  return text;
};



function qwe() {
    console.log(asd("Vader said: No, I am your father!", 1, 'a', 'o')); 
}

qwe();

