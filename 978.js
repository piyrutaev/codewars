function asd(arr) {
    // for(let i = 0; i < arr.length; i++) {
    //     if(!arr.includes(arr[i] * (-1))) {
    //         return (arr[i])
    //     }
    // }

    return arr.find(el => !arr.includes(-el));
}

function qwe() {
    console.log(asd([-110,110,-38,-38,-62,62,-38,-38,-38])); 
}
            

qwe();
