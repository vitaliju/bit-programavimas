
console.log(`\n 1 uzduotis..................`);

function getMiddle(string) {
  let middleIndex = string.length / 2;
  if (string.length % 2 === 0) {
    return string.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return string.charAt(middleIndex);
  }

}
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("test"), "es");
console.log(getMiddle("A"), "A");

console.log(`\n 2 uzduotis...............`);

function wordReverse(str) {
  let string = '';
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }

  return string;
}
console.log(wordReverse('world'));
console.log(wordReverse('hello'));
console.log(wordReverse(''));
console.log(wordReverse('h'));

console.log(`\n 3 uzduotis...................`);

function digitize(n) {

  let numb = n + [];
  let size = [];
  for (let i = numb.length - 1; i >= 0; i--) {
    size.push(parseInt(numb[i]));
  }
  return size;
}
console.log(digitize(35231));
console.log(digitize(0));

// kitas budas
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

console.log(digitize(35231));
console.log(digitize(0));

console.log(`\n 4 uzduotis..................`);

function countPositiveSumNegative(input) {
  let pos = [];
  for (let i = 0; i <= input.length; i++) {
    if (i >= 0) {
      ++pos;
    }
  }
  return pos;
}
console.log(countPositiveSumNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

console.log(`\n 5 uzduotis..............`);

/*function century(year) {
    let age = year + 100;
    if (year < 100) {
      return (year + 100).toString().slice(0, 1);
    }
    if (year > 100) {
      return (year + 100).toString().slice(0, 2);
    }
    
     return age;
}*/

//console.log(century(1705));
//console.log(century(1900));
//console.log(century(1601));
//console.log(century(2000));
//console.log(century(89));

console.log('..........');
// kitas sprendimas

/*function century(year) {
    return Math.ceil(year / 100);
}
console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));
*/
console.log('................');
//kitas sprendimas

/*function century(year) {
    let age = year / 100 + 1;

    return Math.floor(age);
}

console.log(century(1805));
console.log(century(1500));
console.log(century(1601));
console.log(century(2100));
console.log(century(81));
*/
// kitas sprendimas
console.log('................');

function century(year) {
  let century = 0;

  for (let i = 0; i < year; i++) {
    if (i % 100 == 0) {
      century++;
    }
  }
  return century;
}
console.log(century(1405));
console.log(century(1200));
console.log(century(1801));
console.log(century(5100));
console.log(century(81));

console.log(`\n 6 uzduotis................`);

function smash(words) {
  let text = words[0];

  return text.toString().replaceAll(',', ' ');
}
console.log(smash([]));
console.log(smash(["hello", "world"]));
console.log(smash(["hello", "amazing", "world"]));
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
console.log('kitas budas.........')

function smash(words) {
  return words.toString().replaceAll(',', ' ');
}
console.log(smash(["hello", "Fuji"]));
console.log(smash(["hello", "amazing", "world"]));
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

console.log(`\n 7 uzduotis.........`);

function positiveSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));

console.log(`\n 8 uzduotis..............`);
// 8 uzduotis

function findAverage(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    if (array.length !== 0) {
      average += array[i] / array.length, 0;
    }

  }
  return average;
}

console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([]));

console.log(`\n 9 uzduotis..........`);

function evenOrOdd(number) {
  if (number % 2 !== 0) {
    return 'Odd';
  } else {
    return 'Even';
  }
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(-2));

console.log(`\n 10 uzduotis.............`);

function sum(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    count += numbers[i];
  }
  return count;
}

console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1]));

console.log(`\n 11 uzduotis...........`);

function sumMix(x) {

  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === 'string') {
      x[i] = Number(x[i]);
    }
    sum += x[i];
  }
  return sum;
}

console.log(sumMix([9, 3, '7', '3']));
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));

console.log(`\n 12 uzduotis...........`);

function areYouPlayingBanjo(name) {
  if (name.startsWith('R') || name.startsWith('r')) {
    return `"${name} plays banjo"`;
  } else {
    return `"${name} does not play banjo"`;
  }
}

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Paul"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("bravo"));
console.log(areYouPlayingBanjo("rolf"));

console.log(`\n 13 uzduotis..................`);

function stringToNumber(str) {
  return parseFloat(str);
}

console.log(stringToNumber("1234"));
console.log(stringToNumber("605"));
console.log(stringToNumber("1405"));
console.log(stringToNumber("-7"));

console.log(`\n 14 uzduotis....................`);

function invert(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * (-1);


  }
  return array;
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([]));
console.log(invert([0]));
console.log('.......................');
// kitas budas

function invert(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(- array[i]);
  }
  return newArr;
}
console.log(invert([1, 2, 36, 4, 5]));
console.log(invert([1, -22, 3, -49, 5]));
console.log(invert([]));
console.log(invert([0]));

console.log('....................');
//kitas budas

function invert(array) {
  return array.map(x => -x);
}
console.log(invert([13, 2, 36, 4, 55]));
console.log(invert([1, -22, 30, -49, 57]));
console.log(invert([]));
console.log(invert([0]));

console.log(`\n 15 uzduotis...............`);

function reverseSq(n) {
  return Array.from({ length: n }, (_, i) => n - i);
}

console.log(reverseSq(5));

console.log(`\n 16 uzduotis.............`);

function getGrade(s1, s2, s3) {
  const avg = s1 + s2 + s3;
  const sum = avg / 3;

  if (sum > 90) {
    return 'A';
  }
  if (sum >= 80 && sum < 90) {
    return 'B';
  }
  if (sum >= 70 && sum < 80) {
    return 'C';
  }
  if (sum >= 60 && sum < 70) {
    return 'D';
  }
  if (sum >= 0 && sum < 60) {
    return 'F';
  }

  return sum;
}
console.log(getGrade(95, 90, 93));
console.log(getGrade(100, 85, 96));
console.log(getGrade(92, 93, 94));
console.log(getGrade(70, 70, 100));
console.log(getGrade(82, 85, 87));
console.log(getGrade(84, 79, 85));
console.log(getGrade(89, 89, 90));
console.log(getGrade(70, 70, 70));
console.log(getGrade(75, 70, 79));
console.log(getGrade(60, 82, 76));
console.log(getGrade(65, 70, 59));
console.log(getGrade(66, 62, 68));
console.log(getGrade(58, 62, 70));
console.log(getGrade(44, 55, 52));
console.log(getGrade(48, 55, 52));
console.log(getGrade(58, 59, 60));

console.log(`\n 17 uzduotis...............`);

function past(h, m, s) {
  const a = h * 60 * 60 * 1000;
  const b = m * 60 * 1000;
  const c = s * 1000;
  const clock = a + b + c;
  return clock;
}
console.log(past(0, 1, 1));
console.log(past(1, 1, 1));
console.log(past(0, 0, 0));
console.log(past(1, 0, 1));
console.log(past(1, 0, 0));
// kitas budas
/* function past(h, m, s) {
  return((h * 3600) + (m * 60) + s) * 1000);
}*/

console.log(`\n 18 uzduotis.............`);

function numberToString(num) {
  return num.toString();
}
console.log(numberToString(65));
// kitas budas
function numberToString(num) {
  return num + '';
}
console.log(numberToString(656));

console.log(`\n 19 uzduotis.............`);


function disemvowel(str) {
  let newStr = (str.replace(/A|E|I|O|U|a|e|i|o|u/g, ''));

  return newStr;
}
console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
console.log(disemvowel("What are you, a communist?"));

console.log(`\n 20 uzduotis..................`);

function lovefunc(flower1, flower2) {

  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else if (petal1 % 2 !== 0 && petal2 % 2 === 0) {
    return true;
  } else {
    return false;
  }

}
console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));
console.log(lovefunc(0, 1));
console.log(lovefunc(0, 0));
// kitas budas
console.log('....................');
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2
}
console.log(lovefunc(3, 4));
console.log(lovefunc(2, 2));
console.log(lovefunc(0, 5));
console.log(lovefunc(0, 0));

console.log(`\n 21 uzduotis................`);

function makeUpperCase(str) {
  return str.toUpperCase();
}
console.log(makeUpperCase(""));
console.log(makeUpperCase("hello"));
console.log(makeUpperCase("Hello"));
console.log(makeUpperCase("HELLO"));
// kitas budas
const makeUpperCase2 = str => str.toUpperCase();

console.log(makeUpperCase2(""));
console.log(makeUpperCase2("heLlo"));
console.log(makeUpperCase2("hellO"));
console.log(makeUpperCase2("HELLO"));

console.log(`\n 22 uzduotis..............`);

function feast(beast, dish) {
  const b = beast[0] + beast.at(-1);
  const d = dish[0] + dish.at(-1);
  return b === d ? true : false;
}
console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));
console.log('..........................');
// kitas budas
function feast2(beast, dish) {
  return beast[0] === dish[0]
    && beast.at(-1) === dish.at(-1) ? true : false;
}
console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));

console.log(`\n 23 uzduotis...............`);

function countSheep(num) {
  let sum = '';
  for (let i = 1; i <= num; i++) {
    sum += `${i} sheep...`;
  }
  return sum;
}
console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));

console.log(`\n 24 uzduotis...............`);

function booleanToString(b) {
  if (b === true) {
    return `${true}`
  } else if (b === false) {
    return false.toString()
  }
}
console.log(booleanToString(true));
console.log(booleanToString(false));

console.log(`\n 25 uzduotis................`);

function sumTwoSmallestNumbers(numbers) {

  const newNarray = numbers.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < newNarray.length; i++) {
    sum = numbers[0] + numbers[1]
  }
  return sum;
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));
// kitas budas
/*function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
}*/

console.log(`\n 26 uzduotis......................`);

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (distanceToPump / fuelLeft <= mpg) {
    return true;
  } else {
    return false;
  }
};
console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));

console.log(`\n 27 uzduotis..............`);

function filter_list(l) {
  let arr = [];
  for (let i = 0; i <= l.length; i++) {
    if (typeof l[i] === 'number') {
      arr.push(l[i]);
    }
  }
  return arr;
}
console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]));
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
// kitas budas
/*function filter_list(l) {
  return l.filter(x => typeof(x) =="number");
}*/

console.log(`\n 28 uzduotis.............`);

function removeChar(str) {
  return str.slice(1, -1);
}
console.log(removeChar('eloquent'));
console.log(removeChar('country'));
console.log(removeChar('person'));
console.log(removeChar('place'));
console.log(removeChar('ooopsss'));

console.log(`\n 29 uzduotis..............`);

function greet(name, owner) {
  const greet = name === owner ? 'Hello boss' : 'Hello guest'
  return greet;
}
console.log(greet('Daniel', 'Daniel'));
console.log(greet('Greg', 'Daniel'));
// kitas budas
/*function greet (name, owner) {
  return `Hello ${name==owner?'boss':'guest'}`
}*/

console.log(`\n 30 uzduotis...................`);

function grow(x) {
  let multy = [];
  for (let i = 0; i < x.length; i++) {
    multy = x.reduce((a, b) => a * b);
  }
  return multy;
}
console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));

console.log(`\n 31 uzduotis..............`);


console.log(`\n 32 uzduotis....................`)

//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

function howMuchILoveYou(nbPetals) {
  let text = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  for (let i = 0; i < nbPetals; i++) {
    text.push(text[i]);
  }
  return text[nbPetals - 1];
}
console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(6));

console.log(`\n 33 uzduotis..........................`);

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
console.log(countBy(1, 5));
console.log(countBy(2, 8));

console.log(`\n 34 uzdv................`);

function persistence(num) {
  const newNum = num.toString();
  if (newNum.length === 1) {
    return 0;
  }
  const nextNum = newNum.split('').reduce((a, b) => a * b, 1);
  return 1 + persistence(nextNum);
}
console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));

console.log(`\n 35 uzdv.............`);

function findShort(s) {
  const strArr = s.trim().split(' ');
  const newStr = strArr.sort((a, b) => { return a.length - b.length });
  return newStr[0].length;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
console.log(findShort("Let's travel abroad shall we"));

console.log(`\n 36 uzdv........................`);

function highAndLow(numbers) {
  const newNum = numbers.split(' ');
  const highLow = newNum.sort(function (a, b) {
    return Number(a) - Number(b);
  });
  return highLow[highLow.length - 1] + ' ' + highLow[0];
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));

console.log(`\n 37 uzdv......................`);

function rentalCarCost(d) {
  const day = d;
  const price = 40;
  let rent = day * price;

  if (d < 3) {
    return rent;
  }
  if (d >= 3 && d < 7) {
    return rent - 20;
  }
  if (d >= 7) {
    return rent - 50
  }

}
// kitas budas
//const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(4));
console.log(rentalCarCost(7));

console.log(`\n 38 uzdv...........`);

/* Expanted number (12) --> '10 + 2'
                  (213) --> '200 + 10  + 3'
*/
function expandedForm(num) {
  let str = num.toString().split('');
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length - i; j > 1; j--) {
      if (str[i] === '0') {
        i++
      } else {
        str[i] += '0';
      }

    }

  }
  str = str.filter(item => item !== '0');
  return str.join('+');
}
console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));

console.log(`\n 39 uzdv...............`);

function removeEveryOther(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}
// kitas budas
/*function removeEveryOther(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr
}
*/
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(removeEveryOther([[1, 2]]))
console.log(removeEveryOther([['Goodbye'], { 'Great': 'Job' }]));

console.log(`\n 40 uzdv..............`);

function abbrevName(name) {
  const letter = name.split(' ');
  const inicials = letter[0].charAt(0) + '.' + letter[1].charAt(0) + '.';

  return inicials.toUpperCase();
}
// kitas budas
/*function abbrevName(name) {

  const nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase(); 
}*/
console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("ethan dole"));

console.log(`\n 41 uzdv..............`);

function getAge(inputString) {
  const age = inputString;
  for (let i = 0; i < inputString.length; i++) {
    return parseFloat(age[i]);
  }

}
console.log(getAge("4 years old"));
console.log(getAge("6 years old"));

console.log(`\n 42 uzdv................`);

function validatePIN(pin) {
  const digits = pin.length;
  if ((digits === 4 || digits === 6)
    && (!isNaN(pin) && !pin.includes('.')
      && !pin.includes('-') && !pin.includes(' '))) {
    return true;
  } else {
    return false;
  }

}
console.log(validatePIN("1"));
console.log(validatePIN("12"));
console.log(validatePIN("123"));
console.log(validatePIN("12345"));
console.log(validatePIN("1234567"));
console.log(validatePIN("-1234"));
console.log(validatePIN("1.234"));
console.log(validatePIN("-1.234"));
console.log(validatePIN("00000000"));
console.log(validatePIN("a234"));
console.log(validatePIN(".234"));
console.log(validatePIN("5234"));
console.log(validatePIN("589234"));
console.log(validatePIN("-89234"));
console.log(validatePIN("1234  "));

console.log(`\n 43 uzdv..............`);

function oddOrEven(array) {
  let sum = 0;
  const sumArr = array.reduce((a, b) => a + b, sum);
  if (array.length === 0 || sumArr % 2 === 0 || sumArr === 0) {
    return 'even';
  } else {
    return 'odd';
  }

}
console.log(oddOrEven([0]));
console.log(oddOrEven([1]));
console.log(oddOrEven([]));
console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, 1, 3]));
console.log(oddOrEven([1023, 1, 2]));
console.log(oddOrEven([1023, 1, 3]));

console.log(`\n 44 uzdv.............`);

function hero(bullets, dragons) {
  const hero = bullets / 2 >= dragons ? true : false;
  return hero;
}
console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));
console.log(hero(1500, 751));
console.log(hero(0, 1));

console.log(`\n 45 uzdv...............`);

function arrayDiff(a, b) {
  if (a.length === 0) {
    return [];
  }
  if (b.length === 0) {
    return a;
  }
  let arr = [];
  a.forEach(function included(item) {
    if (!b.includes(item)) {
      arr.push(item)
    }
  })
  return arr;
}
console.log(arrayDiff([1, 2], [1]))
console.log(arrayDiff([1, 2, 2], [1]))
console.log(arrayDiff([1, 2, 2], [2]))
console.log(arrayDiff([1, 2, 2], []))
console.log(arrayDiff([], [1, 2]))
console.log(arrayDiff([1, 2, 3], [1, 2]));

console.log(`\n 46 uzdv.............`);

//www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  if (arr[0] === arr[1]) {
    return arr.pop();
  } else {
    return arr[0];
  }
}
console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([0, 0, 1]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([1, 1, 2, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));

console.log(`\n 47 uzdv...................`);

function reverseWords(str) {
  const text = str.split(' ');
  let rev = [];
  for (i = 0; i < text.length; i++) {
    rev.push(text[i].split('').reverse().join(''));
  }
  return rev.join(' ');
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords('apple'));
console.log(reverseWords('a b c d'));
console.log(reverseWords('double  spaced  words'));
console.log(`\n 48 uzdv...............`);

function isSquare(n) {
  if (Math.sqrt(n) !== false && n >= 0 && Math.sqrt(n) % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
console.log(isSquare(0), true, "0 is a square number (0 * 0)");
console.log(isSquare(3), false, "3 is not a square number");
console.log(isSquare(4), true, "4 is a square number (2 * 2)");
console.log(isSquare(25));
console.log(`\n 49 uzdv................`);

function findOdd(arr) {
  const count = arr.find((item) => arr.filter(x => x === item).length % 2);
  return count;
}
console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([7, 1, 2, 1, 1, 7, 2]));
console.log(findOdd([-1, 1, 2, 2, 2, -1, 1]));
console.log(`\n 50 uzdv.....................`);

function getCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes('a')) {
      count++;
    } else if (str[i].includes('e')) {
      count++;
    } else if (str[i].includes('i')) {
      count++
    } else if (str[i].includes('o')) {
      count++;
    } else if (str[i].includes('u')) {
      count++;
    }
  }
  return count;
}
console.log(getCount('abrakadabra'));
console.log(getCount('replace'));
console.log(getCount('strangegoal'));