// rasti didziausia neigiama skaiciu
const a = [89, 58, 50, 98, 49, 509, -34, -4, -1, -98, 56, 69, -56, 60, -34, -45, 54, 44, 99];

function biggestNegative(arr) {
    let biggest = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0 && arr[i] > biggest) {
           biggest = arr[i];
        }
    }
    return biggest;
}
console.log(biggestNegative(a));
console.log(`\n...............`);

// surasti maziausia skaiciu
const a1 = [89, 58, 50, 98, 49, 509, -34, -4, -1, -98, 56, 69, -56, 60, -34, -45, 54, 99];

function smallNum(arr) {
    let small = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < small) {
            small = arr[i];
        }
    }
     return small;
}
console.log(smallNum(a1));
console.log(`\n....................`);

// rasti didziausia skaiciu, kuris yra mazesnis uz 50
function lower(arr) {
    let num = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 50 && arr[i] > num) {
            num = arr[i];
        }
    }
    return num;
}
console.log(lower(a1));
console.log(`\n.............`);

// susumuoti teigiamu skaiciu suma
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(arraySum(a1));
console.log(`\n.................`);

// suskaiciouti neigiamu skaiciu pakeltu kvadratu suma
function sqrt(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            sum += arr[i] ** 2;
        }
    }
    return sum;
}
console.log(sqrt(a1));
console.log(`\n...........`);

// suskaiciouti kiek skaiciu patenka i intervala imtinai nuo 25 iki 75
function interval(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 25 && arr[i] <= 75) {
            count++;
        }
    }
    return count;
}
console.log(interval(a1));
console.log(`\n...............`);

// kiek skiaciu yra 0-liai
function nuliai(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
        }
    }
    return count;
}
console.log(nuliai(a1));
console.log(`\n.............`);

// suskaiciuoti kiek skaiciu dalinasi be liekanos is 3
function module(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            count++;
        }
    }
    return count;
}
console.log(module(a1));
console.log(`\n..................`);

// suskaiciuoti neigiamu skaiciu vidurki
function average(arr) {
    let count = 0
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++
            avg += arr[i];
        }
    }
    const sum = avg / count;
    return sum.toFixed(2);
}
console.log(average(a1));
console.log(`\n.............`);

const B = [
    'the quick brown fox',
    'jumps over the lazy dog',
    'a bird in the hand',
    'is worth two in the bush',
    'an apple a day',
    'keeps the doctor away',
    'actions speak louder than words',
    'all good things must come to an end',
    'beauty is in the eye of the beholder',
    'better late than never',
    'birds of a feather flock together',
    'cleanliness is next to godliness',
    'dont bite the hand that feeds you',
    'dont count your chickens before they hatch',
    'dont put all your eggs in 1 basket',
    'every cloud has a silver lining',
    'every dog has its day',
    'every rose has its thorn',
    'fortune favors the bold',
    'good things come to those who wait',
    'a watched pot never boils',
    'haste makes waste',
    'history repeats itself',
    'cat got your tongue',
    'home is where the heart is',
    'if the shoe fits, wear it',
    'ignorance is bliss',
    'it takes two to tango',
    'arabs have 100 words for sand',
    'kill two birds with one stone',
    'laughter is the best medicine',
    'love is blind',
    'money doesnt grow on trees',
    'no pain no gain',
    'nothing ventured nothing gained',
    'once bitten twice shy',
    'practice makes perfect',
    'the early bird catches the worm',
    'the grass is always greener on the other side',
    'the pen is mightier than 10 swords',
    'theres no smoke without fire',
    'time heals all wounds',
    '5 second rule',
    'every dog has its day',
    'to err is human to forgive divine',
    '2 wrongs dont make a right',
    'when in Rome do as the Romans do',
    'where theres smoke, theres fire',
    'you cant judge a book by its cover',
    'you cant make an omelette without breaking eggs',
    'you reap what you sow',
    'youre never too old to learn'
];

//Surasti ilgiausią stringą;

function longStr(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > str.length) {
            str = arr[i];
        }
    }
    return str;
}
console.log(longStr(B));
console.log(`\n.........`);

// Surasti trumpiausią stringą;

function shortStr(arr) {
    let str = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < str.length) {
            str = arr[i];
        }
    }
    return str;
}
console.log(shortStr(B));
console.log(`\n...............`);

// Surasti stringą, kuris prasideda “a” raide;

function firstLetter(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith('a')) {
            str = arr[i];
            break;
        }
    }
    return str;
}
console.log(firstLetter(B));
console.log(`\n.........`);

// Surasti stringą su daugiausia žodžių;

function countWord(arr) {
    let str = '';
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let wordCount = arr[i].split(' ').length;
        if (wordCount > sum) {
            sum = wordCount;
            str = arr[i];
        }
    }
    return str;
}
console.log(countWord(B));
console.log(`\n.............`);

// Surasti stringą su mažiausiai žodžių;

function shortStr(arr) {
    let short = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].split(' ').length < short.split(' ').length) {
            short = arr[i];
        }
    }
    return short;
}
console.log(shortStr(B));
console.log(`\n..........`);

// Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius;

function countItem(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = arr[i].split(' ').length;
        if (count > 4) {
            sum ++;
        }
    }
    return sum;
}
console.log(countItem(B));
console.log(`\n.............`);

// Suskaičiuoti kiek masyve yra žodžių;

function countStr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i].split(' ').length;
    }
    return sum;
}
console.log(countStr(B));
console.log(`\n..................`);

// Suskaičiuoti visas ‘s’ raides;

function countS(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        for (let j = 0; j < str.length; j++){
            if (str[j] === 's' || str[j] === 'S') {
                sum++;
            }
        }
    }
    return sum
}
console.log(countS(B));
console.log(`\n...................`);

// Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!);

function countLetter(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].replace(/\s+/g, '');
        sum += str.length;
    }    
    return sum;
}
//  kitas budas

console.log(countLetter(B));
console.log(`\n................`);

function countLett(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].match(/[a-z]/g).length;
        
    }    
    return sum;
}
console.log(countLett(B));
console.log(`\n.............`);

// Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!
function longestWord(arr) {
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].split(' ');
        for (let j = 0; j < str.length; j++) {
            if (str[j].length > string.length) {
                string = str[j];
            }
        }
        
    }

    return string;
}
console.log(longestWord(B));
console.log(`\n.................`);