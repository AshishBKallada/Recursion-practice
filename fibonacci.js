function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function getFibonacciSequence(n) {
    let sequence = [];
    for (let i = 0; i <= n; i++) {
        sequence.push(fibonacci(i));
    }
    return sequence;
}

let n = 4;
let sequence = getFibonacciSequence(n);
console.log(sequence.join(", ")); 
