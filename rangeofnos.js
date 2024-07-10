// function rangeOfNumbers(startNum,endNum)
// {
//     if(startNum === endNum) return endNum;
//     console.log(startNum);
//     return rangeOfNumbers(startNum+1,endNum)
// }
// console.log(rangeOfNumbers(1,6));

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) return [];

    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum)

    return numbers;
}
console.log(rangeOfNumbers(1, 5));
