const words = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

// FOR
for (let i = 0; i < words.length; i++) {
    const word = words[i];
    console.log(i, word);
}

// FOR-OF
for (const word of words) {
    console.log(word);
}

const students = [
    { name: 'Jonas', age: 99 },
    { name: 'Maryte', age: 88 },
    { name: 'Petras', age: 77 },
    { name: 'Ona', age: 66 },
];

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(i, student);
}

let forOfi = 0;
for (const student of students) {
    console.log('--', forOfi++, student);
}

// WHILE
const words2 = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

let whileI = 0;
while (whileI < words2.length) {
    console.log('while:', whileI, words2[whileI]);
    whileI++;
}

console.log('--------------');

let i = 0;
for (; i < words2.length;) {
    console.log('for:', i, words2[i]);
    i++;
}

let whileI2 = 0;
while (true) {
    console.log(whileI2++);
    if (whileI2 > 10) {
        break;
    }
}

//console.clear();

const marks = [10, 2, 8, 4, 6];
for (let i = 0; i < marks.length; i++) {
    if (marks[i] === 4) {
        console.log(i);
        break;
    }
}

//console.clear();

for (let h = 1; h <= 12; h++) {
    for (let m = 0; m < 60; m += 5) {
        console.log(`${h}:${m}`);
        if (m > 13) {
            break;
        }

        // switch (m) {
        //     case 15:
        //         console.log('Penkiolika');
        //         break;
        // }
    }
}

//console.clear();

const hackerMarks = [10, 'Desimt', 8, 2, 100, 6, 4, -7, 3.14];
let sum = 0;
let count = 0;

// for (const mark of hackerMarks) {
//     if (typeof mark !== 'number'
//         || mark > 10
//         || mark < 1
//         || mark % 1 !== 0) {
//         continue;
//     }
//     sum += mark;
//     count++;
// }

for (const mark of hackerMarks) {
    if (typeof mark === 'number'
        && mark <= 10
        && mark >= 1
        && mark % 1 === 0) {
        sum += mark;
        count++;
    }
}

console.log(sum / count);

// DO-WHILE