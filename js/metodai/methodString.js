const word = 'Labas rytas Lietuva!';

console.log(word);
console.log('Labas rytas Lietuva!');

console.log(word[0]);
console.log('Labas rytas Lietuva!'[0]);
console.log('Labas rytas Lietuva!'[2]);

console.log(word.charAt(0));
console.log('Labas rytas Lietuva!'.charAt(0));
console.log('Labas rytas Lietuva!'.charAt(2));

console.log(word.charCodeAt(0));
console.log(word.charCodeAt(1));   // rodo simboliu koda
console.log(word.charCodeAt(2));
console.log(word.charCodeAt(3));

console.log('..................');
console.log('concat()');  // Sujungia STRINGUS

console.log('Labas'.concat('rytas'));
console.log('Labas'.concat('rytas', 'Lietuva'));
console.log('Labas'.concat('rytas').concat('Lietuva'));
console.log('Labas'.concat(' rytas ').concat('Lietuva'));

console.log('.............');
console.log('endsWith()');  // Parodo kokiu simboliu baigiasi STRINGAS

console.log('Labas'.endsWith('x'));
console.log('Labas'.endsWith('vv'));
console.log('Labas'.endsWith('s'));
console.log('Labas'.endsWith('as'));
console.log('Labas'.endsWith('bas'));
console.log('Labas'.endsWith('abas'));
console.log('Labas'.endsWith('Labas'));
console.log('Labas'.endsWith('labas'));
console.log('Labas'.endsWith('LAbas'));

console.log('...........................');
console.log('startsWith()');  // Parodo kokiu simboliu prasideda STRINGAS

console.log('Labas'.startsWith('x'));
console.log('Labas'.startsWith('bb'));
console.log('Labas'.startsWith('l'));
console.log('Labas'.startsWith('dfghhh'));
console.log('Labas'.startsWith('L'));
console.log('Labas'.startsWith('La'));
console.log('Labas'.startsWith('Lab'));
console.log('Labas'.startsWith('Labas'));

console.log('....................');
console.log('includes()');  // parodo ar yra norimas simbolis STRINGE

console.log('Pomidoras'.includes('x'));
console.log('Pomidoras'.includes('gg'));
console.log('Pomidoras'.includes('P'));
console.log('Pomidoras'.includes('o'));
console.log('Pomidoras'.includes('as'));
console.log('Pomidoras'.includes('doras'));
console.log('Pomidoras'.includes('Pomi'));
console.log('Pomidoras'.includes('ido'));
console.log('Pomidoras'.includes('sa'));

console.log('.....................');
console.log('indexOf()'); // Parodo simbolio pozicija STRINGE

console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('cc'));
console.log('Pomidoras'.indexOf('dffg'));
console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('i'));
console.log('Pomidoras'.indexOf('om'));
console.log('Pomidoras'.indexOf('dor'));
console.log('Pomidoras'.indexOf('mido'));

console.log('.......................');
console.log('repeat()');  // STRINGO PAKARTOJIMAS

console.log('A'.repeat(5));
console.log('O'.repeat(20));
console.log('Labas'.repeat(8));
console.log('labas'.repeat(1));
console.log('labas'.repeat(NaN));
console.log('labas'.repeat(0));
console.log('sdf'.repeat(3.14));  //suapvalina i mazesne puse
console.log('sdf'.repeat(3.99));

console.log('..................');
console.log('replace()');  // Pakeicia esamus simbolius i kitus norimus

console.log('Pomidoras'.replace('P', 'D'));
console.log('Pomidoras'.replace('o', 'x'));
console.log('Pomidoras'.replace('o', '-').replace('o', '-'));
console.log('Pomidoras'.replace('omid', 'ukul'));
console.log('Pomidoras'.replace('m', '-x-'));
console.log('Pomidoras'.replace('AAAAA', 'ZZZZZ'));

console.log('.....................');
console.log('replaceAll()'); // Pakeicia visus pasikartojancius simbolius

console.log('Pomidoras'.replaceAll('o', 'i'));
console.log('Paaaaaaaaaa'.replaceAll('a', 'i'));
console.log('reeeee'.replaceAll('e', 'u'));

console.log('.....................');
console.log('slice()');  // Nupjauna STRINGO simbolius

console.log('Pyragelis'.slice(0));
console.log('Pyragelis'.slice(1));
console.log('Pyragelis'.slice(2));
console.log('Pyragelis'.slice(3));

const p = 'Vasara';

console.log(p.slice(-3));  // Nupjauna simbolius nuo galo
console.log(p.slice(p.length -3));

// Nupjauna simbolius nuo start iki finish

console.log('Pyragelis'.slice(2, 4));
console.log('Pyragelis'.slice(2, 5));
console.log('Pyragelis'.slice(2, 6));
console.log('Pyragelis'.slice(2, 100));

const dalis = 'Pyragelis'.slice(2, 100);
console.log(dalis,dalis.length);

console.log('.............');
 console.log('split()'); // Zirkles iskerpa simbolius

 const sakinys = "Labas rytas Lietuva";
 const zodis = sakinys.split(' ');
 console.log(zodis[0]);
 console.log(zodis[1]);
 console.log(zodis[2]);
 console.log('Labas rytas Lietuva'.split('r'));
 console.log('Labas rytas Lietuva'.split('L'));
 console.log('Labas rytas Lietuva'.split('a'));
 console.log('Labas rytas Lietuva'.split('ab'));
 console.log('Labas rytas Lietuva'.split('x'));
 console.log('Labas rytas Lietuva'.split(''));

// sakinys => tuscias / ne tuscias
// split => tuscias / ne tuscias
// split => (ne)buvo kur kirpti

console.log('..................');
 console.log('toLowerCase()');  // Keicia simbolius ididziasias ir mazasias raides
console.log('Pomidoras'.toUpperCase(''));
console.log('Pomidoras'.toLowerCase(''));

console.log('.....................');
console.log('trim()'); // Panaikina tarpus priekyje ir gale
console.log('"' + 'Pomidoras'.trim() + '"');
console.log('"' + 'Labas rytas'.trim() + '"');
console.log('"' + 'Labas rytas  '.trim() + '"');
console.log('"' + 'Labas rytas  '.trim() + '"');
console.log('"' + '  Labas rytas  '.trim() + '"');
console.log('"' + '  Labas   rytas  '.trim() + '"');  // NEpanaikina tarpo per viduri

console.log('.................');
console.log('trimEnd()'); //Panaikina tarpus tik gale

console.log('"' + 'Labas vakaras '.trimEnd() + '"');
console.log('"' + '  Labas vakaras '.trimEnd() + '"');

console.log('.........');
console.log('trimStart()'); // Pnaikina tarpus pradzioje

console.log('"' + 'Pomidoras  '.trimStart() + '"');
console.log('"' + '  Pomidoras'.trimStart() + '"');

console.log('.....................');

const text = 'Labas rytas, Lietuva! Kaip tu laikais mieloji?';
const dictionary = text.replaceAll(',', '')
                       .replaceAll('!', '')
                       .replaceAll('?', '')
                       .split(' ')
console.log(dictionary);