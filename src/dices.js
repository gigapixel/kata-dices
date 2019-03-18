import * as _ from 'lodash';

export class Dices {

  constructor() {
   
  }

  dices(score) {
    let result = [];

    if (score < 3 || score > 18)
      return false;

    for (let i=1; i<=6; i++) {      
      for (let j=1; j<=6; j++) {      
        for (let k=1; k<=6; k++) {
          let _scr = i+j+k;
          if (_scr === score) {
            const resultSort = [i,j,k].sort();
            result.push(resultSort);
            break;
          }
        }
      }
    }

    result = _.uniqWith(result, _.isEqual);
    //console.log(result);
    return result;
  }

 
  printResult(score) {
    const data = this.dices(score);
    if (data) {     
      data.forEach((val, idx) => {
        const str = (idx+1) + '. ' + val.join('+');
        console.log(str);
      });
      
    } else {
      console.log("Impossible");
    }
  }


}

const d = new Dices();
console.log('10 -------');
d.printResult(10);

// console.log('4 -------');
// d.printResult(4);

// console.log('5 -------');
// d.printResult(5);

// console.log('6 -------');
// d.printResult(6);

// console.log('7 -------');
// d.printResult(7);

// console.log('8 -------');
// d.printResult(8);