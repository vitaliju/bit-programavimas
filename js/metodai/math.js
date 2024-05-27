console.log(Math.E);
console.log(Math.PI);

// Math bibliotekos metodai
console.log(`\n Abs.........`);
console.log(Math.abs(7));
console.log(Math.abs(-7));  // grazina skaiciu be minuso
console.log(Math.abs(-Math.PI));

console.log(`\n Cbrt...................`);
// parodo skaiciaus kubine reiksme
console.log(Math.cbrt(6));
console.log(Math.cbrt(8));
console.log(Math.cbrt(64));
console.log(Math.cbrt(125));

console.log(`\n Ceil............`);
// su apvalina i didesne puse
console.log(Math.ceil(5));
console.log(Math.ceil(0));
console.log(Math.ceil(-5));
console.log(Math.ceil(3.14));
console.log(Math.ceil(3.99));
console.log(Math.ceil(-3.14));
console.log(Math.ceil(-3.99));

console.log(`\n Floor...........`);
// suapvalina i mazesne puse
console.log(Math.floor(6));
console.log(Math.floor(0));
console.log(Math.floor(-6));
console.log(Math.floor(3.5));
console.log(Math.floor(3.69));
console.log(Math.floor(-3.99));
console.log(Math.floor(-3.14));

console.log(`\n Round...............`);
// apvalina 0.5 tikslumu
console.log(Math.round(6));
console.log(Math.round(0));
console.log(Math.round(-6));
console.log(Math.round(2.13));
console.log(Math.round(2.00001));
console.log(Math.round(2.9999));
console.log(Math.round(2.50001));

// ignuoruoja skaicius po kablelio
console.log('\n Trunc ----------------');
console.log(Math.trunc(5));
console.log(Math.trunc(0));
console.log(Math.trunc(-5));

console.log(Math.trunc(-3.00001));
console.log(Math.trunc(-3.49999));
console.log(Math.trunc(-3.5));
console.log(Math.trunc(-3.50001));
console.log(Math.trunc(-3.99999));

console.log(Math.trunc(7.00001));
console.log(Math.trunc(7.49999));
console.log(Math.trunc(7.5));
console.log(Math.trunc(7.50001));
console.log(Math.trunc(7.99999));

console.log('\n Exp ----------------');
// pakelia skaiciu nurodytu laipsniu
console.log(Math.exp(17));
console.log(Math.E ** 17);

console.log('\n Fround ----------------');
// skaicius po kablelio rodo kopiuteriniu tikslumu
console.log(Math.fround(5));
console.log(Math.fround(0));
console.log(Math.fround(-5));
console.log(Math.fround(3.1415));
console.log(Math.fround(-3.1415));
console.log(Math.fround(0.1));
console.log(Math.fround(-0.1));

console.log('\n Hypot ----------------');
console.log(Math.hypot(3, 4));
console.log(Math.sqrt(3 ** 2 + 4 ** 2));
console.log(Math.hypot(1, 1, 1, 1));

console.log('\n Imul ----------------');
// sudaugina skaiciu 32bit sistemoje
console.log(Math.imul(10, 17));

console.log('\n Max ----------------');
//nurodo didziausia skaiciu(nedraugauja su masyvais)
console.log(Math.max(1, 3));
console.log(Math.max(-1, -3));
console.log(Math.max(-1, -3, 7, 10, 3.14));

console.log('\n Min ----------------');
//nurodo maziausia skaiciu(nedraugauja su masyvais)
console.log(Math.min(1, 3));
console.log(Math.min(-1, -3));
console.log(Math.min(-1, -3, 7, 10, 3.14));

const marks = [-1, -3, 7, 10, 3.14];
console.log(Math.min(marks), ':(');

console.log('\n Pow ----------------');
//skaiciu pakelia nurodytu laipsniu
console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));
console.log(Math.pow(2, 2));
console.log(2 ** 3);
console.log(2 ** 5);

console.log('\n Random ----------------');
console.log('Intervale nuo 0 iki 1 -> [0..1)');
// niekada nebus = 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(0.9999999999999999);

console.log(`\nSign....................`);// grazina 1 arba-1
console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.sign(2.333));
console.log(Math.sign(-2.333));
console.log(Math.sign(0)); // grazina 0 arba -0
console.log(Math.sign(-0));
console.log(Math.sign(Infinity));
console.log(Math.sign(-Infinity));
console.log(Math.sign(NaN)); // graina NaN

console.log(`\n Sqrt..................`);
console.log(Math.sqrt(4)); // istraukia sakni
console.log(Math.sqrt(81));
console.log(Math.sqrt(9));
console.log(Math.sqrt(-4), '2i');
console.log(Math.sqrt(-9), '3i');

// i * i = -1