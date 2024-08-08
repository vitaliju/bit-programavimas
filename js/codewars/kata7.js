console.log(`\n 161 uzdv............`);

// https://www.codewars.com/kata/580a094553bd9ec5d800007d/train/javascript
function apple(x) {
    return Math.pow(x, 2) > 1000
        ? "It's hotter than the sun!!"
        : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}
console.log(apple('50'), 'It\'s hotter than the sun!!');
console.log(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.');
console.log(`\n 162 uzdv...........`);

// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
const encryptThis = function (text) {
    if (text === '') {
        return '';
    } else {
        let str = text.split(' ');
        let encrypt = str.map(el => {
            let a = el.split('');
            a[0] = el.charCodeAt(0);
            [a[1], a[a.length - 1]] = [a[a.length - 1], a[1]];
            return a.join('')
        });
        return encrypt.join(' ');
    }
}
// kitas budas
/* const encryptThis = function(text) {
  let result = [];
  
  for (let i of text.split(' ')) {
    i = [...i];
    
    if (i.length <= 2) {
      i[0] = i[0].charCodeAt();
    }
    else {
      [i[0], i[1], i[i.length - 1]] = [i[0].charCodeAt(), i[i.length - 1], i[1]];
    } 
    
    result.push(i.join(''));
  }
  
  return result.join(' ');
} */
console.log(encryptThis("A"), "--> 65");
console.log(encryptThis("A wise old owl lived in an oak"), "--> 65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
console.log(encryptThis("The more he saw the less he spoke"), "--> 84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
console.log(encryptThis("The less he spoke the more he heard"), "--> 84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
console.log(encryptThis("Why can we not all be like that wise old bird"), "--> 87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
console.log(encryptThis("Thank you Piotr for all your help"), "--> 84kanh 121uo 80roti 102ro 97ll 121ruo 104ple");
console.log(`\n 163 uzdv..................`);

// https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript
function toBinary(n) {
    return Number(n.toString(2));
}
console.log(toBinary(1), 1);
console.log(toBinary(2), 10);
console.log(toBinary(3), 11);
console.log(toBinary(5), 101);
console.log(`\n 164 uzdv.............`);

// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript
function sumOfMinimums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.min(...arr[i]);
    }
    return sum;
}
// kitas budas
/*function sumOfMinimums(arr) {
  return arr.reduce((a, b) => a + Math.min(...b), 0);
} */
console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9);
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76);
console.log(`\n 165 uzdv...........`);

// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
function findNb(m) {
    let sum = 0;
    while (m > 0) {
        sum++;
        const cubes = Math.pow(sum, 3);
        m = m - cubes;
    }
    if (Math.sign(m) === -1) {
        return (-1);
    }
    return sum;
}
console.log(findNb(4183059834009), 2022);
console.log(findNb(24723578342962), -1);
console.log(findNb(135440716410000), 4824);
console.log(findNb(40539911473216), 3568);
console.log(`\n 166 uzdv.............`);

// https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let count = (age1 * age1) + (age2 * age2) + (age3 * age3) +
        (age4 * age4) + (age5 * age5) + (age6 * age6) + (age7 * age7) + (age8 * age8);
    let result = Math.sqrt(count) / 2;
    return Math.floor(result);
}
// kitas budas
/*function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
  return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
} */
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);
console.log(`\n 167 uzdv............`);

//https://www.codewars.com/kata/55d277882e139d0b6000005d/javascript
const findAverage = function (nums) {
    return nums.reduce((a, b) => a + b) / nums.length;
}
console.log(findAverage([1]), 1);
console.log(findAverage([1, 3, 5, 7]), 4);
console.log(`\n 168 uzdv..........`);

// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
function rowSumOddNumbers(n) {

}
console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(42), 74088);
console.log(`\n 169 uzdv.................`);