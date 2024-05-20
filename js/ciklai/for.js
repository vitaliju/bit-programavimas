/*
FOR - pagrindinis ciklas(en. loop)
*/

console.log('START');

for (let i=0; i < 10; i++) {
     console.log(i);
}

for (let i=20; i > 10; i -= 2.3) {
    console.log(i);
}

for (let i=200; i > 100; i -= 23) {
    console.log(i / 10);
}
console.log('FINISH');



const colors = ['black', 'green', 'blue', 'violet', 'red', 'orange' ]

for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[i]);
}

console.log('...................');

for (let i = colors.length - 1; i >= 0; i--) {
    console.log(i, colors[i]);
}

console.log('...............');

for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[colors.length - 1 -i]);
}

console.log('.................');

const marks = [10, 8, 5, 6, 7, 9];

let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

console.log(sum / marks.length)
