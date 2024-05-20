// CIKLAI
//Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):

console.log('START');
// a.( 0..0)
let sum = 0;
for ( let i = 0; i <= 0; i++) {
    sum += i; 
}
console.log(sum);
// b.(0..4)
let sum1 = 0;
for (let i = 0; i <= 4; i++) {
    sum1 += i;
}
console.log(sum1);
// c.(0..100)
let sum2 = 0;
for ( let i = 0; i <= 100; i++) {
    sum2 += i;
}
console.log(sum2);
// d.(574..815)
let sum3 = 0;
for (let i = 574; i <= 815; i++) {
    sum3 += i;
}
console.log(sum3);
// e.(-50..50)
let sum4 = 0;
for (let i = -50; i <= 50; i++) {
    sum4 += i;
}
console.log(sum4);
// f.(-70..30)
let sum5 = 0;
for (let i = -70; i <= 30; i++) {
    sum5 += i;
}
console.log(sum5);
console.log('FINISH');

console.log('.................');

// destytojo sprendimas

function intervalSum(start, finish) {
    let answer = 0;  

    for (let i = start; i <= finish; i++) {
        answer += i;
    }

    return answer;
}

console.log(intervalSum (0, 0));
console.log(intervalSum (0, 4));
console.log(intervalSum (0, 100));
console.log(intervalSum (574, 815));
console.log(intervalSum (-50, 50));
console.log(intervalSum (-70, 30));

console.log('.................');

// reverse string
//panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:

const text = 'MEDIS';
console.log(text);


console.log('...................');

let sum6 = [];
for (let i = 0; i < text.length; i++) {
    sum6 += text[text.length -1 - i];
}
console.log(sum6);

console.log('...............');

// destytojo sprendimas
// 1 pvz

function reversString(text) {
    let answer = '';

    for (let i = 0; i < text.length; i++) {
        answer += text[text.length - 1 - i];
    }

    return answer;
}
console.log(reversString('saule'));
console.log(reversString('draugs'));
console.log(reversString('menas'));

console.log('..............');
// 2 pvz

function reversString(text) {
    let answer = '';

    for (let i = 0; i < text.length; i++) {
        answer = text[i] + answer;
    }

    return answer;
}
console.log(reversString('namas'));
console.log(reversString('bondas'));
console.log(reversString('grybas'));

console.log('...............');
//Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:

// a.

function numberCount(start, finish, step) {
    let answer = 0;
    for (let i = start; i <= finish; i++ ) {
        if (i % step === 0) {
            answer++;
        }
    }
    
    return 'Skaiciu intervale tarp ' + start + ' ir ' + finish + ', besidalijanciu be liekanos is ' + step + ' yra ' + answer + ' vienetai.';
}

console.log(numberCount(0, 11, 3));    
console.log(numberCount(0, 11, 5));    
console.log(numberCount(0, 11, 7));    
console.log(numberCount(8, 31, 3));    
console.log(numberCount(8, 31, 5));    
console.log(numberCount(8, 31, 7));    
console.log(numberCount(-18, 18, 3));    
console.log(numberCount(-18, 18, 5));    
console.log(numberCount(-18, 18, 7));    

console.log('..............');

// Funkcijos
// pirmas

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

console.log('.................');
//antras


function daugyba(number1, number2) {
     let answer = 0;
     answer = number1 * number2;
   
    return answer;
}

console.log(daugyba(1, 2));
console.log(daugyba(3, 2));
console.log(daugyba(1, 3));

console.log('........................');

// antras 2.(uztikrina nuo klaidu)

function daugyba(skaicius1, skaicius2) {
    if (typeof skaicius1 !== 'number') {
        return 'Pirmas skaicius turi buti skaiciaus tipo.';
    }
    if (typeof skaicius2 !== 'number') {
        return 'Antras skaicius turi buti skaiciaus tipo';
    }
    const answer = skaicius1 * skaicius2;
    return answer;
}
console.log(daugyba(4, 5));
console.log(daugyba(4, 'asdS'));
console.log(daugyba([], 5));
console.log(daugyba(Infinity, 5));
console.log(daugyba(4, NaN));
console.log(daugyba(4, [1, 2]));
console.log(daugyba(4, -9));
console.log(daugyba(4, (2, 3).length));
console.log(daugyba(4, [].length));
console.log(daugyba(4, ('')));
console.log(daugyba(4, true));
console.log(daugyba(4, 23.15));
console.log(daugyba(4, -2.3));

console.log('................');

// trecias

let numb = 0;
function skaitmenuKiekisSkaiciuje(numb) {
    
    if (typeof numb !== 'number') {
        return 'Pateikta netinkamo tipo reiksme.';  
    }   
    const nText = '' + numb;
    if (!isFinite(numb)) {
        return 'Pateikta netinkamo tipo reiksme.';
    }
    let size = nText.length;
    if (numb % 1 !== 0) {
        size --;
    }
    if  ( numb < 0) {
        size --;
    }
       return size;
}
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(370601123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.log(skaitmenuKiekisSkaiciuje(-123));
console.log(skaitmenuKiekisSkaiciuje([2]));
console.log(skaitmenuKiekisSkaiciuje(223.21));
console.log(skaitmenuKiekisSkaiciuje(('')));
console.log(skaitmenuKiekisSkaiciuje(0));
console.log (skaitmenuKiekisSkaiciuje(null));
console.log(skaitmenuKiekisSkaiciuje(Infinity));
console.log(skaitmenuKiekisSkaiciuje(undefined));

console.log('..................');

// ketvrtas



function didziausiasSkaiciusSarase(maxN) {
     
    if (typeof maxN === 'number' ) {
        return 'Pateikta netinkamo tipo reiksme.';
    } else if (maxN.length === 0) {
        return 'Pateiktas sarasas negali buti tuscias.';
    }    
    if (!parseFloat(maxN)) {
        return 'Pateikta netinkamo tipo reiksme.';
    }
    let biggest = maxN[0];
    for (let i = 0; i <= maxN.length; i++) {
            if  (maxN[i] > biggest) {
                biggest = maxN[i];
            }
        }
    
     return biggest;
}

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 68, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -10, -20, -45, -2.3]));
console.log(didziausiasSkaiciusSarase([12.3, 4.5, 5.6]))
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase(''));
console.log(didziausiasSkaiciusSarase([]));
console.log(didziausiasSkaiciusSarase(NaN));
console.log(didziausiasSkaiciusSarase(true));
console.log(didziausiasSkaiciusSarase(Infinity));
console.log(didziausiasSkaiciusSarase(-Infinity));



console.log('........................');

// penktas
function isrinktiRaides(text, step) {
    if (typeof text !== 'string') {
        return 'Pirmasis kintamasis netinkamo tipo.';
    }
    if (text.length === 0 && text.length > 100) {
        return 'Pirmasis kintamasis netinkamo tipo.';
    } 
    if (typeof step !== 'number') {
        return 'Antras kintamasis netinkamo tipo.';
    }
    if (step % 1 !== 0) {
        return 'Antras kintamasis netinkamo tipo.';
    }
    if (step <= 0) {
        return 'Antras kintamasis netinkamo tipo.';
    }
    if (step > text.length) {
        return 'Antras kintamasis neturi buti didesnis uz pateikto teksto ilgi.'
    }
    if (!isFinite(step) || isFinite(text)) {
        return 'Antras kintamasis netinkamo tipo.';
    }
    let result = "";
    for (let i = step - 1; i <= text.length; i += step) {
        result += text.charAt(i);
    }
    
    return result;
}
console.log(isrinktiRaides('abcdefg', 2));
console.log(isrinktiRaides('abcdefghjiklp', 3));
console.log(isrinktiRaides('abc', 0));
console.log(isrinktiRaides('abc', 4));
console.log(isrinktiRaides('abc', NaN));
console.log(isrinktiRaides(1562, 4));
console.log(isrinktiRaides('asd', 'jkl'));
console.log(isrinktiRaides('', 3));
console.log(isrinktiRaides(NaN, 3));
console.log(isrinktiRaides('ghjk', 3.6));
console.log(isrinktiRaides('ghjkgjkgutikm', 4));

console.log('.................');
// sestas

function dalyba(number1, number2) {
    if(typeof number1 !== 'number') {
        return 'Pirmas skaicius netinkamo tipo.';
    } 
    if(typeof number2 !== 'number') {
        return 'Antras skaicius netinkamo tipo.';
    } 
    if( number2 === 0) {
        return 'Dalyba is nulio negalima.';
    }
    if (!isFinite(number1)) {
        return 'Pirmas skaicius netinkamo tipo.';
    }
    if (!isFinite(number2)) {
        return 'Antras skaicius netinkamo tipo.';
    }
    
   const answer = number1 / number2;
    
    return answer;
}
console.log(dalyba(5, 2));
console.log(dalyba(6, 3));
console.log(dalyba(0, 3));
console.log(dalyba(6, 0));
console.log(dalyba(6, 'ds'));
console.log(dalyba('as', 6));
console.log(dalyba(-18, 6));
console.log(dalyba(-24, -6));
console.log(dalyba(6, []));
console.log(dalyba([], -6));
console.log(dalyba(24, ('pomidoras')));
console.log(dalyba(24, NaN));
console.log(dalyba(24, -Infinity));
console.log(dalyba(24, Infinity));
console.log(dalyba(null, 6));
console.log(dalyba(6, null));
console.log(dalyba(undefined, 6));
console.log(dalyba(18.6, 6));
console.log(dalyba(18.6, ('')));
console.log(dalyba(0, 0));


console.log('...................');

// pavyzdziai (workshop)

let labas = 'labas454';

function pavadinimas(labas) {
    return console.log('labas454')
}

pavadinimas()


function arLyginis(number) {
 if (number % 2 === 0) {
    console.log(`${number} yra lyginis`);
 } else {
    console.log(`${number} yra nelyginis`);
 }  
}

arLyginis(6)

function printNumber(count) {
    for (let i = 0; i <= count; i++) {
        console.log(i);
    }
}

printNumber(5)

const array = [4, 23, 56, 14, 456];

function biggestNumber(arr) {
let biggest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
       
    }
    return console.log(biggest);
}

biggestNumber(array)

console.log('....................');

/* 1. Sukurti du kintamuosius. 
Jiems priskirti savo mylimo aktoriaus varda ir 
pavarde kaip stringus(Jonas Jonaitis). 
Atspausdinti trumpesni stringa.

*/

function lowString(name, fullName) {
    if (typeof name !== 'string') {
        return 'Netinkamo tipo.';
    }
    if (typeof fullName !== "string") {
        return 'Netinkamo tipo.';
    }
    if (name.length >= fullName.length) {
        return fullName;  
    } else{
        return name;
    }
      
} 
console.log(lowString('Mel', "Gibbson"));
console.log(lowString(123, "Gibbson"));
console.log(lowString(true, "Gibbson"));
console.log(lowString([], "Gibbson"));
console.log(lowString('Mel', NaN));
console.log(lowString('Mel', null));

console.log('.....................');

/* 2. sukurkite 4 kintamuosius, kurie saugotu jusu varda,
 pavarde, gimimo metus ir siuos metus.
  Parasykite koda, kuris pagal gimimo metus apskaiciuotu
   jusu amziu ir naudodamas vardo ir pavardes kintamuosius 
   atspausdintu toki sakini: 
   s"As esu Vardas Pavarde. Man yra XX metu."

*/


 
function ageCount(name, fullName, birthday, thisYear) {
    let ageSum = 0;
    for (let i = 0; i <= thisYear; i++){
        ageSum = i - birthday;
    }
    return 'As esu ' + name + ' ' + fullName + '.' + ' Man yra ' + ageSum + ' metai(u).';
}

console.log(ageCount('Vitalijus', 'Bielkinas', 1979, 2024));

