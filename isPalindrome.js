function isPalindrome(str, start, end) {
    if (start === end) return true;
    if (str[start] !== str[end]) return false;

    return isPalindrome(str, start + 1, end - 1)
}
const str = 'malayalam';
const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
console.log(isPalindrome(str, 0, cleanedStr.length - 1));;