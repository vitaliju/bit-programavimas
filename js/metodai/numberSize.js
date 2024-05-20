function numberSize(n) {
    if (typeof n !== 'number') {
        return 'Blogas duomenu tipas.';
    }
    
    const nAsText = '' + n;  //Infinity
    
    if (!isFinite(n)) {
        return 'Blogas duomenu tipas';
    }

    let size = nAsText.length;

    if (n % 1 !== 0) {     // Nustato ar skaicius desimtainis
        size --;
    }

    if (n < 0) {     // Nustato ar skaicius teigiamas
        size --;
    }
    return size;
}

console.log(numberSize(0));
console.log(numberSize(2));
console.log(numberSize(123));
console.log(numberSize(-123));
console.log(numberSize(12.53));
console.log(numberSize(-12.53));

console.log(numberSize(NaN));
console.log(numberSize(Infinity));
console.log(numberSize(-Infinity));

console.log(numberSize());
console.log(numberSize(true));
console.log(numberSize(false));
console.log(numberSize('pomidoras'));
console.log(numberSize(''));
console.log(numberSize([]));
console.log(numberSize([1, 2, 3]));
console.log(numberSize(['labas']));
console.log(numberSize(['labas', 'rytas']));
console.log(numberSize(undefined));
console.log(numberSize(null));
console.log(numberSize(numberSize));