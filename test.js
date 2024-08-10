function asd(intervals) {
    if(!intervals.length) return [];

    // Сначала сортируем интервалы по времени начала
    intervals.sort((a, b) => a.start - b.start);

    // Массив для хранения объединенных интервалов
    const mergedIntervals = [intervals[0]];

    // for(let i = 1; i < intervals.length; i++) {
    //     const lastMergedInterval = 


    // }
    console.log(mergedIntervals[mergedIntervals.length - 1])
}




function qwe() {
    console.log(asd( [
        { start: 1, end: 3 },
        { start: 2, end: 4 },
        { start: 5, end: 8 },
        { start: 6, end: 10 },
        { start: 11, end: 12 }
      ]
    ));
}

/**
 * [
  { start: 1, end: 4 },
  { start: 5, end: 10 },
  { start: 11, end: 12 }
]

 */
// "h"
// "e"
// "l"
// "l"
// "o"
// "he"
// "el"
// "ll"
// "lo"
// "hel"
// "ell"
// "llo"
// "hell"
// "ello"
// "hello"
         
qwe();



/* 1.
дано: 2 параметра: строка и массив (word, wordList) - "tca", ["cat", "act", "dog", "god", "tac"];
задача: оставить в массиве только слова, которые состоят из тех же букв, что и строка.
https://www.codewars.com/kata/562dbaf65d4ab6685c0000ed/javascript
*/

/* 2.
дано: массив чисел и число (numbers, target) - [1, 2, 3], 4;
задача: вернуть массив с индексами элементов массива, сумма которых равна числу target.
примечание: в массиве всегда 2 или больше числа. target всегда будет суммой двух чисел из массива.
https://www.codewars.com/kata/52c31f8e6605bcc646000082/javascript
*/ 

/* 3. 
дано: массив с числами (array) - [-69, -808, 828, 57];
задача: вернуть минимальную абсолютную разницу (MAD) между любыми двумя элементами массива. 
Вычислить между какими двумя числами из массива абсолютая разность будет минимальной и вернуть ее значение (вернуться должно число 126). 
(Абсолютная разность двух действительных чисел x и y определяется как |x-y|,абсолютное значение их разности. 
Он описывает расстояние на реальной линии между точками, соответствующими x и y.).
https://www.codewars.com/kata/593a061b942a27ac940000a7/train/javascript 
*/

/* 4.
дано: 2 параметра: массив чисел и массив, состоящий из функций (numbers, rules). каждая функция - это
операция, которую нужно выполнить с числами из массива. функции надо применять последовательно, т.е. не 
каждую функцию ко всем числам массива, а к числу, которое идет по очереди и переходим к другой функции и другому числу,
так, пока не закончатся числа в массиве.

пример:
// numbers: [ 2.0, 2.0, 3.0, 4.0 ]
// rules: [ (a,b) => a + b, (a,b) => a - b ]
// result: 5.0

// You get a list of four numbers.
// There are two rules. First rule says: Sum the two numbers a and b. Second rule says: Subtract b from a.

// The steps in progressing:
// 1. Rule 1: First number + second number -> 2.0 + 2.0 = 4.0
// 2. Rule 2: result from step before - third number -> 4.0 - 3.0 = 1.0
// 3. Rule 1: result from step before + forth number -> 1.0 + 4.0 = 5.0

задача: вернуть число, полученное в результате обработки массива чисел функциями из параметра rules.
https://www.codewars.com/kata/585ba6dff59b3cef3f000132/train/javascript
*/

/* 5.
решено 09.02.24.
дано: массив чисел;
задача: вернуть сумму только неповторяющихся числе; пример - массив [5, 9, 2, 6, 6, 9, 7], нужно вернуть результат сложения 5, 2 и 7.
https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript
*/ 


/*
6.
https://www.codewars.com/kata/542ea700734f7daff80007fc/solutions
*/

