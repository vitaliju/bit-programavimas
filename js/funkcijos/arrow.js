/*
ARROW FUNCTIO - rodykline funkcija, lambda funkcija
*/

const n1 = 5;
const n2 = 7;

// Function declaration

function sum(a, b) {
    return a + b;
}

console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// Kintamajam priskiriama anonimine funkcija

const diff = function(a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);

// arrow function(vietoj function galima panaudoti =>)

const multi = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

// arrow function
// jeigu logikos bloke yra tik 1 procedura
// tai galima nerasyti 'return'

const div = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${div(n1, n2)}`);

// arrow finction
// jeigu parametru bloke tik 1 parametras
// tai galima nerasyti () 

const squere = n => n * n;
console.log(`${n1} * ${n1} = ${squere(n1)}`);
console.log(`${n2} * ${n2} = ${squere(n2)}`);

const hi = name => `Hi my name is ${name} !`;
console.log('gedas');
console.log('Darius');

const abbr = (a, b) => a[0] +'.' + b[0] + '.';
const abbr2 = (a, b) => `${a[0]}.${b[0]}.`;

console.log(abbr('chukas', 'norris'));
console.log(abbr2('jon', 'smith'));
