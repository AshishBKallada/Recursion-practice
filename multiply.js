function findArrProduct(arr) {
    if (arr.length === 0) return 1;
    return arr.shift() * findArrProduct(arr);
}
console.log(findArrProduct([1, 2, 3, 4]));