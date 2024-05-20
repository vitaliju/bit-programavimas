/*
FUNCTION - funkcija, perpanaudojama logika.
() - parametru blokas
{} - logikos blokas

Input => Function => Output
*/

/* function doSomething(parametras) {
    // 1) Input (parametru) validavimas
    // 2) Vykdoma logika
    // 3) Gauto rezultato validavimas
    // 4) Graziname rezultata
}

function funkcijosPavadinimas() {
    return undefined;
}

const a = funkcijosPavadinimas();
console.log(a);

function empty() {
   return undefined;
}

console.log(empty());


function giveMeFive() {
    return 5;
}

function giveMeSix() {
    return 6;
}
console.log(giveMeFive());
console.log(giveMeSix());

/* 
Input: 
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!

Laba diena, as esu Maryte Melnikaite!
Laba diena, as esu Petras Jankis!
Laba diena, as esu Ona Francis!
*/

function intro(name, lastname) {
    return 'Laba diena, as esu ' + name + ' ' + lastname + '!';
}

console.log(intro('Jonas', 'Jonaitis'));
console.log(intro('Maryte', 'Melnikaite'));
console.log(intro('Petras', 'Jankis'));
console.log(intro('Ona', 'Francis'));

/*
Input:
- pirmas skaicius = 6
- antras skaicius = 5

Output:
30
*/

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

console.log(multiply(6, 5));
console.log(multiply(7, 6));
console.log(multiply(9, 4));
console.log(multiply(-4, 5));
console.log(multiply(3.14, 2));

/* function multiply(a, b) {
    /*
    - jeigu, pirmas parametras nera skaicius
        - graziname klaidos pranesima
    - jeigu, antras parametras nera skaicius
        - graziname klaidos pranesima
        
    - Atskirame kintamaje issisaugome sandaugos reiksme
    - Graziname sandaugos reiksme
    */
//    } 

// number konvertavimas i string  
// funkction someSize(n) {
//    const nAsText = '' + n;   // '' + 2 = '2';
//    return nAsText.length;
//}


// Mano vardas yra Antanas, man 45 metai ir as megstu cepelinus.
// Mano vardas yra Gedas, man 56 metai ir as megstu sporta.

function iLike(name, age, item) {
    return 'Mano vardas yra ' + name + ', man '+ age + ' metai ir as megstu ' + item + '.';
}

console.log(iLike('Antanas'));
console.log(iLike('Gedas', 56));
console.log(iLike('Audrius', 45, 'sporta'));
console.log(iLike('Ona', 65, 'balionus'));



function price(value) {
   
    
    const PVM = 21;
    const priceIncrease = 1 + PVM / 100;
    const priceForSale = value * priceIncrease;
    return priceForSale;
}

console.log(price(100));
console.log(price(120));


function words(w1, w2, w3) {
    let sentence = 'Dictionary: ';
    sentence += w1;
    sentence += ', ';
    sentence += w2;
    sentence += ', ';
    sentence += w3;
    sentence += '.';
   
    return sentence;
}

console.log(words('labas', 'rytas', 'Lietuva'));

//  Sukurkite funkcija, kuri priimtu parametra 'name'. Jos tiklas narsykleje atspausdinti teksta 'Labas,' ir salia jo perduota varda pvz. "Labas, Jonai".

function vardas(name) {
    return console.log(`Labas ${name}`);
} 
vardas("Mantai")

// Sukurkite funkcija, kuri priimtu viena parametra (teksta) ir grazintu atsakyma, kiek simboliu yra tame tekste. Is funkcijos gauta rezultata atvaizduoti narsykleje.

function howMany(text) {
    return console.log(text.length);
}

howMany("Labas")


