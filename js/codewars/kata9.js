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