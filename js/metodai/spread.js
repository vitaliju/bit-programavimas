/* Spread operatorius
   Destrukturizavimas
*/
// Value by refernce
const a = [1, 2, 3];
const b = a;

console.log(a);
console.log(b);

a[0] = 44;
console.log(a);
console.log(b);

b[2] = 66;
console.log(a);
console.log(b);

let c = 7;
let d = c;
console.log(c, d);

c = 9999;
console.log(c, d);
d = 6666;
console.log(c, d);

// ...Spread array

const e =[1, 2, 3];
const f = [...e]; //kopijuoja pirma informacija
console.log(e, f);

e[0] = 222;
console.log(e, f);
f[2] = 555;
console.log(e, f);

const g = [0, ...e, 4, 5];
console.log(g);

const h = [...e, ...e, ...e, 888];
console.log(h);

// ...spread object

const obj1 = {nmae: 'Jonas', age: 56};
const obj2 = obj1;
console.log(obj1);
console.log(obj2);

const obj3 = {brand: 'Audi', model: '80'};
const obj4 = {...obj3};
console.log(obj3);
console.log(obj4);

obj3.brand = 'Volvo';
console.log(obj3);
console.log(obj4);

obj4.model = 'S60';
console.log(obj3);
console.log(obj4);

 const person = {
    name: 'Kostas',
    age: 23,
 };
 const adres = {
    city: 'Palanga',
    street: 'Basnaviciaus',
    number: 41,
 };
 const fullPersonDetails = {
    id: 45122898,
    phone: 85565254,
    ...person,
    ...adres,
    name: 'Saulius', // visada palieka paskutine reiksme
    age:56,
 };
 console.log(fullPersonDetails);
 console.log(fullPersonDetails.name);
 console.log(fullPersonDetails.age);
 console.log(fullPersonDetails.id);

 const k = [1, 2, 6];
 const t = {name: 'Tery', age: 25};

//const r = [...k, ...t]; - i masyva ne spreadina

const l = {...k, ...t};
console.log(l);


