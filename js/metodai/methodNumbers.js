console.log('Number.isFinite()');
console.log(Number.isFinite(12346));
console.log(Number.isFinite(-12346));
console.log(Number.isFinite(123.46));
console.log(Number.isFinite(-12.346));
console.log(Number.isFinite(0));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));

console.log('...............');

console.log('isFinite()');
console.log(isFinite(12346));
console.log(isFinite(-12346));
console.log(isFinite(123.46));
console.log(isFinite(-12.346));
console.log(isFinite(0));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));

console.log('.................');

console.log('isNaN()');

console.log(isNaN(12346));
console.log(isNaN(-12346));
console.log(isNaN(123.46));
console.log(isNaN(-12.346));
console.log(isNaN(0));
console.log(isNaN(Infinity));
console.log(isNaN(-Infinity));
console.log(isNaN(NaN));

console.log('....................');

console.log('parseInt()');

const a = '87';
const b = parseInt('87');
console.log(typeof a);
console.log(typeof b); 

console.log(parseInt('12346'));
console.log(parseInt('-12346'));
console.log(parseInt('123.46'));  // skaiciuoja iki kablelio
console.log(parseInt('-12.346'));
console.log(parseInt(0));
console.log(parseInt('Infinity'));
console.log(parseInt('-Infinity'));
console.log(parseInt('NaN'));
console.log(parseInt('Grybu karas'));
console.log(parseInt(''));
console.log(parseInt('123abd'));
console.log(parseInt('acv1223'));
console.log(parseInt('7e3'));

console.log('.................');

console.log('parseFloat()');  // Nustato Infinity, -Infinity ir NaN
console.log(parseFloat('12346'));
console.log(parseFloat('-12346'));
console.log(parseFloat('123.46'));
console.log(parseFloat('-12.346'));
console.log(parseFloat(0));
console.log(parseFloat('Infinity'));
console.log(parseFloat('-Infinity'));
console.log(parseFloat('NaN'));
console.log(parseFloat('Grybu karas'));
console.log(parseFloat(''));
console.log(parseFloat('123asd'));
console.log(parseFloat('asd123'));
console.log(parseFloat('1.23bnm'));
console.log(parseFloat('7e5'));

// 100 -> 1 * 10^2 -> 1e2;
// 1000000 -> 1 * 10^6 -> 1e6;(prie vieneto prideda 6 nulius(pakelia 6 laipsniu))
// 125 -> 1.25 * 10^2 -> 1.25e2;
// 0.001 -> 1 * 10^-3 -> 1e-3;
// 0.00125 -> 1.25 * 10^-3 -> 1.25e-3

console.log('..................');

console.log('Number.toFixed()');  //prideda skaicius po kablelio

const c = 5.12;

console.log(c);
console.log(c.toFixed(2));
console.log(c.toFixed(3));

console.log(parseFloat(c.toFixed(2)));  //stringa pavercia skaiciumi
