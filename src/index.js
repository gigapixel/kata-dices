import _ from 'lodash';
export function dices(input) {
    const dices = [1, 2, 3, 4, 5, 6];
    let result = [];
    for (let dice1 of dices) {
        for (let dice2 of dices) {
            let count = input - (dice1 + dice2);
            if (input === dice1 + dice2 + count && count <= 6 && count > 0) {
                let arr = [dice1, dice2, count].sort((a, b) => a - b);
                result.push(arr.join('+'));
            }
        }
    }
    return _.uniqWith(result, _.isEqual);
}
