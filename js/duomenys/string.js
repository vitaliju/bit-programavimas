
//  ""(dviguba), ''(vienguba), ``(backtick)


console.log(12321);

const name = 'Jonas';
console.log(name);

const name2 = 'Maryte';
console.log(name2);

const sakinys = 'Labas rytas, Lietuva!';
console.log(sakinys);

// Vienguba (') kabute.
const kabutes1 = "Vienguba (') kabute.";
console.log(kabutes1);

// Dviguba (") kabute.
const kabutes2 = 'Dviguba (") kabute.';
console.log(kabutes2);

const personName = 'Chuk';
const personSurname = "Norris";
const fullName = personName + ' ' + personSurname;
console.log(fullName);

// Vienguba (') ir dviguba (") kabutes.
const kabutes12 = "Vienguba (') ir " + 'dviguba (") kabutes.';
console.log(kabutes12);

// Vienguba (') ir dviguba (") kabutes.
const kabutes12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabutes12_2 = "Vienguba (') ir dviguba (\") kabutes.";
const kabutes12_3 = 'Vienguba (\') ir dviguba (\") kabutes.';
const kabutes12_4 = "Vienguba (\') ir dviguba (\") kabutes.";

console.log(kabutes12_1);
console.log(kabutes12_2);
console.log(kabutes12_3);
console.log(kabutes12_4);

/* 
Pinigines turinys: 0;
Pinigine papidyta: 10;
Pinigines turinys: 10;
Pinigine papildyta: 90;
Pinigines turinys: 100;
*/

console.clear();


const turinys = 'Pinigines turinys: ';
const papildymas = "Pinigine papildyta: ";

let y = 0;
console.log(turinys + y);
y += 10;
console.log(papildymas + y);
console.log(turinys + y);
y1 = 90;
console.log(papildymas + y1);
console.log(turinys +(y + y1));

/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/

// \r return
// \n new line
// \t tab

const HTML = `<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>`
console.log(HTML);

const backtick = `Labas rytas!`;
console.log(backtick);

const a = 4;
const b = 5;
const c = a + b;

const ats = a + ' + ' + b + ' = ' + c;
const ats2 = `${a} + ${b} = ${c}`;
console.log(ats);
console.log(ats2);

const start = 0;
const finish = 11;
const step = 8;
const answer = 3;

const min1 = 'Skaičių intervale tarp ' + start + ' ir ' + finish + ', besidalijančių be liekanos iš ' + step + ' yra ' + answer + ' vienetai.';
const min2 = `Skaičių intervale tarp ${start} ir ${finish}, besidalijančių be liekanos iš ${step} yra ${answer} vienetai.`;
console.log(min1);
console.log(min2);