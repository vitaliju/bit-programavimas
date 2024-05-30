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
console.log(`n 58 uzdv............................`);

