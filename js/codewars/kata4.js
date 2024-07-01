console.log(`\n 104 uzdv.................`);
// https://www.codewars.com/kata/57308546bd9f0987c2000d07
function mirrorImage(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i].toString().split('').reverse().join('') === arr[i + 1].toString()) {
            return [arr[i], arr[i + 1]];
        }
    }
    return [-1, -1];
}
// kitas  budas
/*function mirrorImage(arr) {
    let a = 0;
    let b = 0;
    let result = arr.some((x, i) => {
        a = x, b = arr[i + 1];
        return x === Number(String(b).split('').reverse().join(''));
    });

    return result ? [a, b] : [-1, -1];
}*/
console.log(mirrorImage([11,22,33,33,22,11]) , [33,33]);
console.log(mirrorImage([454,86,57,75,16,88]) , [57,75]);
console.log(mirrorImage([454, 0, 57, 0, 16, 88]), [-1, -1]);
console.log(`\n 105 uzdv.........................`);

// https://www.codewars.com/kata/573023c81add650b84000429/train/javascript
function countGrade(scores) {
    const result = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };
    scores.map(a => {
        if (a >= 100) {
            result['S']++;
        } else if (a >= 90 && a < 100) {
            result['A']++;
        } else if (a >= 80 && a < 90) {
            result['B']++;
        } else if (a >= 60 && a < 80) {
            result['C']++;
        } else if (a >= 0 && a < 60) {
            result['D']++;
        } else if (a < 0) {
            result['X']++;
        }
    });
    return result;
}
// kitas budas
/*function countGrade(scores){
  return {
    'S': scores.filter(function(x){return x == 100}).length,
    'A': scores.filter(function(x){return (x < 100 && x >= 90)}).length,
    'B': scores.filter(function(x){return (x < 90 && x >= 80)}).length,
    'C': scores.filter(function(x){return (x < 80 && x >= 60)}).length,
    'D': scores.filter(function(x){return (x < 60 && x >= 0)}).length,
    'X': scores.filter(function(x){return x == -1}).length,
  };
}*/
console.log(countGrade([50,60,70,80,90,100]) , {S:1, A:1, B:1, C:2, D:1, X:0});
console.log(countGrade([65,75,,85,85,95,100,100]) , {S:2, A:1, B:2, C:2, D:0, X:0});
console.log(countGrade([-1, -1, -1, -1, -1, -1]), { S: 0, A: 0, B: 0, C: 0, D: 0, X: 6 });
console.log(`\n 105 uzdv...........................`);