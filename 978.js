function asd(...arr /*a, b, c*/ ) {
    // return [a, b, c].filter(el => el > 0).length === 2;
    // return [...arguments].filter(el => el > 0).length === 2;
    return arr.filter(el => el > 0).length === 2;
     
}

function qwe() {
    console.log(asd(2, -4, -3)); 
}
            

qwe();
