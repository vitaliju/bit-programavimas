/* UNARY - vienybe (a++, a--)
   BINARY - dvejybe (a + b)
   TERNARY - trejybe (a?b:c)
*/ 

let a = 0;
if (4 < 2) {
   a = 10;
} else {
   a = 5;
}
console.log(a);

const b = 4 > 2 ? 888 : 666;
console.log(b);

const c = 4 < 2 ? 112 : 445;
console.log(c);

const d = 1 + (4 > 2 ? 112 : 445);
console.log(d);

const e = 4 < 2 ? 113 : 4 + 5;
console.log(e);

const f = 'Labas'.length < 5 ? 'ilgas' : 'trumpas';
console.log(f);

const gIndex = 2 + (1 < 2 ? 0 : 5);
const g = 'pomidoras'[gIndex];
console.log(g); 

/* Jeigu skaicius yra teigiamas, tai ji sumuojame su savimi
   Jeigu neigiamas, tai daudiname is 10
*/

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;
const n = 7;
const ats2 = n > 0 ? sum(n, n) : diff(n, 10);

let ats = null;

if(n > 0)  {
   ats = sum(n, n);
} else {
   ats = diff(n, 10);
}
console.log(ats);
console.log(ats2);

/* Jeigu tekstas yra trumpas(t.y. iki 5 simboliu),
   tai grazink pirma simboli, priesingu atveju paskutini
*/

