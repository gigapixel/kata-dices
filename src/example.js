export function dices(values) {
  let retArr = [];
  let dice1 = [1, 2, 3, 4, 5, 6];
  let dice2 = [1, 2, 3, 4, 5, 6];
  let dice3 = [1, 2, 3, 4, 5, 6];

  for (let i of dice1){
    for (let j of dice2){
      for (let k of dice3){
        if ((i + j + k) == values){
          let result = `${i} + ${j} + ${k}`;
          retArr.push(result);
        }
      }
    }
  }
  

  return retArr;
}
