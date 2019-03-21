import _ from 'lodash';
export function dices(input) {
    const dices = [1, 2, 3, 4, 5, 6], isPossible = (input >= 3 && input <= 18), result = [];
    (isPossible) ? dices.filter((dice1) => {
        dices.filter((dice2) => {
            let count = input - (dice1 + dice2);
            (input === dice1 + dice2 + count && count <= 6 && count > 0) ? result.push([dice1, dice2, count].sort((a, b) => a - b).join('+')) : '';
        })
    }) : ''
    return (isPossible) ? _.uniqWith(result, _.isEqual) : 'impossible';
}
