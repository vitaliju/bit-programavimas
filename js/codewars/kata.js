
// 1.
console.log(`\n 1 uzduotis..................`);

function getMiddle(string) {
  let middleIndex = string.length / 2;
  if (string.length % 2 === 0) {
      return string.slice(middleIndex - 1, middleIndex + 1);
    } else {
      return string.charAt(middleIndex);
  }
    
} 


console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("test"),"es");
console.log(getMiddle("A"),"A");

console.log(`\n 2 uzduotis...............`);
// 2.

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
// 3.

function digitize(n) {
    
  let numb = n + [];
  let size = [];
  for (let i = numb.length - 1; i >=0; i--) {
      size.push(parseInt(numb[i]));
    }
    
    return size;
}

console.log(digitize(35231));
console.log(digitize(0));

// kitas budas

function digitize(n) {
  return Array.from(String(n),Number).reverse();
}

console.log(digitize(35231));
console.log(digitize(0));

console.log(`\n 4 uzduotis..................`);
// 4 uzduotis

function countPositiveSumNegative(input) {
  let pos = [];
  for (let i = 0; i <= input.length; i++) {
      if (i >= 0) {
        ++ pos;
    }
        
        
  }
    return pos;
}

console.log(countPositiveSumNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

console.log(`\n 5 uzduotis..............`);

// 5. uzduotis

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
    
    for(let i = 0; i < year; i++) {
      if(i % 100 == 0) {
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

// 6 uzduotis
function smash(words) {
  let text = words[0];
  
  return text.toString().replaceAll(',', ' ');
}
console.log(smash([]));
console.log(smash(["hello", "world"]));
console.log(smash(["hello", "amazing", "world"]));
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
console.log('kitas budas.........');

// kitas budas

function smash(words) {
  return words.toString().replaceAll(',', ' ');
}
console.log(smash(["hello", "Fuji"]));
console.log(smash(["hello", "amazing", "world"]));
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

console.log(`\n 7 uzduotis.........`);

// 7 uzduotis

function positiveSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    } 
  }
   return sum ;
}
console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([]));
console.log(positiveSum([-1,-2,-3,-4,-5]));
console.log(positiveSum([-1,2,3,4,-5]));

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

console.log(findAverage([1,1,1]));
console.log(findAverage([1,2,3]));
console.log(findAverage([1,2,3,4]));
console.log(findAverage([]));

console.log(`\n 9 uzduotis..........`);
// 9 uzduotis

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
// 10 uzduotis
function sum (numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    count += numbers[i];
  }
  return count;
}

console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1]));

console.log(`\n 11 uzduotis...........`);
// 11 uzduotis

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
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));

console.log(`\n 12 uzduotis...........`);
// 12 uzduotis

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
// 13 uzduotis

function stringToNumber(str) {
  return parseFloat(str);
}

console.log(stringToNumber("1234"));
console.log(stringToNumber("605"));
console.log(stringToNumber("1405"));
console.log(stringToNumber("-7"));

console.log(`\n 14 uzduotis....................`);
// 14 uzduotis

function invert(array) {
   for (let i =0; i < array.length; i++) {
    array[i] = array[i] * (-1);
    
    
   }
   return array;
}

console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));
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
console.log(invert([1,2,36,4,5]));
console.log(invert([1,-22,3,-49,5]));
console.log(invert([]));
console.log(invert([0]));

console.log('....................');
//kitas budas

function invert(array) {
  return array.map(x => -x);
}
console.log(invert([13,2,36,4,55]));
console.log(invert([1,-22,30,-49,57]));
console.log(invert([]));
console.log(invert([0]));

console.log(`\n 15 uzduotis...............`);
// 15 uzduotis

function reverseSq(n) {
    return Array.from({length: n},(_, i) => n -i );
}
  
console.log(reverseSq(5));

console.log(`\n 16 uzduotis.............`);
// 16 uzduotis

/*function getGrade(s1, s2, s3) {
  let avg = s1 + s2 + s3 / 3;
      
  if (90 <= avg <= 100) {
    return 'A';
  } 
  if (80 <= avg2 < 90) {
    return 'B';
  } 
  if (70 <= avg < 80) {
    return 'C'; 
  } 
  if (60 <= avg < 70) {
    return 'D';
  }
  if (0 <= avg < 60) {
    return  'F';
  }

   return avg ;
}*/

//console.log(getGrade(95,90,93));
//console.log(getGrade(100,85,96));
//console.log(getGrade(92,93,94));
//console.log(getGrade(70,70,100));
//console.log(getGrade(82,85,87));
//console.log(getGrade(84,79,85));
//console.log(getGrade(89,89,90)); 
//console.log(getGrade(70,70,70));
//console.log(getGrade(75,70,79));
//console.log(getGrade(60,82,76));
//console.log(getGrade(65,70,59));
//console.log(getGrade(66,62,68));
//console.log(getGrade(58,62,70));
//console.log(getGrade(44,55,52));
//console.log(getGrade(48,55,52));
//console.log(getGrade(58,59,60));

console.log(`\n 17 uzduotis...............`);
// 17 uzduotis

function past(h, m, s) {
  const a = h * 60 * 60 *1000;
  const b = m * 60 * 1000;
  const c = s * 1000;
  const clock = a + b + c;
  return clock;
}
console.log(past(0,1,1));
console.log(past(1,1,1));
console.log(past(0,0,0));
console.log(past(1,0,1));
console.log(past(1,0,0));
// kitas budas
/* function past(h, m, s) {
  return((h * 3600) + (m * 60) + s) * 1000);
}*/

console.log(`\n 18 uzduotis.............`);
// 18 uzduotis

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
// 19 uzduotis

function disemvowel(str) {
  let newStr = (str.replace(/A|E|I|O|U|a|e|i|o|u/g, ''));
  
  return newStr;
}
console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
console.log(disemvowel("What are you, a communist?"));

console.log(`\n 20 uzduotis..................`);
// 20 uzduotis
function lovefunc(flower1, flower2) {
  
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else if (petal1 % 2 !== 0 && petal2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
  
}
console.log(lovefunc(1,4));
console.log(lovefunc(2,2));
console.log(lovefunc(0,1));
console.log(lovefunc(0,0));
// kitas budas
console.log('....................');
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2
}
console.log(lovefunc(3,4));
console.log(lovefunc(2,2));
console.log(lovefunc(0,5));
console.log(lovefunc(0,0));
 console.log(`\n 21 uzduotis................`);
 // 21 uzduotis
 
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
// 22 uzduotis

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
// 23 uzduotis

function countSheep(num) {
  let sum = '';
  for(let i = 1; i <= num; i++) {
    sum += `${i} sheep...`;
  }
  return sum;  
}
console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
console.log(`\n 24 uzduotis...............`);
// 22 uzduotis

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
// 25uzduotis

function sumTwoSmallestNumbers(numbers) {
   
  const newNarray  = numbers.sort((a, b) => a - b);
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
// 26 uzduotis

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
// 27 uzduotis

function filter_list(l) {
  let arr = [];
for (let i = 0; i <= l.length; i++) {
  if (typeof l[i] === 'number') {
    arr.push(l[i]);
  } 
  
}
return arr;
}
console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));
// kitas budas
/*function filter_list(l) {
  return l.filter(x => typeof(x) =="number");
}*/
console.log(`\n 28 uzduotis.............`);
// 28 uzduotis

function removeChar(str) {
return str.slice(1, -1);
}
console.log(removeChar('eloquent'));
console.log(removeChar('country'));
console.log(removeChar('person'));
console.log(removeChar('place'));
console.log(removeChar('ooopsss'));
console.log(`\n 29 uzduotis..............`);
// 29 uzduotis

