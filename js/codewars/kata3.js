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

