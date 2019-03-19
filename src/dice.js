const _ = require('lodash');

export function dices(num) {
  
  if (num < 3 || num > 18) {
    return 'Impossible!';
  }

  let results = [];
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      for (let k = 1; k <= 6; k++) {
        if ((i + j + k) === num) {
          results.push([i, j, k].sort());
        }
      }
    }
  }

  return _.uniqWith(results, _.isEqual);
}

// console.log(dices(3));
// console.log(dices(7));
// console.log(dices(13));
// console.log(dices(14));
