/*
duomens tipo nustatymas
TYPEOF - duomens tipo nustatymo operatorius
*/

//function multiply(a, b) {
    /*
    - jeigu, pirmas parametras nera skaicius
        - graziname klaidos pranesima
    - jeigu, antras parametras nera skaicius
        - graziname klaidos pranesima
        
    - Atskirame kintamaje issisaugome sandaugos reiksme
    - Graziname sandaugos reiksme
*/
//}

function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'Pirmas parametras turi buti skaiciaus tipo.';
    }
    if (typeof b !== 'number') {
        return 'Antras parametras turi buti skaiciaus tipo.';
    }

    const answer = a * b;
    return answer;
}

console.log(multiply(15, 2));
console.log(multiply(15, NaN));
console.log(multiply(15, Infinity));
console.log(multiply(15, []));

console.log('....................');


function empty() {

}
console.log(typeof 5);
console.log( typeof -45);
console.log(typeof 23.65);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof 'labas');
console.log(typeof '');
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof [2, 3, 4]);
console.log(typeof ['s', 'a', 'l']);
console.log(typeof empty);

console.log('.................');
// Kaip patikrinti ar dirbu su masyvais(object)

console.log(Array.isArray([]));
console.log(Array.isArray([1, 5, 2]));
console.log(Array.isArray('labas'));
console.log(Array.isArray(true));
console.log(Array.isArray(empty));

console.log('...................');

// Ar tikrinamas dalykas yra null

if ('labas' === null) {
    console.log('taip');
} else {
    console.log('NE');
}

console.log('.............');

const a = 12563;

console.log(a);

if (typeof a === 'string') {
    console.log('As dirbu su STRING');
} else {
    console.log('As dirbu ne su STRING:');
}

