/*
Arrays - masyvas, sarasas, listas, matrica
  push - masyvo metodas

*/

const empty = [];
console.log(empty);

const mark = [10, 2, 8, 4, 6];
console.log(mark);

const mark1 = 10;
const mark2 = 2;
const mark3 = 8; 
const mark4 = 4;
const mark5 = 6;

const sum = mark1 + mark2 + mark3 + mark4 + mark5;
const count = 5;
const average = sum / count;

console.log(average); 



const marks = [10, 2, 8, 4, 6];
console.log(marks);

const sum1 = mark[0] + mark[1] + mark[2] + mark[3] + mark[4];
const count1 = marks.length;
const average1 = sum1 / count1;

console.log(sum1);
console.log('Kiekis', count1);
console.log('Vidurkis', average1);


let sum2 = 0;
let index = 0;

sum2 += marks[index++];
sum2 += marks[index++];
sum2 += marks[index++];
sum2 += marks[index++];
sum2 += marks[index++];
console.log(sum2);

console.log('.............');

// NAMU DARBAI
// pirmas etapas, sukurti kintamuosius
const a = 5;
console.log(a);
const b = 10;
console.log(b);
const c = 6;
console.log(c);
const sum3 = a + b + c;
console.log(sum3);
// 2 etapas 

if (5 > 10) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (5 < 10) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (5 === 10) {
    console.log ('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (5 !== 10) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (5 >= 10) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (5 <= 10) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

console.log('...............');

// 1 etapas

const word = 'Siandien';
console.log(word);
const word2 = 'sauletas';
console.log(word2);
const word3 = 'dangus';
console.log(word3);
const sakinys = word + " " + word2 + " " + word3 + ".";
console.log(sakinys);
console.log(word, word.length);
console.log(word2, word2.length);
console.log(word3, word3.length);

// 2 etapas

if (word2.length > word3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (word2.length < word3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (word2.length >= word3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (word2.length <= word3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (word2.length === word3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
} if (word2.length !== word3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

console.log('.....................');

// 1 etapas

const numb = [5, 8 , 11, 9, 3];
console.log(numb);
const numb2 = [7, 11, 13, 4, 8, 1];
console.log(numb2);
const numb3 = [3, 12, 6, 13, 20, 19, 22];
console.log(numb3);

let sum4 = 0;
let index2 = 0;
sum4 += numb[index2++];
sum4 -= numb[index2++];
sum4 += numb[index2++];
sum4 -= numb[index2++];
sum4 += numb[index2++];
console.log(sum4);

let sum5 = 0;
let index3 = 0;
sum5 += numb2[index3++];
sum5 -= numb2[index3++];
sum5 += numb2[index3++];
sum5 -= numb2[index3++];
sum5 += numb2[index3++];
sum5 -= numb2[index3++];
console.log(sum5);

let sum6 = 0;
let index4 = 0;
sum6 += numb3[index4++];
sum6 -= numb3[index4++];
sum6 += numb3[index4++];
sum6 -= numb3[index4++];
sum6 += numb3[index4++];
sum6 -= numb3[index4++];
sum6 += numb3[index4++];
console.log(sum6);

console.log(numb2.length);
console.log(numb3.length);

// 2 etapas

if (numb2.length > numb3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (numb2.length < numb3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (numb2.length >= numb3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (numb2.length <= numb3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (numb2.length === numb3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (numb2.length !== numb3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kaarta.');
}

console.log('...................');

// destytojo sprendimas

const numbSum = numb[0] - numb[1] + numb[2] - numb[3] + numb[4];
console.log(numbSum);
const numbSum2 = numb2[0] - numb2[1] + numb2[2] - numb2[3] + numb2[4] - numb2[5];
console.log(numbSum2);
const numbSum3 = numb3[0] - numb3[1] + numb3[2] - numb3[3] + numb3[4] - numb3[5] + numb3[6];
console.log(numbSum3);




console.log('...................');

// 1 etapas

const text = ['pauksciai', 'ciulba', 'ir', 'zaliuoja', 'Medziai'];
console.log(text);
const text2 = ['geles', 'geltonas', 'mylejo', 'kuri', 'Mergaite'];
console.log(text2);
const text3 = ['kita', 'pateikti', 'netenkina', 'salyga', 'Jei'];
console.log(text3);

let sum7 = 0;
sum7 = text[4];
sum7 += ' ';
sum7 += text[3];
sum7 += ' ';
sum7 += text[2];
sum7 += ' ';
sum7 += text[1];
sum7 += ' ';
sum7 += text[0];
console.log(sum7);

let sum8 = 0;
sum8 = text2[4];
sum8 += ', ';
sum8 += text2[3];
sum8 += ' ';
sum8 += text2[2];
sum8 += ' ';
sum8 += text2[1];
sum8 += ' ';
sum8 += text2[0];
console.log(sum8);

let sum9 = 0;
sum9 = text3[4];
sum9 += ' ';
sum9 += text3[3];
sum9 += ' ';
sum9 += text3[2];
sum9 += ', ';
sum9 += text3[1];
sum9 += ' ';
sum9 += text3[0];
console.log(sum9);

// 2 etapas
console.log(text.length);
console.log(text2.length);

if ( text.length > text2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (text.length < text2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (text.length >= text2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (text.length <= text2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (text.length === text2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
} if (text.length !== text2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}
 
console.log('...................');

// destytojo sprendimas
const textTotal = text[4] + ' ' + text[3] + ' ' + text[2] + ' ' + text[1] + ' ' + text[0];
console.log(textTotal);
const text2Total = text2[4] + ', ' + text2[3] + ' ' + text2[2] + ' ' + text2[1] + ' ' + text[0];
console.log(text2Total);
const text3Total = text3[4] + ' ' + text3[3] + ' ' + text3[2] + ', ' + text3[1] + ' ' + text3[0];
console.log(text3Total);

console.log('.............');

// PAVYZDYS



const jonoPazymiai = [10, 2, 5, 9];
const marytesPazymiai = [8, 6, 4, 10];
const petroPazymiai = [7, 9, 10, 9, 3, 2];


function marksAverage(marks) {
    if (marks.length === 0) {
        return 'Nera pazymiu.';
    }
     
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
         return 'Vidurkis:' + (sum / marks.length);
     
}

console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

console.log(marytesPazymiai);
console.log(marksAverage(marytesPazymiai));

console.log(petroPazymiai);
console.log(marksAverage(petroPazymiai));

