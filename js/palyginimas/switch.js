const diena = 1;

if (diena === 1) {
    console.log('Pirmadienis');
} else if (diena === 2) {
    console.log('Antradienis');
} else if (diena === 3) {
    console.log('Treciadienis');
} else if (diena === 4) {
    console.log('Ketvirtadienis');
} else if (diena === 5) {
    console.log('Penktadienis');
} else if (diena === 6) {
    console.log('Sestadienis');
} else if (diena === 7) {
    console.log('Sekmadienis');
} else {
    console.log('ERROR');
}

const day = 7;

switch (day) {
    case 1:
        console.log('Pirm');
        break;

    case 2:
        console.log('Antr');
        break;

    case 3:
        console.log('Trec');
        break;

    case 4:
        console.log('Ketv');
        break;

    case 5:
        console.log('Penkt');
        break;

    case 6:
        console.log('Sest');
        break;

    case 7:
        console.log('Sekm');
        break;

    default:
        console.log('ERROR: switch');
        break;
}

// 6g
// autobusas -> marsrutas -> a->b; b->a.
// naudingas kai norimas procesas vyksta is eiles
const stop = 'Rudens2';
const stopList = [];

switch (stop) {
    case 'N. Vilnia1':
        stopList.push('N. Vilnia');

    case 'Tremtiniu1':
        stopList.push('Tremtiniu');

    case 'Rudens1':
        stopList.push('Rudens');

    case 'K. Mindaugo':
        stopList.push('K. Mindaugo');

    case 'Z. Tiltas':
        stopList.push('Z. Tiltas');
        break;

    case 'Lvovo':
        stopList.push('Lvovo');

    case 'Vasaros':
        stopList.push('Vasaros');

    case 'Rudens2':
        stopList.push('Rudens');

    case 'Tremtiniu2':
        stopList.push('Tremtiniu');

    case 'N. Vilnios2':
        stopList.push('N. Vilnios');
}

console.log(stopList.join(' -> '));