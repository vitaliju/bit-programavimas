console.log(`\n 104 uzdv.................`);
// https://www.codewars.com/kata/57308546bd9f0987c2000d07
function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i].toString().split("").reverse().join("") === arr[i + 1].toString()
    ) {
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
console.log(mirrorImage([11, 22, 33, 33, 22, 11]), [33, 33]);
console.log(mirrorImage([454, 86, 57, 75, 16, 88]), [57, 75]);
console.log(mirrorImage([454, 0, 57, 0, 16, 88]), [-1, -1]);
console.log(`\n 105 uzdv.........................`);

// https://www.codewars.com/kata/573023c81add650b84000429/train/javascript
function countGrade(scores) {
  const result = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };
  scores.map((a) => {
    if (a >= 100) {
      result["S"]++;
    } else if (a >= 90 && a < 100) {
      result["A"]++;
    } else if (a >= 80 && a < 90) {
      result["B"]++;
    } else if (a >= 60 && a < 80) {
      result["C"]++;
    } else if (a >= 0 && a < 60) {
      result["D"]++;
    } else if (a < 0) {
      result["X"]++;
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
console.log(countGrade([50, 60, 70, 80, 90, 100]), {
  S: 1,
  A: 1,
  B: 1,
  C: 2,
  D: 1,
  X: 0,
});
console.log(countGrade([65, 75, , 85, 85, 95, 100, 100]), {
  S: 2,
  A: 1,
  B: 2,
  C: 2,
  D: 0,
  X: 0,
});
console.log(countGrade([-1, -1, -1, -1, -1, -1]), {
  S: 0,
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  X: 6,
});
console.log(`\n 105 uzdv...........................`);
// https://www.codewars.com/kata/572fdeb4380bb703fc00002c
function isolateIt(arr) {
  return arr.map((x) => {
    if (x.length % 2 === 0) {
      return x.slice(0, x.length / 2) + "|" + x.slice(x.length / 2);
    } else if (x.length % 2 !== 0) {
      return x.slice(0, x.length / 2) + "|" + x.slice(x.length / 2 + 1);
    }
  });
}
// kitas budas
/*function isolateIt(arr) {
    return arr.map((element) => {
        return element.slice(0, element.length / 2) + "|" + element.slice(-element.length / 2)
    });
}*/
console.log(isolateIt(["abcd", "efgh"]), ["ab|cd", "ef|gh"]);
console.log(isolateIt(["abcde", "fghij"]), ["ab|de", "fg|ij"]);
console.log(isolateIt(["1234", "56789"]), ["12|34", "56|89"]);
console.log(`\n 106 uzdv.....................`);
// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
function sumMul(n, m) {
  let sum = 0;
  if (n < 1 || m < 0) {
    return "INVALID";
  }
  for (let i = n; i <= m; i += n) {
    sum += i;
  }
  return sum;
}
console.log(sumMul(0, 0), "INVALID");
console.log(sumMul(2, 9), 20);
console.log(sumMul(4, -7), "INVALID");
console.log(`\n 107 uzdv.................`);
// https://www.codewars.com/kata/545993ee52756d98ca0010e1/train/javascript
function none(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i]) === true) {
      return false; // check `fun` for `item` - if `fun` has `item`, return false.
    }
  }
  return true;
}
console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 5;
  }),
  true
);
console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 4;
  }),
  false
);
console.log(`\n 108 uzdv..................`);

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
function countPositivesSumNegatives(input) {
  let positive = 0;
  let negative = 0;
  if (input === 0 || input.length < 1) {
    return [];
  } else {
    input.map((item) => {
      if (item > 0) {
        positive++;
      } else if (item < 0) {
        negative += item;
      }
    });
  }
  return [positive, negative];
}

// kitas budas
/*function countPositivesSumNegatives(input) {
  if(!input || input.length == 0) return [];

  let positiveCount = input.reduce((sum, item) => item > 0 ? ++sum : sum, 0);
  let negativeSum = input.reduce((sum, item) => item < 0 ? sum + item : sum, 0);
  
  return [positiveCount, negativeSum];
}*/
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
console.log(`/n 109 uzdv............................`);

// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
function countSmileys(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === ":)" ||
      arr[i] === ":D" ||
      arr[i] === ";-D" ||
      arr[i] === ":~)" ||
      arr[i] === ";~D" ||
      arr[i] === ":-D" ||
      arr[i] === ";)"
    ) {
      count++;
    }
  }
  return count;
}
// kitas budas
/*function countSmileys(arr) {
  let smileys = 0;
  let validSmileys = [":D", ";D", ":)", ";)", ":-D", ";-D", ":-)", ";-)", ":~D", ";~D", ":~)", ";~)"];
  for (let i = 0; i < arr.length; i++) {
    if (validSmileys.includes(arr[i])) {
      smileys++;
    }
  }
  return smileys;
}*/
console.log(countSmileys([]), 0);
console.log(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
console.log(`\n 110 uzdv...........................`);

// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript
function arithmetic(a, b, operator) {
  if (operator === "add") {
    return a + b;
  } else if (operator === "subtract") {
    return a - b;
  } else if (operator === "multiply") {
    return a * b;
  } else {
    return a / b;
  }
}
// kitas budas
/*function arithmetic(a, b, operator){
  switch(operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}*/
console.log(
  arithmetic(1, 2, "add"),
  3,
  "'add' should return the two numbers added together!"
);
console.log(
  arithmetic(8, 2, "subtract"),
  6,
  "'subtract' should return a minus b!"
);
console.log(
  arithmetic(5, 2, "multiply"),
  10,
  "'multiply' should return a multiplied by b!"
);
console.log(
  arithmetic(8, 2, "divide"),
  4,
  "'divide' should return a divided by b!"
);
console.log(`\n 111 uzdv........................`);

// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
function twoSort(s) {
  const arr = s.sort();
  return arr[0].split("").join("***");
}
// kitaas budas
//const twoSort = (s) => s.sort()[0].split("").join("***");
console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ]),
  "b***i***t***c***o***i***n"
);
console.log(
  twoSort([
    "turns",
    "out",
    "random",
    "test",
    "cases",
    "are",
    "easier",
    "than",
    "writing",
    "out",
    "basic",
    "ones",
  ]),
  "a***r***e"
);
console.log(`\n 112 uzdv.............................`);

// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
function points(games) {
  let sum = 0;
  for (let i = 0; i < games.length; i++) {
    let result = games[i];
    let x = result[0];
    let y = result[2];
    if (x > y) {
      sum += 3;
    } else if (x === y) {
      sum += 1;
    } else if (x < y) {
      sum += 0;
    }
  }
  return sum;
}
// kitas budas
/*function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}*/
console.log(
  points([
    "1:0",
    "2:0",
    "3:0",
    "4:0",
    "2:1",
    "3:1",
    "4:1",
    "3:2",
    "4:2",
    "4:3",
  ]),
  30
);
console.log(
  points([
    "1:1",
    "2:2",
    "3:3",
    "4:4",
    "2:2",
    "3:3",
    "4:4",
    "3:3",
    "4:4",
    "4:4",
  ]),
  10
);
console.log(
  points([
    "0:1",
    "0:2",
    "0:3",
    "0:4",
    "1:2",
    "1:3",
    "1:4",
    "2:3",
    "2:4",
    "3:4",
  ]),
  0
);
console.log(
  points([
    "1:0",
    "2:0",
    "3:0",
    "4:0",
    "2:1",
    "1:3",
    "1:4",
    "2:3",
    "2:4",
    "3:4",
  ]),
  15
);
console.log(
  points([
    "1:0",
    "2:0",
    "3:0",
    "4:4",
    "2:2",
    "3:3",
    "1:4",
    "2:3",
    "2:4",
    "3:4",
  ]),
  12
);
console.log(`\n 113 uzdv.........................`);

// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
function friend(friends) {
  return friends.filter((n) => n.length === 4);
}
//kitas budas
/*function friend(friends) {
  let realFriends = [];
  for (i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      realFriends.push(friends[i]);
    }
  }
  return realFriends;
}*/
console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
console.log(
  friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]),
  ["Jimm", "Cari", "aret"]
);
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);
console.log(`\n 114 uzdv.............................`);
