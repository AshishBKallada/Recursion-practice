function stringReversal(str)
{
    if(str === '')return '';
    return stringReversal(str.substr(1)) +str.charAt(0);
}
console.log(stringReversal('hey there'));