function asd(arr, x, y) {
    if(x > 1 && y > 1 && x <= arr.length && y <= arr.length) {
        let one = arr.slice(0, x).reduce((acc, el) => acc + el) / x;
        let two = arr.slice(-y).reduce((acc, el) => acc + el) / y;
        return (one + two) / 2;
    }
    return -1;
    
    
}

function qwe() {
    console.log(asd([1,3,2,4],2,8)); 
}

qwe();
