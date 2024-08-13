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

//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
function longestConsec(strarr, k) {
    let longest = '';
    for (let i = 0; i <= strarr.length - k; i++) {
        let str = strarr.slice(i, i + k).join('');
        if (str.length > longest.length) {
            longest = str;
        }
    }
    return k > 0 ? longest : '';
}
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta");
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh");
console.log(longestConsec([], 3), "");
console.log(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
console.log(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu");
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "");
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz");
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15), "");
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0), "");
console.log(`\n 183 uzdv.................`);

// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript
function array(string) {
    return string.split(',').slice(1, -1).join(' ') || null;
}
// kitas budas
/*function array(string) {
    let arr = string.split(',');

    if (arr.length < 3) {
        return null;
    }

    return arr.slice(1, arr.length - 1).join(' ');
}*/
console.log(array(''), null);
console.log(array('1'), null);
console.log(array('A1,B2'), null);
console.log(array('1,2,3'), '2');
console.log(array('1,2,3,4'), '2 3');
console.log(array('A1,B2,C3,D4,E5'), 'B2 C3 D4');
console.log(array('A,1,23,456,78,9,Z'), '1 23 456 78 9');
console.log(`\n 184 uzdv...................`);

// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/train/javascript
function nearestSq(n) {
    return Math.pow(Math.round(Math.sqrt(n)), 2);
}
// kitas budas
/*function nearestSq(n) {
    if (n === 1) {
        return n
    }
    let z = Math.sqrt(n)
    let res = Math.round(z)
    let result = res * res
    return result
}*/
console.log(nearestSq(1), 1, "nearestSq(1) = 1");
console.log(nearestSq(2), 1, "nearestSq(2) = 1");
console.log(nearestSq(10), 9, "nearestSq(10) = 9");
console.log(nearestSq(111), 121, "nearestSq(111) = 121");
console.log(nearestSq(9999), 10000, "nearestSq(9999) = 10000");
console.log(`\n 185 uzdv.................`);

// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript
function noOdds(values) {
    return values.filter(n => n % 2 === 0);
}
console.log(noOdds([0, 1]), [0]);
console.log(noOdds([0, 1, 2, 3]), [0, 2]);
console.log(`\n 186 uzdv................`);

// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript
function largestPairSum(numbers) {
    const result = numbers.sort((a, b) => b - a);
    return result[0] + result[1];
}
console.log(largestPairSum([10, 14, 2, 23, 19]));
console.log(largestPairSum([-100, -29, -24, -19, 19]));
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]));
console.log(largestPairSum([-10, -8, -16, -18, -19]));
console.log(`\n 187 uzdv...........`);

//https://www.codewars.com/kata/559590633066759614000063/train/javascript
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([5]));
console.log(`\n 188 uzdv..............`);

//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
function findAverage(arr) {
    return arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0;
}
console.log(findAverage([1, 1, 1]), 1);
console.log(findAverage([1, 2, 3]), 2);
console.log(findAverage([1, 2, 3, 4]), 2.5);
console.log(`\ 189 uzdv...........`);

// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
function isAnagram(test, original) {
    return test.toLowerCase().split('').sort().join('') ===
        original.toLowerCase().split('').sort().join('');
}
console.log(isAnagram("foefet", "toffee"), true);
console.log(isAnagram("Buckethead", "DeathCubeK"), true);
console.log(isAnagram("Twoo", "WooT"), true);
console.log(isAnagram("dumble", "bumble"), false);
console.log(isAnagram("ound", "round"), false);
console.log(isAnagram("apple", "pale"), false);

// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
function count(string) {
    let sum = {};
    const str = string.split('').map(i => sum[i] = sum[i] + 1 || 1);
    return sum;
}
// kitas budas
/*unction count (string) {  
  let result = {};
  for(let i = 0; i < string.length; i++) {
    result[string[i]] = result[string[i]] + 1 || 1;
  }

return result;
} */
console.log(count(''), {});
console.log(count('a'), { 'a': 1 });
console.log(count('ab'), { 'a': 1, 'b': 1 });
console.log(count('aba'), { 'a': 2, 'b': 1 });
console.log(count('ABC'), { 'A': 1, 'B': 1, 'C': 1 });
console.log(`\n 190 uzdv..............`);

//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
function multiplicationTable(size) {
    let y = [];
    for (let i = 1; i <= size; i++) {
        let x = [];
        for (let j = 1; j <= size; j++) {
            x.push(i * j);
        }
        y.push(x);
    }
    return y;
}
console.log(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
console.log(`\n 191 uzdv..............`);

// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
function gimme(triplet) {
    return [...triplet].indexOf(triplet.sort((a, b) => a - b)[1]);
}
// kitas budas
/*const gimme = function (triplet) {
  let index = 0;
  let max = Math.max(...triplet);
  let min = Math.min(...triplet);
  for(let i = 0; i < triplet.length; i++){
    if(triplet[i] !== max && triplet[i] !== min){        
      index = i;
    }
  }
  return index;
}; */
console.log(gimme([2, 3, 1]), 0);
console.log(gimme([2.1, 3.2, 1.4]), 0);
console.log(gimme([5.9, 10.4, 14.2]), 1);
console.log(gimme([-5, -10, -14]), 1);
console.log(gimme([-2, -3.2, 1]), 0);
console.log(`\n 192 uzdv................`);