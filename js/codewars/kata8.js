console.log(`\n 180 uzdv................`);
// https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript
function check(a, x) {
    return a.includes(x) ? true : false;
}
console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);
console.log(`\n 181 uzdv.................`);

// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript
function minValue(values) {
    const arr = values.sort((a, b) => a - b, 0);
    let nArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            nArr.push(arr[i]);
        }
    }
    return Number(nArr.join(''));
}// kitas budas
/*function minValue(values){
  const n = values
    .filter((e, i, arr) => arr.indexOf(e) === i)
    .sort()
    .join('');
  return Number(n);
} */
console.log(minValue([1, 3, 1]), 13);
console.log(minValue([4, 7, 5, 7]), 457);
console.log(minValue([4, 8, 1, 4]), 148);
console.log(minValue([5, 7, 9, 5, 7]), 579);
console.log(minValue([6, 7, 8, 7, 6, 6]), 678);
console.log(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);
console.log(`\n 182 uzdv................`);