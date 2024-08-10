function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while(low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];

    if(guess === item) return [guess, mid];
    if(guess > item) {
        high = mid - 1;
    } else {
        low = mid + 1;
    }
  }
  return -1
}


function showResultOfTheBinarySearch() {
    console.log(binarySearch([1, 3, 5, 7, 9, 10], 9))
}

showResultOfTheBinarySearch();


// алгоритм находит в массиве элементы, которые встречаются в массиве заданное кол-во раз. создает новый массив из таких элементов.
function asd(a) {
  let count = {};
  let dup = [];

  for(num of a) {
      count[num] = (count[num] || 0) + 1;
      if(count[num] === 2) {
          dup.push(num);
      }
  }
  return dup;
}


function qwe() {
  console.log(asd([1, 2, 3, 4, 3, 5, 1, 3, 6, 3]));
}

// алгоритм находит в массиве уникальные элементы и возвразает новый массив с ними
function asd(nums) {
  const counts = {};

  for (let num of nums) {
      counts[num] = (counts[num] || 0) + 1;
  }

  const result = [];

  for (let num in counts) {
      if (counts[num] === 1) {
          result.push(parseInt(num));
      }
  }

  return result;
}



function qwe() {
  console.log(asd([0, 1, 1, 1, 2, 2, 4, 2, 3, 3, 8, 3, 256]));
}


// алгоритм переворачивает строку
function asd(nums) {
  let reversed = '';

  for(let i = nums.length - 1; i >= 0; i--) {
      reversed = reversed + nums[i]
  }
  return reversed;
}

function qwe() {
  console.log(asd('world'));
}

// алгоритм находит уникальное число в массиве.
// Дан массив чисел, в котором все элементы повторяются дважды, кроме одного. Найдите и верните это уникальное число.
function asd(nums) {
  let unique = new Set();

  for(let num of nums) {
      if(unique.has(num)) {
          unique.delete(num)
      } else {
          unique.add(num)
      }
  } 
  return unique.values().next().value
}

function qwe() {
  console.log(asd( [4, 1, 2, 1, 2] ));
}



