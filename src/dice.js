const _ = require('lodash');

export function dices(num) {
  if (num < 3 || num > 18) {
    return 'Impossible!';
  }

  let results = [];
  [1, 2, 3, 4, 5, 6].map(i => {
    [1, 2, 3, 4, 5, 6].map(j => {
      [1, 2, 3, 4, 5, 6].map(k => {
        if ((i + j + k) === num) {
          results.push([i, j, k].sort());
        }
      });
    });
  });
  // }
  return _.uniqWith(results, _.isEqual);
}

// console.log(dices(3));
// console.log(dices(7));
// console.log(dices(13));
// console.log(dices(14));
