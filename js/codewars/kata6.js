console.log(`\n 138 uzdv...............`);

// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
function isPalindrome(x) {
    const str = x.toLowerCase();
    const forward = str;
    const backward = str.split('').reverse().join('');
    return forward === backward;
}
// kitas budas
/*const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}*/
console.log(isPalindrome("a"), true);
console.log(isPalindrome("aba"), true);
console.log(isPalindrome("Abba"), true);
console.log(isPalindrome("hello"), false);
console.log(isPalindrome("Bob"), true);
console.log(isPalindrome("Madam"), true);
console.log(isPalindrome("AbBa"), true);
console.log(isPalindrome(""), true);
console.log(`\n 139 uzdv...........`);

// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
function fakeBin(x) {
    return x.replace(/[1-4]/g, 0).replace(/[5-9]/g, 1);
}
// kitas budas
/* function fakeBin(x){
  let result = '';
  for(let i = 0; i < x.length; i++){
    x[i] < 5 ? result += 0 : result += 1;
  }
  return result;
}*/
/* function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}*/
console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101');
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
console.log(`\n 140 uzdv............`);

// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
function reverseLetter(str) {
    return str.replace(/[^a-z]/g, '').split('').reverse().join('');
}
// kitas budas
// const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');

console.log(reverseLetter("krishconsole"));
console.log(reverseLetter("ultr53?onsole"));
console.log(reverseLetter('ab23c'));
console.log(reverseLetter("krish21an"));
console.log(`\n 141 uzdv...........`);

// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
function validatePIN(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }
    for (let i = 0; i < pin.length; i++) {
        if (pin[i] < '0' || pin[i] > '9') {
            return false
        }
    }
    return true;
}
// kitas budas
/* for my future referencing,

  ^ = start of a line, 
  \d = [0-9], {4} specifies 4 digits, 
  {6} specifies 6 digits, $ - end of a line
  
  first alternative ^\d{4}$ - equivalent to [0-9], matches exactly 4 digits.
  second alternative ^\d{6}$ - "", matches previous token exactly 6 digits.
  
   use RegEx .test to search for these characters stored.
   
*/
//const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin);

console.log(validatePIN("1"), false);
console.log(validatePIN("12"), false);
console.log(validatePIN("123"), false);
console.log(validatePIN("12345"), false);
console.log(validatePIN("1234567"), false);
console.log(validatePIN("-1234"), false);
console.log(validatePIN("1.234"), false);
console.log(validatePIN("-1.234"), false);
console.log(validatePIN("00000000"), false);
console.log(validatePIN("a234"), false);
console.log(validatePIN(".234"), false);
console.log(validatePIN("1234"), true);
console.log(validatePIN("0000"), true);
console.log(validatePIN("1111"), true);
console.log(validatePIN("123456"), true);
console.log(validatePIN("098765"), true);
console.log(validatePIN("000000"), true);
console.log(validatePIN("123456"), true);
console.log(validatePIN("090909"), true);
console.log(`\n 142 uzdv..................`);

// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
function doubleChar(str) {
    return str
}
console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");