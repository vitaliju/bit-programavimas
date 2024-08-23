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

// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/train/javascript
function validateUsr(username) {
    return username.length >= 4
        && username.length <= 16
        && username.toLowerCase() === username
        && username.match(/[a-z]|_|\d/g).length === username.length;
}
//kitas budas
/*function validateUsr(username) {
  
    // - `^`        Start from the beginning of the string.
    // - `[]`       Allow any character specified, including...
    // - `a-z`      anything from a to z,
    // - `0-9`      anything from 0 to 9,
    // - `_`        and underscore.
    // - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
    // - `$`        End the string right after specified amount of allowed characters is given.
  
const validator = /^[a-z0-9_]{4,16}$/;

return validator.test(username);
} */
console.log(validateUsr('asddsa'), true);
console.log(validateUsr('a'), false);
console.log(validateUsr('Hass'), false);
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
console.log(validateUsr(''), false);
console.log(validateUsr('____'), true);
console.log(validateUsr('012'), false);
console.log(validateUsr('0123'), true);
console.log(validateUsr('1234567890abcdefg'), false);
console.log(validateUsr('p1pp1'), true);
console.log(validateUsr('asd43 34'), false);
console.log(validateUsr('asd43_34'), true);
console.log(validateUsr('abcd'), true);
console.log(`\n 211 uzdv..............`);

// https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
function billboard(name, price = 30) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum += price;
    }
    return sum;
}
console.log(billboard("Jeong-Ho Aristotelis"), 600);
console.log(billboard("Abishai Charalampos"), 570);
console.log(billboard("Idwal Augustin"), 420);
console.log(billboard("Hadufuns John", 20), 260);
console.log(billboard("Zoroaster Donnchadh"), 570);
console.log(billboard("Claude Miljenko"), 450);
console.log(billboard("Werner Vígi", 15), 165);
console.log(billboard("Anani Fridumar"), 420);
console.log(billboard("Paolo Oli"), 270);
console.log(billboard("Hjalmar Liupold", 40), 600);
console.log(billboard("Simon Eadwulf"), 390);
console.log(`\n 212 uzdv...........`);

https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
function warnTheSheep(queue) {
    if (queue[queue.length - 1] === 'wolf') {
        return 'Pls go away and stop eating my sheep';
    } else {
        let index = queue.findIndex((i) => i === 'wolf');
        return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
    }
}
// kitas budas
//const warnTheSheep = (queue) => queue.reverse()[0] === 'wolf' 
//? 'Pls go away and stop eating my sheep' 
//: `Oi! Sheep number ${queue.indexOf('wolf')}! You are about to be eaten by a wolf!`; 
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]),
    "Oi! Sheep number 2! You are about to be eaten by a wolf!"
);
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]),
    "Oi! Sheep number 5! You are about to be eaten by a wolf!"
);
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]),
    "Oi! Sheep number 6! You are about to be eaten by a wolf!"
);
console.log(warnTheSheep(["sheep", "wolf", "sheep"]),
    "Oi! Sheep number 1! You are about to be eaten by a wolf!"
);
console.log(warnTheSheep(["wolf"]),
    "Pls go away and stop eating my sheep"
);
console.log(warnTheSheep(["sheep", "sheep", "wolf"]),
    "Pls go away and stop eating my sheep"
);
console.log(`\n 213 uzdv.................`);

// https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript
function getDrinkByProfession(param) {
    const drink = param.toLowerCase();
    return drink === 'jabroni' ? 'Patron Tequila'
        : drink === 'school counselor' ? 'Anything with Alcohol'
            : drink === 'programmer' ? 'Hipster Craft Beer'
                : drink === 'bike gang member' ? 'Moonshine'
                    : drink === 'politician' ? 'Your tax dollars'
                        : drink === 'rapper' ? 'Cristal' : 'Beer';
}
// kitas budas
/*function getDrinkByProfession(param){
    const list = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
    }
    return list[param.toLowerCase()]||"Beer";
} */
console.log(getDrinkByProfession("jabrOni"), "Patron Tequila");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine",);
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars");
console.log(getDrinkByProfession("rapper"), "Cristal",);
console.log(getDrinkByProfession("pundit"), "Beer");
console.log(getDrinkByProfession("Pug"), "Beer");
console.log(`\n 214 uzdv......................`);

// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
function divCon(x) {

    let numSum = 0;
    let strSum = 0;
    x.map(v => (typeof v === 'string' ? (strSum += v * 1) : (numSum += v)));
    return numSum - strSum;
}
//kitas budas
/*function divCon(x){
  let numValue = 0;
  let strValue = 0;
  
  for(let i = 0; i < x.length; i++) {
    if(typeof(x[i]) === 'string' ) {
      strValue += parseFloat(x[i]);
    } else if(typeof(x[i]) === 'number' ) {
      numValue += x[i];
    }
  }
  return numValue - strValue;
} */
console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);
console.log(`\n 215 uzdv....................`);

// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
function isSortedAndHow(array) {
    return array.every((x, i) => i === 0 || array[i] >= array[i - 1])
        ? 'yes, ascending'
        : array.every((x, i) => i === 0 || array[i] <= array[i - 1])
            ? 'yes, descending' : 'no';
}
// kitas budas
/*const isSortedAndHow = array => {
  let ascending = array.filter((e, i, a) => e > a[i+1]).length == 0
  let descending = array.filter((e, i, a) => e < a[i+1]).length == 0
  
  return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
} */
console.log(isSortedAndHow([1, 2]), 'yes, ascending')
console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending')
console.log(isSortedAndHow([4, 2, 30]), 'no')
console.log(`\n 216 uzdv.....................`);

// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
};
console.log(binaryArrayToNumber([0, 0, 0, 1]), 1);
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2);
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15);
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6);
