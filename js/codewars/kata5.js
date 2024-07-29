console.log(`\n 114 uzdv...............`);
// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
function shortcut(string) {
    return string.replaceAll('a', '')
        .replaceAll('e', '')
        .replaceAll('i', '')
        .replaceAll('o', '')
        .replaceAll('u', '');
}
// kitas budas
/*function shortcut(string) {
    return string.split('').filter(letter => !'aeiou'.includes(letter)).join('')
}*/
console.log(shortcut('hello'), 'hll');
console.log(shortcut('how are you today?'), 'hw r y tdy?');
console.log(shortcut('complain'), 'cmpln');
console.log(shortcut('never'), 'nvr');
console.log(shortcut('HELLO'), 'HELLO');
console.log(`\n 115 uzdv..................`);

//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
function high(x) {
    let highest = x.split(' ').map(x => [...x].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
    return x.split(' ')[highest.indexOf(Math.max(...highest))];
}
// kitas budas
/*function high(x) {
    let alphabets = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    let words = x.split(" ");
    let highestScore = 0;
    let highestScoreWord = "";

    for (let word of words) {
        let lettersSum = 0;

        for (let letter of word) {
            lettersSum += alphabets.indexOf(letter) + 1;
        }

        if (lettersSum > highestScore) {
            highestScore = lettersSum;
            highestScoreWord = word;
        }
    }

    return highestScoreWord;
}*/
console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');
console.log(`\n 116 uzdv ...................`);

// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript
function replace(s) {
    return s.replace(/[aeiouAEIOU]/g, '!');
}
// kitas budas
/*function replace(s) {
    let a = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if (a.includes(arr[i])) {
            arr[i] = '!'
        }
    }
    return arr.join('')
}*/
console.log(replace("Hi!"), "H!!");
console.log(replace("!Hi! Hi!"), "!H!! H!!");
console.log(replace("aeiou"), "!!!!!");
console.log(replace("ABCDE"), "!BCD!");
console.log(`\n 117 uzdv.................`);

// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
function smallEnough(a, limit) {
    for (let i = 0; i <= a.length; i++) {
        if (a[i] > limit) {
            return false;
        }
    }
    return true;
}
console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
console.log(`\n 118 uzdv..............`);

// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript
function binToDec(bin) {
    return parseInt(bin, 2);
}
console.log(binToDec('0'));
console.log(binToDec('1'));
console.log(binToDec('10'));
console.log(binToDec('1001001'));
console.log(`\n 119 uzdv.............`);

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
function noSpace(x) {
    return x.split(' ').join('');
}
// kitas budas
/*function noSpace(x) {
    return x.replaceAll(' ', '');
}*/
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
console.log(noSpace('8aaaaa dddd r     '), '8aaaaaddddr');
console.log(`\n 120 uzdv....................`);

// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
function solve(s) {
    return s.replace(/[a-z]/g, '').length > s.length / 2
        ? s.toUpperCase()
        : s.toLowerCase();
}
// kitas budas
/*function solve(s) {
    const lowercase = s.match(/[a-z]/g);
    const uppercase = s.match(/[A-Z]/g);
    if (!lowercase || !uppercase) {
        return s;
    }
    return lowercase.length >= uppercase.length
        ? s.toLowerCase()
        : s.toUpperCase();
}*/
console.log(solve("code"), "code");
console.log(solve("CODe"), "CODE");
console.log(solve("COde"), "code");
console.log(solve("Code"), "code");
console.log(`\n 121 uzdv...........`);

// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
function solution(string) {
    let str = string.split('');
    let newStr = '';
    str.forEach(letter => {
        if (letter === letter.toUpperCase()) {
            newStr += ' ' + letter;
        } else {
            newStr += letter;
        }
    });
    return newStr;
}
// kitas budas
/*function solution(string) {
    return (string.replace(/([A-Z])/g, ' $1'));

}*/
/*const solution = (string) => {
  return string.split('')
    .map(letter => letter == letter.toUpperCase() ? letter = ` ${letter}` : letter)
    .join('');
}*/
console.log(solution(""), "");
console.log(solution("camelCasing"), "camel Casing");
console.log(solution("camelCasingTest"), "camel Casing Test");
console.log(`\n 122 uzdv..............`);

// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
function getDivisorsCnt(n) {
    let count = 0;
    for (let i = n; i > 0; i--) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}
// kitas budas
/*function getDivisorsCnt(n) {
    let count = 0

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === Math.sqrt(n)) {
                count++
            } else {
                count += 2
            }
        }
    }

    return count
}*/
console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);
console.log(`\n 123 uzdv............`);

// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
function uniqueInOrder(iterable) {
    let arr = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            arr.push(iterable[i]);
        }
    }
    return arr;
}
// kitas budas
/*const uniqueInOrder = function (iterable) {
    return [...iterable].filter((a, i) => a !== iterable[i - 1])
}*/
console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder('AAABBBCCDABBBccc'));
console.log(uniqueInOrder('AAAABBBCCDAABBBnnn'));
console.log(`\n 124 uzdv...............`);

//https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
function diamond(n) {
    if (n < 1 || n % 2 === 0) {
        return null;
    }
    let result = '';
    let mid = Math.ceil(n / 2);
    for (let i = 1; i <= n; i++) {
        if (i <= mid) {
            result += ''.repeat(mid - 1) + '*'.repeat(2 * i - 1) + `\n`;
        } else {
            result += ''.repeat(i - mid) + '*'.repeat(2 * (n - i) + 1) + `\n`;
        }
    }
    return result;
}
// kitas budas
/*function diamond(n) {
    if (n <= 0 || n % 2 === 0) {
       return null;
    }
    let str = '';
    for (let i = 0; i < n; i++) {
        let len = Math.abs((n - 2 * i - 1) / 2);
        str += ' '.repeat(len);
        str += '*'.repeat(n - 2 * len);
        str += '\n';
    }
       return str
}*/
console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(4));
console.log(`\n 125 uzdv..........`);
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
function XO(str) {
    let x = str.toLowerCase().match(/x/g);
    let o = str.toLowerCase().match(/o/g);
    return (x && x.length) === (o && o.length);
}
// kitas budas
/*const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}*/

/*function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}*/
console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);
console.log(`\n 126 uzdv.................`);

// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
function isTriangle(a, b, c) {
    let max = Math.max(a, b, c);
    let sum = a + b + c;
    return sum - max > max;
}
// kitas budas
/*function isTriangle(a, b, c) {
    return a + b > c && a + c > b && c + b > a;
}*/
console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);
console.log(`\n 127 uzdv...............`);

// https://www.codewars.com/kata/57a4d500e298a7952100035d/train/javascript
function hexToDec(hexString) {
    return parseInt(hexString, 16);
}
console.log(hexToDec("1"), 1);
console.log(hexToDec("a"), 10);
console.log(hexToDec("10"), 16);
console.log(hexToDec("FF"), 255);
console.log(hexToDec("-C"), -12);
console.log(`\n 128 uzdv...........`);

// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
function stray(numbers) {
    return numbers.find(number => numbers.indexOf(number) === numbers.lastIndexOf(number));
}
console.log(stray([1, 1, 2]), 2);
console.log(stray([1, 2, 1]), 2);
console.log(stray([2, 1, 1]), 2);
console.log(`\n 129 uzdv................`);

// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((a, b) => a + Number(b), 0);
}
console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
console.log(`\n 130 uzdv..........`);

// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
const capitals = function (word) {
    const str = word.split('');
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            arr.push(i);
        }
    }
    return arr;
};
console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
console.log(capitals('CodEWARs'));
console.log(capitals('COdEWArs'));
console.log(`\n 131 uzdv.....................`);

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
function duplicateEncode(word) {
    return word.toLowerCase().split('').map(function (a, i, w) {
        return w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')'
    }).join('');
}
// kitas budas
/*function duplicateEncode(word) {
    let result = "";
    let str = word.toLocaleLowerCase();
    for (let i = 0; i < str.length; i++) {
        str.split(str.charAt(i)).length > 2 ? result += ")" : result += "(";
    }
    return result;
}*/
console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @"), "))((");
console.log(`\n 132 uzdv...................`);

// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
function countSheeps(sheep) {
    let count = 0;
    for (let i = 0; i <= sheep.length; i++) {
        if (sheep[i] === true) {
            count++;
        }
    }
    return count;
}
// kitas budas
/*function countSheeps(arr) {
    return arr.filter(Boolean).length;
}*/
console.log(countSheeps([false]));
console.log(countSheeps([true]));
console.log(countSheeps([undefined, null, false, true]));
console.log(countSheeps([undefined, null, false, true, true, false, null, undefined]));
console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));
console.log(`\n 133 uzdv.............`);

// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
function SeriesSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += 1 / (1 + i * 3);
    }
    return sum.toFixed(2);
}
console.log(SeriesSum(2), "1.25");
console.log(SeriesSum(3), "1.39");
console.log(SeriesSum(4), "1.49");
console.log(`\n 134 uzdv..............`);

// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript
function flattenAndSort(array) {
    return array.flat().sort((a, b) => a - b);
}
console.log(flattenAndSort([]), []);
console.log(flattenAndSort([[], []]), []);
console.log(flattenAndSort([[], [1]]), [1]);
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
console.log(`\n 135 uzdv............`);