console.log(`\n 81 uzdv..........`);
// https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    } else if (exam > 75 && projects >= 5) {
        return 90;
    } else if (exam > 50 && projects >= 2) {
        return 75;
    } else {
        return 0;
  }
}
console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);
console.log(`\n 82 uzdv........`);

// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
function number(busStops) {
    let entres = 0;
    let down = 0;
    const passengers = busStops.map((arr) => {
        entres += arr[0];
        down += arr[1];
    });
    return entres - down;
}
// kitas budas
/*function number(busStops){
  let num = 0;
  for(let i = 0;i < busStops.length; i++){
      num += busStops[i][0] - busStops[i][1]
  }
  return num;
}*/
console.log(number([[10,0],[3,5],[5,8]]),5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
console.log(number([[0, 0]]), 0);
console.log(`\n 83 uzdv............`);

// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
function findMultiples(integer, limit) {
    let arr = [];
    for (let i = integer; i <= limit; i+= integer) {
        arr.push(i);
    }
    return arr;
}
console.log(findMultiples(5, 25), [5, 10, 15, 20, 25]);
console.log(findMultiples(1, 2), [1, 2]);
console.log(findMultiples(5, 7), [5]);
console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24]);
console.log(findMultiples(11, 54), [11, 22, 33, 44]);
console.log(`\n 84 uzdv...............`);

// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript
function toCsvText(array) {
    return array.join('\n');
}
console.log(toCsvText([
                                  [ 0, 1, 2, 3, 45 ],
                                  [ 10,11,12,13,14 ],
                                  [ 20,21,22,23,24 ],
                                  [ 30,31,32,33,34 ]
                                 ] ));

console.log(toCsvText([
                                  [ -25, 21, 2, -33, 48 ],
                                  [ 30,31,-32,33,-34 ]
                                 ] ));

console.log(toCsvText([
                                  [ 5,55,5,5,55 ],
                                  [ 6,6,66,23,24 ],
                                  [ 666,31,66,33,7 ]
                                 ] ));
console.log(`\n 85 uzdv..............`);

// https://www.codewars.com/kata/56bcaedfcf6b7f2125001118/train/javascript
function htmlspecialchars(formData) {
    return formData.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/"/g, '&quot;');
}
// kitas budas
/*function htmlspecialchars(formData) {
  let str = '';
  for (let char of formData) {
    switch(char) {
        case '<':
          str += '&lt;';
          break;
        case '>':
          str += '&gt;';
          break;
        case '"':
          str += '&quot;';
          break;
        case '&':
          str += '&amp;';
          break;
        default: 
          str += char;
    }
  }
  
  return str;
}*/

console.log(htmlspecialchars("<h2>Hello World</h2>"));
console.log(htmlspecialchars("Hello, how would you & I fare?"));
console.log(htmlspecialchars('How was "The Matrix"?  Did you like it?'));
console.log(htmlspecialchars("<script>alert('Website Hacked!');</script>"));
console.log(`\n 86 uzdv..............`);

// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
function solution(str){
  let i = 0;
  let arr = [];
  if (str.length % 2 !== 0) {
    str += '_';
  }
  while (i < str.length) {
    arr.push(str[i] + str[i + 1]);
    i += 2;
  }
  return arr;
}
// kitas budas
/*function solution(str){
   let result = []

   for (let i = 0; i < str.length; i += 2) {
     if (i < str.length - 1) {
       result.push(str[i] + str[i + 1])
     } else {
      result.push(str[i] + '_') 
     }
   }
   
   return result
}*/

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);
console.log(`\n 87 uzdv..................`);

//https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
function pipeFix(numbers) {
    let arr = [];
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        arr.push(i);
    }
    return arr;
}
// kitas budas
/*const pipeFix = numbers => {
  let results = [],
      i=Math.min(...numbers);
  while(i<=Math.max(...numbers)) { results.push(i); i++; }
  return results
}*/
console.log(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
console.log(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
console.log(pipeFix([6, 9]), [6, 7, 8, 9]);
console.log(`\n 88 uzdv..............`);

// https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript
function unusualFive() {
  let five = 'hands';
  return five.length;
}
console.log(unusualFive(), 5);
console.log(`\n 89 uzdv.............`);

// https://www.codewars.com/kata/55ad04714f0b468e8200001c/train/javascript
function getChar(c) {
  return String.fromCharCode(c);
}
console.log(getChar(55), '7');
console.log(getChar(56), '8');
console.log(getChar(57), '9');
console.log(getChar(58), ':');
console.log(getChar(59), ';');
console.log(getChar(60), '<');
console.log(getChar(61), '=');
console.log(getChar(62), '>');
console.log(getChar(63), '?');
console.log(getChar(64), '@');
console.log(getChar(65), 'A');
console.log(`\n 90 uzdv...............`);

// https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript
/*function splitAndMerge(string, separator) {
  return string.split(' ').map(element => element.split('').join(separator)).join(' ');
}*/

// kitas budas
function splitAndMerge(string, separator) {
  const arr = [];
  const text = string.split(" ");
    for(let i = 0; i < text.length; i++){
      const newText = text[i];
      arr.push(newText.split("").join(separator));
    }
   
  return arr.join(" ");
  }
console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge("My name is John","-"));
console.log(splitAndMerge("Hello World!","."));
console.log(splitAndMerge("Hello World!", ","));
console.log(`\n 91 uzdv..................`);

// https://www.codewars.com/kata/5763bb0af716cad8fb000580/train/javascript
function countSquares(cuts) {
  if (cuts === 0) {
    return 1;
  } else {
    return (6 * cuts ** 2) + 2;
  }
}
console.log(countSquares(5), 152);
console.log(countSquares(16), 1538);
console.log(countSquares(23), 3176);
console.log(`\n 92 uzdv...............`);

// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript
/*function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * (b + c), a + b * c, (a + b) * c, a * b * c);

}*/

// kitas budas
function expressionMatter(a, b, c) {
    let result1 = a * (b + c)
    let result2 = a * b * c
    let result3 = a + b * c
    let result4 = (a + b) * c
    let result5 = a + b + c
    let result6 = a * b + c

    let biggest = result1
    if (biggest < result2){
        biggest = result2
    } if (biggest < result3){
        biggest = result3
    } if (biggest < result4){
        biggest = result4
    } if (biggest < result5){
        biggest = result5
    } if (biggest < result6){
        biggest = result6
    }

    return biggest
}
console.log(expressionMatter(2, 1, 2), 6);
console.log(expressionMatter(2, 1, 1), 4);
console.log(expressionMatter(1, 1, 1), 3);
console.log(expressionMatter(1, 2, 3), 9);
console.log(expressionMatter(1, 3, 1), 5);
console.log(expressionMatter(2, 2, 2), 8);
console.log(expressionMatter(5, 1, 3), 20);
console.log(expressionMatter(3, 5, 7), 105);
console.log(expressionMatter(5, 6, 1), 35);
console.log(expressionMatter(1, 6, 1), 8);
console.log(expressionMatter(2, 6, 1), 14);
console.log(expressionMatter(6, 7, 1), 48);
console.log(expressionMatter(2, 10, 3), 60);
console.log(expressionMatter(1, 8, 3), 27);
console.log(expressionMatter(9, 7, 2), 126);
console.log(expressionMatter(1, 1, 10), 20);
console.log(expressionMatter(9, 1, 1), 18);
console.log(expressionMatter(10, 5, 6), 300);
console.log(expressionMatter(1, 10, 1), 12);
console.log(`\n 93 uzdv..............`);

// https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/javascript
function isOpposite(s1, s2) {
  if (s1.length !== s2.length || s1 === '' || s2 === '') {
    return false;
  }
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      return false;
    }
  }
  return true;
}
console.log(isOpposite("ab","AB") , true);
console.log(isOpposite("aB","Ab") , true);
console.log(isOpposite("aBcd","AbCD") , true);
console.log(isOpposite("aBcde","AbCD") , false);
console.log(isOpposite("AB","Ab") , false);
console.log(isOpposite("", ""), false);
console.log(`\n 94 uzdv.................`);

// https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript

/*function multiply(number){
  let num = Math.abs(number);
  let digits = num.toString();
  return number * (5 ** digits.length);
}*/
// kitas budas
function multiply(number){
  const digitsNumber = Math.abs(number).toString().length;
  return number * (5 ** digitsNumber);
}
console.log(multiply(10),250);
console.log(multiply(5),25);
console.log(multiply(200),25000);
console.log(multiply(0),0);
console.log(multiply(-2), -10);
console.log(`\n 95 uzdv.........`);

// https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript
/*function colorOf(r, g, b) {
  let r1 = r.toString(16);
  let g1 = g.toString(16);
  let b1 = b.toString(16);
  if (r1.length < 2) {
    r1 = '0' + r1;
  }
  if (g1.length < 2) {
    g1 = '0' + g1;
  }
  if (b1.length < 2) {
    b1 = '0' + b1;
  
  }
  return '#' + r1 + g1 + b1;
}*/
// kitas budas 
 function colorOf(r,g,b) {
   return "#" + toHex(r)+ toHex(g)+ toHex(b);  
}

function toHex(n) {
  let result = n.toString(16);
  return result.length == 1 ? "0" + result : result;  
}
console.log(colorOf(255,0,0), "#ff0000");
console.log(colorOf(0,111,0), "#006f00");
console.log(colorOf(1, 2, 3), "#010203");
console.log(`\n 96 uzdv..................`);

// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript
function bigToSmall(arr) {
  const array = [].concat(...arr).sort((a, b) => b - a).join('>');
  return array;
}
console.log(bigToSmall([[1,2],[3,4],[5,6]]) , "6>5>4>3>2>1");
console.log(bigToSmall([[1,3,5],[2,4,6]]) , "6>5>4>3>2>1");
console.log(bigToSmall([[1, 1], [1], [1, 1]]), "1>1>1>1>1");
console.log(`\n 97 uzdv..........................`);
    
// https://www.codewars.com/kata/5732d3c9791aafb0e4001236/train/javascript
function roundIt(n) {
  let num = n.toString().split('.');
  if (num[0].length < num[1].length) {
    return Math.ceil(n);
  } else if (num[0].length > num[1].length) {
    return Math.floor(n);
  } else {
    return Math.round(n);
  }
}
console.log(roundIt(3.45) , 4);
console.log(roundIt(34.5) , 34);
console.log(roundIt(34.56), 35);  
console.log(`\n 98 uzdv..................`);

// https://www.codewars.com/kata/57238766214e4b04b8000011/train/javascript
function changeMe(moneyIn) {
  if (moneyIn === '£5') {
    return `${'20p '.repeat(5 * 5).trimEnd()}`;
  } else if (moneyIn === '£2') {
    return `${'20p '.repeat(5 * 2).trimEnd()}`;
  } else if (moneyIn === '£1') {
    return `${'20p '.repeat(5 * 1).trimEnd()}`;
  } else if (moneyIn === '50p') {
    return `${'20p '.repeat(2).trimEnd()} 10p`;
  } else if (moneyIn === '20p') {
    return `${'10p '.repeat(2).trimEnd()}`;
  }
  return moneyIn;
}
// kitas budas
/*function changeMe(moneyIn){
  switch (moneyIn) {
    case '£5':
      var change = Array(25).fill('20p');
      return change.join(' ');
    case '£2':
      var change = Array(10).fill('20p');
      return change.join(' ');
    case '£1':
      var change = Array(5).fill('20p');
      return change.join(' ');
    case '50p':
      return '20p 20p 10p';
    case '20p':
      return '10p 10p';
    default:
      return moneyIn;
  }
}*/
console.log(changeMe('20p'));
console.log(changeMe('£1'));
console.log(changeMe('50p'));
console.log(`\n 99 uzdv................`);

// https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript
function uniTotal(string) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    count += string.charCodeAt(i);
  }
  return count;
}
console.log(uniTotal(''));
console.log(uniTotal('a'));
console.log(uniTotal('c'));
console.log(uniTotal('e'));
console.log(uniTotal('aaa'));
console.log(uniTotal('Mary Had A Little Lamb', 1873));

// https://www.codewars.com/kata/56b97b776ffcea598a0006f2/train/javascript
function bubblesortOnce(arr) {
  let array = [...arr];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
  }
  return array;
}
console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]), [7, 5, 3, 1, 2, 4, 6, 8, 9]);
console.log(`\n 101 uzdv.....................`);

// https://www.codewars.com/kata/5733d6c2d780e20173000baa/train/javascript
function maxMin(arr1, arr2) {
  const arr = arr2.map((v, i) => v - arr1[i], 0);
  return [Math.max(...arr.map(v => Math.abs(v))), Math.min(...arr.map(v => Math.abs(v)))];
}
// kitas budas 
/*function maxMin(arr1,arr2){
  var diffs = [];
  for (i = 0; i < arr1.length; i++) {
    diffs.push(Math.abs(arr1[i]-arr2[i]))
  }
  return [Math.max(...diffs), Math.min(...diffs)]
}*/
console.log(maxMin([1,3,5],[9,8,7])               , [8,2]);
console.log(maxMin([1,10,100,1000],[0,0,0,0])     , [1000,1]);
console.log(maxMin([10,20,30,40],[111,11,1,-111]) , [151,9]);
console.log(`\n 102 uzdv................`);

// https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript
function tailAndHead(arr) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i] % 10 + Number((arr[i + 1] + '')[0]));
  }
  return result.reduce((a, b) => a * b);
}
// kitas budas
/*function tailAndHead(arr) {

  const test = arr.map((item, index) => {
    const last = item % 10;
    const first = arr[index + 1]
    const firstNum = '' + first
    return last + Number(firstNum[0]);
  })

  test.pop();

  return test.reduce((prev, next) => prev * next);
}*/
console.log(tailAndHead([123,456,789,12,34,56,78]) , 532350);
console.log(tailAndHead([1,2,3,4,5]) , 945);
console.log(tailAndHead([111,2345,66,78,900]) , 7293);
console.log(tailAndHead([35456, 782, 569, 2454, 875]), 12012);