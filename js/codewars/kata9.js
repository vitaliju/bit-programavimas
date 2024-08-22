console.log(`\n 201 uzdv.................`);
// https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript
function calculateAge(bornYear, thisYear) {
    if (bornYear < thisYear) {
        return (thisYear - bornYear) > 1
            ? `You are ${thisYear - bornYear} years old.`
            : `You are ${thisYear - bornYear} year old.`;
    } else if (bornYear > thisYear) {
        return (bornYear - thisYear) > 1
            ? `You will be born in ${bornYear - thisYear} years.`
            : `You will be born in ${bornYear - thisYear} year.`;
    } else {
        return 'You were born this very year!';
    }
}
// kitas budas
/*function  calculateAge(a,b) {
  return a>b?`You will be born in ${a-b} year${a-b==1?"":"s"}.`:
         a<b?`You are ${b-a} year${b-a==1?"":"s"} old.`:
         `You were born this very year!`
} */
console.log(calculateAge(2012, 2016), "You are 4 years old.");
console.log(calculateAge(1989, 2016), "You are 27 years old.");
console.log(calculateAge(2000, 2090), "You are 90 years old.");
console.log(calculateAge(2000, 1990), "You will be born in 10 years.");
console.log(calculateAge(3400, 3400), "You were born this very year!");
console.log(calculateAge(900, 2900), "You are 2000 years old.");
console.log(calculateAge(2010, 1990), "You will be born in 20 years.");
console.log(calculateAge(2010, 1500), "You will be born in 510 years.");
console.log(calculateAge(2011, 2012), "You are 1 year old.");
console.log(calculateAge(2000, 1999), "You will be born in 1 year.");
console.log(`\n 202 uzdv...................`);

// https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript
const greet = function (name) {
    return `Hello ${name.slice(0, 1).toUpperCase() + (name.slice(1).toLowerCase())}!`;
};
console.log(greet('riley'), 'Hello Riley!');
console.log(`\n 203 uzdv............`);

//https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) {
        sharkSpeed /= 2;
    }
    return pontoonDistance / youSpeed < sharkDistance / sharkSpeed
        ? 'Alive!' : 'Shark Bait!';
}
// kitas budas
/*const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
  let youTime = pontoonDistance / youSpeed
  let sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)
  
  return sharkTime < youTime ? 'Shark Bait!' : 'Alive!'
} */
console.log(shark(12, 50, 4, 8, true), "Alive!");
console.log(shark(7, 55, 4, 16, true), "Alive!");
console.log(shark(24, 0, 4, 8, true), "Shark Bait!");
console.log(`\n 204 uzdv.................`);

// https://www.codewars.com/kata/57faece99610ced690000165/javascript
function remove(string) {
    return string.replace(/!+$/, '');
}
console.log(remove("Hi!"), "Hi");
console.log(remove("Hi!!!"), "Hi");
console.log(remove("!Hi"), "!Hi");
console.log(remove("!Hi!"), "!Hi");
console.log(remove("Hi! Hi!"), "Hi! Hi");
console.log(remove("Hi"), "Hi");
console.log(`\n 205 uzdv..........`);

// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript
function getEvenNumbers(numbersArray) {
    return numbersArray.filter(n => n % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]), [2, 6, 8, 10]);
console.log(getEvenNumbers([1, 2]), [2]);
console.log(getEvenNumbers([12, 14, 15]), [12, 14]);
console.log(getEvenNumbers([13, 15]), []);
console.log(getEvenNumbers([1, 3, 9]), []);
console.log(`\n 206 uzdv.................`);

//https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
function encode(string) {
    return string.replace(/a/g, 1)
        .replace(/e/g, 2)
        .replace(/i/g, 3)
        .replace(/o/g, 4)
        .replace(/u/g, 5);
}

function decode(string) {
    return string.replace(/1/g, 'a')
        .replace(/2/g, 'e')
        .replace(/3/g, 'i')
        .replace(/4/g, 'o')
        .replace(/5/g, 'u');
}
console.log(encode('hello'), 'h2ll4');
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(decode('h2ll4'), 'hello');
console.log(`\n 207 uzdv...................`);

// https://www.codewars.com/kata/559f80b87fa8512e3e0000f5/javascript
function odds(values) {
    return values.filter(n => n % 2 !== 0);
}
console.log(odds([]), []);
console.log(odds([2, 4, 6]), []);
console.log(odds([1, 3, 5]), [1, 3, 5]);
console.log(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5]);
console.log(`\n 208 uzdv..............`);

//https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
function findNextSquare(sq) {
    let num = Math.sqrt(sq);
    if (!Number.isInteger(num)) {
        return -1;
    }
    return (num + 1) ** 2;
}
// kitas budas
/*function findNextSquare(sq) {
  let number = Math.sqrt(sq);
  if(Math.round(number) === number) {
    return Math.pow(number + 1, 2)
  }
  return -1;
} */
console.log(findNextSquare(121), 144);
console.log(findNextSquare(625), 676);
console.log(findNextSquare(319225), 320356);
console.log(findNextSquare(15241383936), 15241630849);
console.log(findNextSquare(155), -1);
console.log(findNextSquare(342786627), -1);
console.log(`\n 209 uzdv....................`);

// https://www.codewars.com/kata/567bf4f7ee34510f69000032/train/javascript
String.prototype.digit = function (n) {
    return /^\d$/.test(this);
};
// kitas budas
/*String.prototype.digit = function() {
  return this.match(/^[0-9]$/) ? true : false;
}; */
console.log(''.digit(), false);
console.log('7'.digit(), true);
console.log(' '.digit(), false);
console.log('a'.digit(), false);
console.log('a5'.digit(), false);
console.log('14'.digit(), false);
console.log(`\n 210 uzdv..............`);