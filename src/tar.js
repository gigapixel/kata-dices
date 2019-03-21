import * as _ from 'lodash';

export class Dices {

    constructor() {

    }

    dices(score) {
        let result = [];
        result.push([]);
        let fin = (score < 3 || score > 18);
        let a = 1,
            b = 1,
            c = 1;

        while (!fin) {

            fin = a === 6 && b === 6 && c === 6;

            const resultSort = a + b + c === score ? [a, b, c].sort() : [];
            result.push(resultSort);

            a = b === 6 && c === 6 ? a + 1 : a;
            b = c === 6 ? b === 6 ? 1 : b + 1 : b;
            c = c === 6 ? 1 : c + 1;
        }

        result = _.uniqWith(result, _.isEqual);
        result.shift();

        let resultText = result.length > 0 ? '' : 'Impossible';
        result.map((val, idx) => {
            const str = (idx + 1) + '. ' + val.join('+') + '\n';
            resultText += str;
        });
        console.log(resultText);
        return result;
    }
}

const d = new Dices();
console.log('-----------------');
d.dices(10);
console.log('-----------------');
d.dices(11);
console.log('-----------------');
d.dices(12);
console.log('-----------------');
d.dices(13);
console.log('-----------------');
d.dices(14);
console.log('-----------------');
d.dices(15);

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