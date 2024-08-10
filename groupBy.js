function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        let keyValue = obj[key];
        if(!acc[keyValue]) {
            acc[keyValue] = [];
        }
        acc[keyValue].push(obj);
        return acc;
    }, {})
}

const data = [
    {name: 'Bob', age: 'kj'},
    {name: 'Alice', age: 45},
    {name: 'Alice', age: 30},
    {name: 'Alice', age: 21},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 21},
    {name: 'David', age: 25},
    {name: 'Eve', age: 23},
    {name: 'Alice', age: 5},
];

function result() {
    console.log(groupBy(data, 'age'));
}

result();