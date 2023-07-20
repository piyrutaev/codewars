function asd(birth, date) {
    if(date - birth == 1) return `You are ${date - birth} year old.`
    if(birth - date == 1) return `You will be born in ${birth - date} year.`
    if(date - birth > 0) return `You are ${date - birth} years old.`
    if(date - birth < 0) return `You will be born in ${birth - date} years.`
    else return 'You were born this very year!';
}

function qwe() {
    console.log(asd(2023, 2024)); 
}

qwe();
