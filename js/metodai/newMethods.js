const text = 'Labas rytas';

String.prototype.firstSymbol = function () {
    return this[0];
}

console.log(text[0]);
console.log(text.firstSymbol());

String.prototype.isUpperCase = function () {
    const str = '' + this;
    return str === str.toUpperCase();
}
console.log('ABC'.isUpperCase());
console.log('Abc'.isUpperCase());
console.log('abc'.isUpperCase());

console.log(3.254.toFixed(2));

Number.prototype.double = function () {
    return this * 2;
}
console.log((7).double());