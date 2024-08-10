function bubbleSort(arr) {
    let n = arr.length;
    do {
        let newN = 0;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Обмен элементов
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                // Запоминаем последнюю позицию обмена
                newN = i + 1;
            }
        }
        // Сужаем диапазон для следующей итерации до последнего обмена
        n = newN;
    } while (n > 1);
    return arr;
}

// Пример использования
let array = [64, 34, 25, 12, 22, 11, 90]; //[34, 25, 12, 22, 11, 64, 90] //[25, 12, 22, 11, 34, 64, 90] [12, 22, 11, 25, 34, 64, 90]
console.log("Исходный массив: " + array); // [12, 11, 22, 25, 34, 64, 90] [11, 12, 22, 25, 34, 64, 90] [11, 12, 22, 25, 34, 64, 90]
let sortedArray = bubbleSort(array);
console.log("Отсортированный массив: " + sortedArray);
