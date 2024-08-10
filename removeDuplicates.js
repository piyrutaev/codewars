function removeDuplicates(arr) {
    return Array.from(new Set(arr))
}

function result() {
    console.log(removeDuplicates([1, 2, 3, 4, 5]));
}

result();