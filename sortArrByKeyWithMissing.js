function sortByKeyWithMissing(arr, key) {
    return arr.sort(function(a, b) {
        // Проверяем наличие ключа в объектах
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);

        if(aHasKey && bHasKey) {
            // Оба объекта имеют ключ, сортируем по значению
            return a[key] - b[key];
        } else if (aHasKey) {
            // Только первый объект имеет ключ, он должен идти первым
            return -1;
        } else if (bHasKey) {
            // Только второй объект имеет ключ, он должен идти первым
            return 1;
        } else {
            // Оба объекта не имеют ключа, их порядок не важен
            return 0;
        }
    })
}

console.log(sortByKeyWithMissing(
    [
        { name: "Alice", age: 25 },
        { name: "Bob" },
        { name: "Charlie", age: 30 },
        { name: "David" },
        { name: "Eve", age: 22 }
    ], 'age'
));