// function findMultiples(n, curr) {
//     if (curr === 10) return n*curr;

//     console.log(n * curr);
//     return findMultiples(n, curr + 1);

// }
// console.log(findMultiples(2, 1));

function findMultiples(n, curr) {
    if (curr > 10) return [];

    const multiples = findMultiples(n, curr + 1);
    multiples.unshift(n * curr)
    return multiples

}
console.log(findMultiples(2, 1));

