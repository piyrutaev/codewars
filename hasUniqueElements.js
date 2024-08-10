function hasUniqueElements(arr) {

    // мое решение
    // let obj = {};

    // for(let i = 0; i < arr.length; i++) {
    //     if(!obj[arr[i]]) {
    //         obj[arr[i]] = 1;
    //     } else {
    //         obj[arr[i]] = obj[arr[i]] + 1;
    //         if(obj[arr[i]] === 2) return false;
    //     }
    // }
    // return true;

    // решение получше 
    const set = new Set(arr);
    return set.size === arr.length;
}

function result() {
    console.log(hasUniqueElements([7, 2, 3, 4]));
}

result();