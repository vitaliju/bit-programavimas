// matrix

const matrix = [10, 5, 6, 9];

console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
    console.log(i, '-', matrix[i] );
}

// n-matis masyvas
// nth

const student = [
    [10, 5, 9, 4],
    [7, 8, 9, 4, 5,6],
    [6, 4, 9]
];
const jonoPazymiai = student[0];
console.log(jonoPazymiai);

for (let i = 0; i < jonoPazymiai.length; i++) {
    console.log('jonas', jonoPazymiai[i]);
}
 // kitas pvz.
 console.log(student[0]);

 for (let i = 0; i < student[0].length; i++) {
    console.log('jonas', student[0][i]);
 }

const marytesPazymiai  = student[1];
console.log(marytesPazymiai);

for (let i = 0; i < marytesPazymiai.length; i++) {
    console.log('maryte', marytesPazymiai[i]);
}

console.log('.......................');

console.log(student);
console.log('.....................');
console.log(student[2]);
console.log('.....................');
console.log(student[2][2]);
console.log('........................');

const gorilla = [
    [1, 2, 3],
    [4, 8, [4, 9], 6],
    [
        [8, 9, 7],
        [4, 5, [ 6, 8, 3], 6]
    ],
];
console.log(gorilla[2]);
console.log('...................');
console.log(gorilla[2][0]);
console.log(gorilla[2][0][0]);
console.log(gorilla[2][0][1]);
console.log(gorilla[2][0][2]);
console.log('.......................');
console.log(gorilla[2][1]);
console.log(gorilla[2][1][0]);
console.log(gorilla[2][1][1]);
console.log(gorilla[2][1][2]);
console.log(gorilla[2][1][2][0]);
console.log(gorilla[2][1][2][1]);
console.log(gorilla[2][1][2][2]);
console.log(gorilla[2][1][3]);
