/*
OBJECT - objektas
*/

const empty = {};
console.log(empty);

const stud1 = {
    name: 'Darius',
    age: 41,
    isMarried: true,
};
console.log(stud1);
console.log(stud1.name);
console.log(stud1.age);
console.log(stud1.isMarried);

const stud2 = {
    name: 'Laura',
    age: 30,
    isMarried: false,
};
console.log(stud2);
console.log(stud2.name);
console.log(stud2.age);
console.log(stud2.isMarried);

// "Sveiki as esu VARDAS, man XX metu ir esu/nesu vedes"

const students = [
    {name : 'Jonas', age: 32, isMarried: true},
    {name : 'Onute', age: 25, isMarried: false},
    {name : 'Petras', age: 56, isMarried: false},
    {name : 'Giedre', age: 66, isMarried: true},
];

function introduction(stud) {
    const status = stud.isMarried ? 'esu' : 'nesu';
    return `Sveiki as esu ${stud.name}, man ${stud.age} ir ${status} vedes.`
}
for (let i = 0; i < students.length; i++ ) {
    console.log(introduction(students[i]));
}
// Standartine objekto sintakse
// vs.
// Supaprastinta objekto sintakse

const stud3 = {
    name: 'Petras',
    age: 77,
    isMarried: false,
    eargthyjudsgrfeargtsrytu: 'nesamone',
};

// Supaprastinta objekto sintakse
console.log(stud3.name);
console.log(stud3.age);
console.log(stud3.isMarried);

// Standartine objekto sintakse
console.log(stud3['name']);
console.log(stud3['age']);
console.log(stud3['isMarried']);

const key = 'age';
console.log(stud3.key);
console.log(stud3.eargthyjudsgrfeargtsrytu);
console.log(stud3['age']);
console.log(stud3[key]);

//console.clear();
function giveMe(data, key) {
    return data[key];
}

console.log(giveMe({ name: 'Jonas', age: 99 }, 'name'));
console.log(giveMe({ name: 'Jonas', age: 99 }, 'age'));
console.log(giveMe({ name: 'Jonas', age: 99 }, 'isMarried'));
console.log(giveMe({ title: 'Svente', page: 1, size: 3 }, 'title'));
console.log(giveMe({ title: 'Svente', page: 1, size: 3 }, 'page'));
console.log(giveMe({ title: 'Svente', page: 1, size: 3 }, 'size'));
console.log(giveMe({ title: 'Svente', page: 1, size: 3 }, 'xxx'));