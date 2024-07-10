// Reverse an Array.

function reverseArr(arr) {
    if (arr.length === 0) return [];
    const lastElement = arr.pop();
    const reversedArr = reverseArr(arr);
    reversedArr.unshift(lastElement);
    return reversedArr;
}
console.log(reverseArr([1, 2, 0, -1, 3, 4]));