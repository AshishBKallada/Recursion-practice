// Print the numbers until given variable N in the console

function printNums(n, start) {
    if (start === n) return n;
    console.log(start);
    return printNums(n, start + 1);
}
console.log(printNums(10, 1));