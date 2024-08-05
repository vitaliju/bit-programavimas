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
    const newStr = str.split('');
    let double = '';
    for (let i = 0; i < newStr.length; i++) {
        double += newStr[i].repeat(2);
    }
    return double;
}
// kitas budas
// const doubleChar = (str) => str.split("").map(c => c + c).join("");

console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");
console.log(`\n 143 uzdv.............`);

// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
function capitalize(s) {
    return [s.split('').map((e, i) => i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()).join(''),
    s.split('').map((e, i) => i % 2 !== 0 ? e.toUpperCase() : e.toLowerCase()).join('')
    ];
}
console.log(capitalize("abcdef"), ['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"), ['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
console.log(`\n 144 uzdv.............`);

// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
function rot13(message) {
    let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    return message.replace(/[a-z]/gi, char => output[input.indexOf(char)]);
}
console.log(rot13('grfg'));
console.log(`\n 145 uzdv.............`);

// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
function factorial(n) {
    if (n < 0 || n > 12) {
        return 'RangeError';
    }
    return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(0), 1, "factorial for 0 is 1");
console.log(factorial(1), 1, "factorial for 1 is 1");
console.log(factorial(2), 2, "factorial for 2 is 2");
console.log(factorial(3), 6, "factorial for 3 is 6");
console.log(factorial(13));
console.log(`\n 145 uzdv...................`);

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
function dnaStrand(dna) {
    let pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
    return dna = dna.replace(/./g, c => pairs[c]);
}
// kitas budas
/*function DNAStrand(dna) {
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}*/
console.log(dnaStrand("AAAA"), 'TTTT');
console.log(dnaStrand("ATTGC"), 'TAACG');
console.log(dnaStrand("GTAT"), 'CATA');
console.log(`\n 146 uzdv..............`);

// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript
const sequenceSum = (begin, end, step) => {
    let sum = 0;
    for (let i = begin; i <= end; i += step) {
        if (begin > end) {
            return 0;
        } else {
            sum += i;
        }
    }
    return sum;
};
console.log(sequenceSum(2, 6, 2), 12);
console.log(sequenceSum(1, 5, 1), 15);
console.log(sequenceSum(1, 5, 3), 5);
console.log(sequenceSum(6, 5, 3), 0);
console.log(`\n 147 uzdv............`);

// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) {
            return arr[i];
        }
    }
    return null;
}
// kitas budas
/*function firstNonConsecutive(arr) {
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] - arr[0]) !== i) {
            return arr[i]
        }
    }
    return null
}*/
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive([1, 2, 3, 4,]));
console.log(`\n  148 uzdv.....................`);

// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode || Date.parse(currentDate) > Date.parse(expirationDate)) {
        return false;
    } else {
        return true;
    }
}
// kitas budas
/*function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
}*/
console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'), true);
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'), false);
console.log(`\n 149 uzdv..............`);

// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
function powersOfTwo(n) {
    let power = [];
    for (let i = 0; i <= n; i++) {
        power.push(2 ** i);
    }
    return power;
}
console.log(powersOfTwo(0), [1]);
console.log(powersOfTwo(1), [1, 2]);
console.log(powersOfTwo(4), [1, 2, 4, 8, 16]);
console.log(`\n 150 uzdv...........`);

// https://www.codewars.com/kata/57fae964d80daa229d000126/javascript
function remove(string) {
    if (!string.at(-1).includes('!')) {
        return string;
    } else {
        return string.slice(0, -1);
    }

}
// kitas budas
/*function remove(string) {
    return string.endsWith('!') ? string.slice(0, -1) : string;
}*/
console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!Hi"));
console.log(remove("!Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi"));
console.log(`\n 151 uzdv............`);

// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
function sumOfDifferences(arr) {
    if (arr === 1) {
        return 0;
    }
    const newArr = arr.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < newArr.length - 1; i++) {
        sum += newArr[i] - arr[i + 1];
    }
    return sum;
}
console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);
console.log(`\n 151 uzdv..............`); 