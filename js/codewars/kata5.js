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