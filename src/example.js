export function dices(values) {
  let retArr = []; let dice1 = [1, 2, 3, 4, 5, 6]; let dice2 = [1, 2, 3, 4, 5, 6]; let dice3 = [1, 2, 3, 4, 5, 6];
  dice1.map(d1 => {
    dice2.map(d2 => {
      dice3.map(d3 => {
        retArr.push([d1, d2, d3].sort());
      });
    });
  });
  let result = retArr.map(ret => {
    let data = ret[0] + ret[1] + ret[2] === values ? `${ret[0]} + ${ret[1]} + ${ret[2]}` : undefined;
    data ? data : '';
    return data;
  });
  result = result.filter((data) => { return data });
  result = result.filter(function (elem, pos) {
    return result.indexOf(elem) == pos;
  })
  result.length === 0 ? result = ['impossible'] : '';
  return result;
}


