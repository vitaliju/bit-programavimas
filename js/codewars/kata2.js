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

