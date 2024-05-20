/*
Boolean - logines reiksmes

- true
- false

Boolean logikos operatoriai:
- && - and;
- || - or;
- ! - no;  pvz. !true = false, !false = true, !!true = true, !!false = false;


/* Kaip interpertuojami kiti duomenu tipai 
ir ju reiksmes, jei jos yra naudojamos 
lyg boolean'ai?
*/

/* String:
- jei tuscias - false
- jei ne tuscias - true

Number:
- jei NaN - false
- jei nulis - false
- jei ne nulis - true
- jei Infinity - true
- jei -Infinity - true

Array:
- jei tuscias - true
- jei ne tuscias - true

Object:
- jei tuscias - true
- jei ne tuscias - true

Undefined - false
null - false

*/
 
const userName = 'Jonas';
const age = 55;
const IssunShining = true;
const hasFuel = false;

console.log(IssunShining);
console.log(hasFuel);

console.log('KAIP NENAUDOTI:', true + true + true + true);
console.log('KAIP NENAUDOTI:', true * false);

console.log('........');
console.log(true && false);
console.log(false && true);
console.log(true && true);
console.log(false && false);

// VAIKINAS
// kada eisiu i pasimatyma?
// - turi buti grazus
// - turi buti jaunas
// - turi buti turtingas

const isBeutiful = false;
const isYoung = false;
let isRich = false;

const willIGoTo = isBeutiful || isYoung || isRich;
console.log('>>>' ,  willIGoTo);

isRich = true;

const willIGoTo2 = isBeutiful || isYoung || isRich;
console.log('>>>' , willIGoTo2);

console.log('................');

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);

console.log(false || false);

console.log('..............');


console.log(true && true || true);
console.log(true && true || false);
console.log(true && false || true);
console.log(true && false || false);
console.log(false && true || true);
console.log(false && true || false);
console.log(false && false || true);
console.log(false && false || false);

console.log('...................');

console.log(true || true && true);
console.log(true || true && false);
console.log(true || false && true);
console.log(true || false && false);
console.log(false || false && false);
console.log(false || false && true);
console.log(false || true && false);
console.log(false || true && true);

console.log(!true);
console.log(!false);

// daugiau kaip 2! nerasyti  (svarbu)

console.clear();

console.log(true && true && true && true);
console.log(true && true && true && false);
console.log(true && true && false && true);
console.log(true && false && true && true);
console.log(false && true && true && true);
console.log(true && true && false && false);
console.log(true && false && true && false);
console.log(true && false && false && true);
console.log(false && false && true && true);
console.log(false && truee && false && true);
console.log(false && true && true && false);
console.log(false && false && false && true);
console.log(false && false && true && false);
console.log(false && true && false && false);
console.log(true && false && false && false);
console.log(false && false && false && false);

console.log('...............................');

console.log(true || true || true || true);
console.log(true || true || true || false);
console.log(true || true || false || true);
console.log(true || false || true || true);
console.log(false || true || true || true);
console.log(false || false || false || true);
console.log(false || false || true || false);
console.log(false || true || false || false);
console.log(true || false || false || false);
console.log(true || true || false || false);
console.log(true || false || true || false);
console.log(true || false || false || true);
console.log(false || false || true || true);
console.log(false || true || false || true);
console.log(false || true || true || false);
console.log(false || false || false || false);

console.log('...............................');

console.log(true && true && true || true);
console.log(true && true && true || false);
console.log(true && true && false || true);
console.log(true && false && true || true);
console.log(false && true && true || true);
console.log(true && true && false || false);
console.log(true && false && true || false);
console.log(true && false && false || true);
console.log(false && true && true || false);
console.log(false && true && false || true);
console.log(false && false && true || true);
console.log(false && false && false || false);
console.log(false && false && false|| true);
console.log(false && false && true || false);
console.log(false && true && false || false);
console.log(true && false && false || false);

console.log('.............................');

console.log(true && true || true && true);
console.log(true && true || true && false);
console.log(true && true || false && true);
console.log(true && false || true && true);
console.log(false && true || true && true);
console.log(true && true || false && false);
console.log(true && false || true && false);
console.log(true && false || false && true);
console.log(false && false || true && true);
console.log(false && true || false && true);
console.log(false && true || true && false);
console.log(false && true || false && false);
console.log(false && false || true && false);
console.log(false && false || false && true);
console.log(false && false || false && false);
console.log(true && false || false && false);

console.log('...............................');

console.log(true || true && true && true);
console.log(true || true && true && false);
console.log(true || true && false && true);
console.log(true || false && true && true);
console.log(false || true && true && true);
console.log(true || true && false && false);
console.log(true || false && true && false);
console.log(true || false && false && true);
console.log(false || false && true && true);
console.log(false || true && false && true);
console.log(false || true && true && false);
console.log(false || false && false && true);
console.log(false || false && true && false);
console.log(false || true && false && false);
console.log(false || false && false && false);
console.log(true || false && false && false);

console.log('...............................');

console.log(true || true || true && true);
console.log(true || true || true && false);
console.log(true || true || false && true);
console.log(true || false || true && true);
console.log(false || true || true && true);
console.log(true || true || false && false);
console.log(true || false || true && false);
console.log(true || false || false && true);
console.log(false || false || true && true);
console.log(false || true || false && true);
console.log(false || true || true && false);
console.log(false || false || false && true);
console.log(false || false || true && false);
console.log(false || true || false && false);
console.log(false || false || false && false);
console.log(true || false || false && false);

console.log('.............................');

console.log(true || true && true || true);
console.log(true || true && true || false);
console.log(true || true && false || true);
console.log(true || false && true || true);
console.log(false || true && true || true);
console.log(true || true && false || false);
console.log(true || false && true || falses);
console.log(true || false && false || true);
console.log(false || false && true || true);
console.log(false || true && false || true);
console.log(false || true && true || false);
console.log(false || false && false || true);
console.log(false || false && true || false);
console.log(false || true && false || false);
console.log(false || false && false || false);
console.log(true || false && false || false);

console.log('..............................');

console.log(true && true || true || true);
console.log(true && true || true || false);
console.log(true && true || false || true);
console.log(true && false || true || true);
console.log(false && true || true || true);
console.log(true && true || false || false);
console.log(true && false || true || false);
console.log(true && false || false || true);
console.log(false && false || true || true);
console.log(false && true || false || true);
console.log(false && true || true || false);
console.log(false && false || false || true);
console.log(false && false || true || false);
console.log(false && true || false || false);
console.log(false && false || false || false);
console.log(true && false || false || false);

console.log('............................');


const jMass = 78;
const jHeigth = 1.69;
const mMass = 92;
const mHeigth = 1.95;
const jBmi = jMass / jHeigth**2;
const mBmi = mMass / mHeigth**2;
console.log("John's BMI is" + ' ' + jBmi);
console.log("Mark's BMI is" + ' ' + mBmi);

const jMass2 = 95;
const jHeigth2 = 1.88;
const mMass2 = 85;
const mHeigth2 = 1.76;
const jBmi2 = jMass2 / jHeigth2**2;
const mBmi2 = mMass2 / mHeigth2**2;
console.log("John's BMI is" + ' ' + jBmi2);
console.log("Mark's BMI is" + ' ' + mBmi2);

const johnBMI = 27;
const markBMI = 24;
const markHigherBMI = markBMI > johnBMI;
console.log("Mark's higher BMI than John" + ": " + markHigherBMI);

const johnBMI1 = 26;
const markBMI1 = 27;
const markHigherBMI1 = markBMI1 > johnBMI1;
console.log("Mark's higher BMI than John" + ": " + markHigherBMI1);