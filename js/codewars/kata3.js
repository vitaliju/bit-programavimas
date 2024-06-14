console.log(`\n 81 uzdv..........`);
// https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    } else if (exam > 75 && projects >= 5) {
        return 90;
    } else if (exam > 50 && projects >= 2) {
        return 75;
    } else {
        return 0;
  }
}
console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);
console.log(`\n 82 uzdv........`);

// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
function number(busStops) {
    let entres = 0;
    let down = 0;
    const passengers = busStops.map((arr) => {
        entres += arr[0];
        down += arr[1];
    });
    return entres - down;
}
// kitas budas
/*function number(busStops){
  let num = 0;
  for(let i = 0;i < busStops.length; i++){
      num += busStops[i][0] - busStops[i][1]
  }
  return num;
}*/
console.log(number([[10,0],[3,5],[5,8]]),5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
console.log(number([[0, 0]]), 0);
console.log(`\n 83 uzdv............`);

// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
function findMultiples(integer, limit) {
    let arr = [];
    for (let i = integer; i <= limit; i+= integer) {
        arr.push(i);
    }
    return arr;
}
console.log(findMultiples(5, 25), [5, 10, 15, 20, 25]);
console.log(findMultiples(1, 2), [1, 2]);
console.log(findMultiples(5, 7), [5]);
console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24]);
console.log(findMultiples(11, 54), [11, 22, 33, 44]);
console.log(`\n 84 uzdv...............`);


