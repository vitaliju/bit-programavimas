function sum(a = 200, b = 65) {
    return a + b;
}
console.log(sum(4, 9));
console.log(sum(4));
console.log(sum());

function header(isHomepage = false) {
    return isHomepage ? 'Home page' : 'Other page';
}
console.log(header(true));
console.log(header());