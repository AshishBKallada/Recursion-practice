// Create a copy of an Array.
function arrCopy(arr) {
    if (arr.length === 0) return [];
    const firstElement = arr[0];
    const restArray = arrCopy(arr.slice(1));
    return [firstElement, ...restArray];
}
console.log(arrCopy([1,2,3,4]));