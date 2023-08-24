function asd(arr) {
    let a = arr.reduce((acc, el) => el.length < acc ? el.length : acc, Infinity);
    return arr.map(el => el.substring(0, a));


    const minLength = Math.min(...arr.map(x => x.length));
     return arr.map(x => x.slice(0, minLength));
}

function qwe() {
    console.log(asd(["wert", "abc","deerv","ijklmn"])); 
}
            

qwe();
