function asd(number) {
    // version 1
    // let i = 1;
    // let a = ''
    // while(i <= 10) {
    //     a += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`
    //     i++
    // }
    // return a

    // version 2
    let table = '';
    for(let i = 1; i <= 10; i++) {
        table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`
    }
    return table;
    
}

function qwe() {
    console.log(asd(5)); 
}

qwe();
