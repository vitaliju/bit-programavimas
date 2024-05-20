/*
IF - palyginimas

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ... else if () {} 
if () {} ... else if () {} ... else {}

Palyginimmo operatoria:
VISI: <, >, <=, >=, ===, !== (! - yra neigimas, pvz ne lygu)
NAUDOJAMI: <, >, >=, <=(dazniausiai naudojami su number), 
           ===, !== (naudojami su stringais) 
NENAUDOJAMI: ==, !=

*/

// 1 pavyzdys
const age = 99;
const ageLimit = 18;

if (age > ageLimit) {
    console.log('Sorry, bet esi per jaunas....');
}

// 2 pavyzdys
if (age > ageLimit) {   
  console.log('Ok, uzeik ir pasismagink ;)');
} else {
    console.log('Sorry, bet esi per jaunas')
}

// 3pavyzdys
if (4 > 2) {
    console.log('TAIP, daugiau');
} else {
    console.log('NE, maziau ');
}

// 4 pavyzdys
const color1 = 'red';
const color2 = 'blue';
const color3 = 'orange';
const color4 = 'violet';
const color5 = 'green';
const color6 = 'black';
const color7 = 'yellow';

let translation = '';

if (color1 === 'red') {
    translation = 'Raudona';
} else if (color1 === 'blue') {
    translation = 'Melyna';
} else if (color1 === 'violet') {
    translation = 'Violetine';
} else if (color1 === 'yellow') {
    translation = 'Geltona;'
} else {
    translation = '...';
}

console.log('>>>', translation);

function colorTranslation(color) {
    let translation = '';

    if (color === 'red') {
        translation = 'Raudona';
    } else if (color === 'blue') {
        translation = 'Melyna';
    } else if (color === 'violet') {
        translation = 'Violetine';
    } else if (color === 'yellow') {
        translation = 'Geltona;'
    } else {
        translation = '...';
    }
    

    return color + ' -> ' + translation;
}

console.log(colorTranslation('red'));
console.log(colorTranslation('blue'));
console.log(colorTranslation('orange'));
console.log(colorTranslation('violet'));
console.log(colorTranslation('green'));
console.log(colorTranslation('black'));
console.log(colorTranslation('yellow'));