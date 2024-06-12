function well(x) {
  let count = 0;
   
  for (let i = 0; i < x.length; i++) {
   if (x[i] === 'good') {
        count++;
    } 
    
  }
   if (count === 0) {
    return 'Fail!';
   } else if (count < 3) {
    return 'Publish!';
   } else {
    return 'I smell aseries!';
   }
}
console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));
console.log(well(['good', 'good', 'good', 'good']));
console.log(`\n 51 uzdv..................`);

function getDivisorsCnt(n) {
  let count = 0;
   for (let i = n; i > 0; i--) {
      if (n % i === 0) {
        count++;
      }
    }
    return count;
}
console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));
console.log(`\n 52 uzdv............`);

function descendingOrder(n) {
  const num = n.toString().split('');
  const str = Number(num.sort((a, b) => b - a).join(''));
  return str;
}
console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(111));
console.log(descendingOrder(15));
console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));
console.log(`\n 53 uzdv...............`);

function DNAtoRNA(dna) {
    if (dna.includes('T')) {
      return dna.replaceAll('T', 'U');
    } else {
        return dna;
    }
}

// kitas budas
/*function DNAtoRNA(dna) {
   // create a function which returns an RNA sequence from the given DNA sequence
    let rna = "";
    for(let nucleicAcid of dna){
      if (nucleicAcid == 'G') rna += 'G';
      if (nucleicAcid == 'A') rna += 'A';
      if (nucleicAcid == 'C') rna += 'C';
      if (nucleicAcid == 'T') rna += 'U';
    }
    return rna;
}*/

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("GACCGCCGCC"));
console.log(`\n 54 uzdv...............`);

function findEvenIndex(arr) {
  let index = -1;
    
  for (let i = 0; i < arr.length; i++) {
      let lSide = arr.slice(0, i + 1).reduce((a, b) => a - b, 0);
      let rSide = arr.slice(i).reduce((a, b) => a - b, 0);
      if (lSide === rSide) {
          index = i;
      }
  }
    return index;
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([1,2,3,4,5,6]));
console.log(findEvenIndex([20,10,30,10,10,15,35]));
console.log(findEvenIndex([0, 0, 0, 0, 0]));
console.log(`\n 55 uzdv.............`);

function nbYear(p0, percent, aug, p) {
  let year = 0;
  while(p0 < p) {
    p0 += Math.floor((percent / 100 * p0) + aug);
    year++
  }
    return year;
}

// kitas budas
/*function nbYear(p0, percent, aug, p) {
    
  for (let years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
    return years;
}*/

  console.log(nbYear(1500, 5, 100, 5000), 15);
  console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
  console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
  console.log(`\n 56 uzdv..........................`);

function strCount(str, letter) {
  const newStr = str.split('');
  let count = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === letter) {
      count++;
    }
  }
    return count;
}

// kitas budas
/*function strCount(str, letter){  
  return str.split('').filter(a => a==letter).length;*/

console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('',      'z'), 0);
console.log(`\n 57 uzdv...............`);

function differenceInAges(ages) {
  const arr = ages.sort((a, b) => a - b, [0]);
  const avg = arr[arr.length -1] - arr[0];
  let nAges = [arr[0], arr[arr.length -1], avg];
  return nAges; 
}
console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
console.log(`\n 58 uzdv............................`);

function addLength(str) {
  const arr = str.split(' ');
  let count = [];
  for (let i = 0; i < arr.length; i++) {
    count.push(arr[i] + ' ' + arr[i].length);
   }
  return count;
}

// kitas budas
/*function addLength(str) {
  return str.split(' ').map((word) => word + ' ' + word.length);
}*/

console.log(addLength('apple ban'));
console.log(addLength('you will win'));
console.log(`\n 59 uzdv..............`);

function reverseWords(str) {
  const revStr = str.split(' ').reverse().join(' ');
  return revStr;
}

// kitas budas
/*function reverseWords(str){
  const reverse = [];
  const words = str.split(" ");
  for(let i=words.length-1; i>=0; i--){
    reverse.push(words[i]);
    
  }
  return reverse.join(" ");
}*/

console.log(reverseWords("hello world!"                 ));
console.log(reverseWords("yoda doesn't speak like this" ));
console.log(reverseWords("foobar"                       ));
console.log(reverseWords("kata editor"                  ));
console.log(reverseWords("row row row your boat"        ));
console.log(reverseWords(""                             ));
console.log(`\n 60 uzdv..........`);

function multipleOfIndex(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % i === 0 || array[i] === 0) {
      arr.push(array[i]);
    }
    
  }
  return arr;
}

// kitas budas
/*function multipleOfIndex(array) {
  const arr = array.filter((item, index) => item % index === 0 || item === 0);
  return arr;
}*/

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
console.log(multipleOfIndex([11, -11]));
console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]));
console.log(multipleOfIndex([28,38,-44,-99,-13,-54,77,-51]));
console.log(multipleOfIndex([-1,-49,-1,67,8,-60,39,35]));
console.log(multipleOfIndex([0, 2, 3, 6, 9]));
console.log(`\n 61 uzdv................`);

function capitalizeWord(word) {
  const str = word.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
   
  }
  return str.join('');
}

// kitas budas

//const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());

/*function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}*/

console.log(capitalizeWord('word'));
console.log(capitalizeWord('i'));
console.log(capitalizeWord('glasswear'));
console.log(`\n 62 uzv..............`);

function contamination(text, char) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result = char.repeat(text.length);
  }
  return result;
}

// kitas budas

/*function contamination(text, char) {
  return text.split("").fill(char).join("");
}*/

console.log(contamination("abc", "z"));
console.log(contamination("", "z"));
console.log(contamination("abc", ""));
console.log(contamination("_3ebzgh4", "&"));
console.log(contamination("//case", " "));
console.log(`\n 63 uzdv...............`);

function sc(floor){
  const n = floor - 1;
  if (floor >= 10) {
    return 'Aa~ '.repeat(n) + 'Pa!';
  } else if (floor < 10 && floor >=7) {
    return "Aa~ ".repeat(n) + "Pa!";
  } else if (floor >= 6) {
    return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!";
  } else if (floor <= 1) {
    return " ";
  } else if (floor >= 2) {
    return "Aa~ ".repeat(n) + "Pa! Aa!";
  }
}
console.log(sc(2));  
console.log(sc(6)); 
console.log(sc(7)); 
console.log(sc(10)); 
console.log(sc(1)); 
console.log(sc(-1));
console.log(sc(24));
console.log(`\n 64 uzdv..........`);

function giveMeFive(obj) {
  let arr = [];
  for (const key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));
console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}));
console.log(giveMeFive({ Pears: "than", apple: "sweet" }));
console.log(`\n 65 uzdv...............`);

function pickIt(arr){
  let odd= [];
  let even= [];
  for (const i in arr) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }
  
  
  return [odd,even];
}
console.log(pickIt([1,2]));
console.log(pickIt([1,2,3]));
console.log(pickIt([3,2,1]));
console.log(pickIt([10,20,30]));
console.log(pickIt([11,21,31]));
console.log(pickIt([8, 1, 5, 4, 6, 1, 1]));
console.log(`\n 66 uzdv.............`);

function padIt(str, n) {
  let answer = str;
  let i = 0;
  while (i < n) {
    if (n % 2 === 0) {
      answer = answer + '*';
    } else {
      answer = '*' + answer;
    }
    n--;
  }
  return answer;
}
console.log(padIt("a",1));
console.log(padIt("a",2));
console.log(padIt("a",3));
console.log(padIt("a",4));
console.log(padIt("a", 5));
console.log(`\n 67 uzdv..............`);

/*function grabDoll(dolls){
  let bag=[];
  for (let i = 0; i < dolls.length; i++) {
     
    if (bag.length === 3) {
      break;
    }
    if (dolls[i] !== 'Hello Kitty' || dolls[i] !== 'Barbie doll') {
      continue;
      
    } else {
      bag.push(dolls[i]);
    }
  }
  
  return bag;
}*/
// kitas budas

const grabDoll = dolls =>                         
  dolls.filter(i => i == 'Hello Kitty' || i == 'Barbie doll').slice(0, 3);

console.log(["Mickey Mouse", "Hello Kitty", "Snow white"]);
console.log(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]);
console.log(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]);
console.log(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]);
console.log(`\n.68 uzdv..............`);

function howManySmaller(arr,n){
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toFixed(2) < n) {
      count++;
    }
  }
  return count;
}
console.log(howManySmaller([1.234,1.235,1.228],1.24));
console.log(howManySmaller([1.1888,1.1868,1.1838],1.19));
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212));
console.log(`\n 69 uzdv..............`);

// https://www.codewars.com/kata/57274562c8dcebe77e001012
function cutIt(arr){
  let shortest = '';
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    if (str.length < shortest.length || shortest.length === 0) {
      shortest = str;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    let str2 = arr[j];
    newArr.push(str2.slice(0, shortest.length));
  }
   
  return newArr;
}

// kitas budas
/*function cutIt(arr){
  let min = Math.min(...arr.map(x => x.length))
  return arr.map(x => x.slice(0, min))
  
}*/

console.log(cutIt(["ab","cde","fgh"]));
console.log(cutIt(["abc","defgh","ijklmn"]));
console.log(cutIt(["codewars", "javascript", "java"]));
console.log(`\n 70 uzdv...............`);

// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

function firstToLast(str, c) {
  if (str.includes(c)) {
    return str.lastIndexOf(c) - str.indexOf(c);
  } else {
    return -1;
  }
}
console.log(firstToLast("ababc","a"));
console.log(firstToLast("ababc","c"));
console.log(firstToLast("ababc", "d"));
console.log(`\n 71 uzdv.................`);

// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

function fiveLine(s) {
  const str = s.trim();
  return `${str}\n${str}${str} \n${str}${str}${str}\n${str}${str}${str}${str}\n${str}${str}${str}${str}${str}`;
}
console.log(fiveLine("  a"));
console.log(fiveLine("\txy \n"));
console.log(fiveLine("           Ok               "));
console.log(`\n 72 uzdv................`);

//https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript 
function blackAndWhite(arr) {
  if (!Array.isArray(arr)) {
    return "It's a fake array";
  }
  if (arr.includes(5) && arr.includes(13)) {
    return "It's a black array";
  } else if(!(arr.includes(5) && arr.includes(13))) {
    return "It's a white array";
  }
}
console.log(blackAndWhite(5,13));
console.log(blackAndWhite([5,13]));
console.log(blackAndWhite([5, 12]));
console.log(`\n 73 uzdv............`);

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
console.log(animal({name:"dog",legs:4,color:"white"}));
console.log(animal({name:"cock",legs:2,color:"red"}));
console.log(animal({ name: "rabbit", legs: 4, color: "gray" }));
console.log(`\n 74 uzdv..............`);

// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript
/*function alienLanguage(str) {
  const text = str.split(' ').map(s => s.slice(0, -1).toUpperCase() + s.slice(-1).toLowerCase()).join(' ');
  return text;
}*/
// kitas budas
function alienLanguage(str) {
  const text = str.split(' ');
  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].slice(0, -1).toUpperCase() + text[i].slice(-1).toLowerCase();

  }
  return text.join(' ');
}
console.log(alienLanguage("My name is John"));
console.log(alienLanguage("this is an example"));
console.log(alienLanguage("Hello World"));
console.log(alienLanguage("HELLO WORLD"));
console.log(`\n 75 uzdv..............`);

// https://www.codewars.com/kata/577a6e90d48e51c55e000217/train/javascript
function hotpo(n) {
  let count = 0;
  if (n < 2) {
    return 0;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      n = 3 * n + 1;
    } else {
      n /= 2;
    }
    count++;
  }
  return count;
}
console.log(hotpo(1), 0);
console.log(hotpo(5), 5);
console.log(hotpo(6), 8);
console.log(hotpo(23), 15);
console.log(`\n 76 uzdv.................`);

// https://www.codewars.com/kata/582e0e592029ea10530009ce/train/javascript
/*function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name;
}*/
// kitas budas
/*function duckDuckGoose(players, goose) {
  for (let i = 0; i < players.length; i++) {
    if (i === (goose-1) % players.length) {
      return players[i].name;
    }
  }
}
console.log(duckDuckGoose(players, 1),  "a");
console.log(duckDuckGoose(players, 3),  "c");
console.log(duckDuckGoose(players, 10), "z");
console.log(duckDuckGoose(players, 20), "z");
console.log(duckDuckGoose(players, 30), "z");
console.log(duckDuckGoose(players, 18), "g");
console.log(duckDuckGoose(players, 28), "g");
console.log(duckDuckGoose(players, 12), "b");
console.log(duckDuckGoose(players, 2),  "b");
console.log(duckDuckGoose(players, 7), "f");*/
console.log(`\n 77 uzdv...........`);

// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145/train/javascript
function bingo(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 2) {
      count++;
    } else if (a[i] === 7) {
      count++;
    } else if (a[i] === 9) {
      count++;
    } else if (a[i] === 14) {
      count++;
    } else if (a[i] === 15) {
      count++;
    }
  }
   return count >= 5 ? 'WIN' : 'LOSE';
}
//kitas budas

/*function bingo(a) {
  let arr = [2,7,9,14,15]
  for (let i= 0; i < arr.length; i++){
    if(!a.includes(arr[i])) { 
      return 'LOSE'
  }
}
  return 'WIN'
}*/
console.log( bingo([1,2,3,4,5,6,7,8,9,10]), "LOSE");
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]), "WIN");
console.log(`\n 78 uzdv..............`);

// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript
String.prototype.toAlternatingCase = function () {
  let str = '';
  for (let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toLowerCase()) {
      str += this[i].toUpperCase();
    } else {
      str += this[i].toLowerCase();
    }
  }
  return str;
}
console.log("hello world".toAlternatingCase());
console.log("HELLO WORLD".toAlternatingCase());
console.log("hello WORLD".toAlternatingCase());
console.log("HeLLo WoRLD".toAlternatingCase());
console.log("12345".toAlternatingCase());
console.log("1a2b3c4d5e".toAlternatingCase());
console.log("String.prototype.toAlternatingCase".toAlternatingCase());
console.log("Hello World".toAlternatingCase().toAlternatingCase());
console.log(`\n 79 uzdv..............`);

//