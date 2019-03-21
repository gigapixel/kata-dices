import _ from 'lodash';
export function dices(values) {
  let retArr = [];
  let dice1 = [1, 2, 3, 4, 5, 6];
  let dice2 = [1, 2, 3, 4, 5, 6];
  let dice3 = [1, 2, 3, 4, 5, 6];

  dice1.map(d1 => {
    dice2.map(d2 => {
      dice3.map(d3 => {
        retArr.push([d1, d2, d3].sort());
      });
    });
  });
  retArr = _.uniqWith(retArr, _.isEqual);
  let result = retArr.map(ret => {
    let rrr = ret[0] + ret[1] + ret[2] === values ? `${ret[0]} + ${ret[1]} + ${ret[2]}` : undefined;
    if (rrr) {
      return rrr;
    }
  });
  result = _.uniqWith(result, _.isEqual);
  result = _.filter(result, _.size);
  return result;
}


