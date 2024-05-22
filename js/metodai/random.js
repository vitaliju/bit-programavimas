// Math.floor(Math.random()) * masyvo.length 
//  ismokti mintinai

// [0...1)

console.log(Math.random());

function moneta() {
    if (Math.random() < 0.5) {
        // [0...0.5)
        return 'Skaicius';
    } else {
        // [0.5...1)
        return 'Herbas';
    }
}
//console.log(moneta());

const metimuKiekis = 100;
let herbai = 0;
for(let i = 0; i < metimuKiekis; i++) {
    const iskrito = moneta();
    if (iskrito === 'Herbas') {
        herbai++
    }
   // console.log(iskrito);
}
console.log('HERBU KIEKIS:', herbai);
console.log('SKAICIU KIEKIS:', metimuKiekis - herbai);

const week = ['Prm', 'Antr', 'Trc', 'Ketv', 'Pnkt', 'Std', 'Sek'];
for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * week.length);
    console.log(week[index]);
}
// Man reikia atsitiktinio skaiciaus intervale nuo 1 iki 10 imtinai
for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * 10 + 1));
}
console.log(`\n.................`);

// ND: Man reikia atsitiktinio skaiciaus intervale [23..617) imtinai

for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * 594 + 23));
}