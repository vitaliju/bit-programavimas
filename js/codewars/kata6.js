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
// kitas budas
/*function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
} */
console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);
console.log(`\n 151 uzdv..............`);

// https://www.codewars.com/kata/545991b4cbae2a5fda000158/train/javascript
function include(arr, item) {
    return arr.includes(item) ? true : false;
}
console.log(include([1, 2, 3, 4], 3), true);
console.log(include([1, 2, 4, 5], 3), false);
console.log(include([], 3), false);
console.log(`\n 152 uzdv..........`);

// https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript
function alphabetPosition(text) {
    return text.split('').filter(i => /[a-zA-Z]/.test(i)).map(i => i.toLowerCase().charCodeAt(0) - 96).join(' ');
}
// kitas budas
/*function alphabetPosition(text) {
    const str = text.replace(/([^a-z])/ig, '').toLowerCase().split('')

    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charCodeAt() - 96
    }
    return str.join(' ')
}*/
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));
console.log(`\n 153 uzdv..................`);

// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
const number = function (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(`${i + 1}: ${array[i]}`);
    }
    return result;
}
// kitas budas
//const number = array => array.map((n, i) => `${i + 1}: ${n}`);
console.log(number([]), []);
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"]);
console.log(`\n 154 uzdv..............`);

// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
const summation = num => num * (1 + num) / 2;

// kitas budas
/*function summation(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }

    return result;
}*/
console.log(summation(1), 1);
console.log(summation(2), 3);
console.log(summation(8), 36);
console.log(`\n 155 uzdv..............`);

// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
// kitas budas
/* function factorial(n){
 let sum = 1;
  for (let i = 1; i <= n; i++){
    sum = sum * i;
  }
  return sum; 

}*/
console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);
console.log(`\n 156 uzdv................`);

// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
function duplicateCount(text) {
    const arr = text.toLowerCase();
    let count = 0;
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    for (let i in obj) {
        if (obj[i] > 1) {
            count++;
        }
    }
    return count;
}
// kitas budas
/*function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
} */
console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"))
console.log(duplicateCount("Indivisibilities"));
console.log(`\n 157 uzdv..............`);

// https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript
function printArray(array) {
    return array.toString();
}
console.log(printArray([2, 4, 5, 2]));
console.log(printArray(['a', 'l', 'o', 'h', 'a']));
console.log(`\n 158 uzdv...........`);

// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript
function checkExam(array1, array2) {
    let count = 0;

    for (let i = 0; i < array2.length; i++) {

        if (array1[i] !== array2[i]) {
            count--;
        } else if (array1[i] === array2[i]) {
            count += 4;
        } else if (array2[i] === '') {
            count = 0;
        }
        if (count < 0) {
            return 0;
        }
    }

    return count;
}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);
console.log(`\n 159 uzdv.............`);

// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
function removeSmallest(numbers) {
    let min = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, min), ...numbers.slice(min + 1)];
}
// kitas budas
/*function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((a, b)=> b !== indexOfMin);
} */
console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);
console.log(removeSmallest([]), []);
console.log(`\n 160 uzdv................`);

// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
        return -1;
    }
    let l1 = a1.map(str => str.length);
    let l2 = a2.map(str => str.length);
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1));
}
// kitas budas
/* function mxdiflg(a1, a2) {
    if(!a1.length||!a2.length)return -1;
    a1.sort((a,b)=>a.length-b.length);
    a2.sort((a,b)=>a.length-b.length)
    return Math.max(Math.abs(a1[0].length-a2[a2.length-1].length),Math.abs(a2[0].length-a1[a1.length-1].length));
}*/
console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]));
