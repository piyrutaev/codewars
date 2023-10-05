function asd(arr) {
    // переводит элементы массива в свойства объекта
    let obj = arr.reduce((object, value) => {
        return {...object, [value]: 0}
    }, {})
    
    // присваивает свойствам объекта значения, которые равны сумме вхождений элемента в массив (сколько раз элемент встречается в массиве)
    arr.map(el => {
        return obj[el] += 1
    })

    // создает массив из значений свойств объекта
    let sd = Object.values(obj);

    // сортирует массив от меньшего к большему
    let sorted = sd.sort((a, b) => a - b);
    
    let result = [];
    
    // Object.keys(obj) создает массив из свойств объекта.
    // find последовательно берет каждый элемент из массива с ключами, находит его значение в объекте obj
    // и сранивает его со значением из отсортированного массива sorted, если значения совпадают, ключ добавляется в массив result     
    for(let i = 0; i < sorted.length; i++) {
        result.push(Object.keys(obj).find(key => obj[key] === sorted[i]))
    }

    let sdsd = []

    // .push([...Array(sorted[i])] - добавляет в массив sdsd новый массив, длинной, равной значению элемента из массива sorted
    // .fill(result[i]) - заполняет всю длину добавленного массива одним значением, взятым из массива result
    for(let i = 0; i < sorted.length; i++) {
        sdsd.push([...Array(sorted[i])].fill(result[i]))
    }
    return [].concat(...sdsd).map(el => +el);

    
    
}

function qwe() {
    console.log(asd([1,1,1,2,2,3])); 
    // console.log(asd(['aew', 'gf', 'as', 'gf', 'gf', 'aew'])); 
}
            

qwe();
