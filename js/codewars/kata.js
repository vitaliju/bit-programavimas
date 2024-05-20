
// 1.
console.log('1 uzduotis..................');

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

console.log('2 uzduotis...............');
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

console.log('3 uzduotis...................');
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

console.log('4 uzduotis..................');
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

console.log('5 uzduotis..............');

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

console.log('6 uzduotis................');

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

console.log('7 uzduotis.........');

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

console.log('8 uzduotis..............');
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

console.log('9 uzduotis..........');
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

console.log('10 uzduotis.............');
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

console.log('11 uzduotis...........');
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

console.log('12 uzduotis...........');
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

console.log('13 uzduotis..................');
// 13 uzduotis

function stringToNumber(str) {
  return parseFloat(str);
}

console.log(stringToNumber("1234"));
console.log(stringToNumber("605"));
console.log(stringToNumber("1405"));
console.log(stringToNumber("-7"));

console.log('14 uzduotis....................');
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

console.log('15 uzduotis...............');
// 15 uzduotis

