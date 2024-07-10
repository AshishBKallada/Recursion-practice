// Sum of the elements of Array

function arrSum(arr) {
    if (arr.length < 1) return 0;
    return arr.shift() + arrSum(arr);
}
console.log(arrSum([1, 2, 3, 4, 5]));