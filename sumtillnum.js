function sumTillNum(n){
    if(n<1) return 0;
    return n + sumTillNum(n-1);
}
console.log(sumTillNum(4));