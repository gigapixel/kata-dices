import { describe, it } from 'mocha';
import { expect } from 'chai';

import { dices } from '../src/dice';

describe('dice.js', () => {
  describe('dices()', () => {
    it('Impossible point < 3', () => {
      let result = dices(1);
      expect(result).eql('Impossible!');
    });

    it('Impossible point > 18', () => {
      let result = dices(19);
      expect(result).eql('Impossible!');
    });

    it('point is 3', () => {
      let result = dices(3);
      expect(result).deep.equal([[1, 1, 1]]);
    });

    it('point is 4', () => {
      let result = dices(4);
      expect(result).deep.equal([
        [1, 1, 2]
      ]);
    });

    it('point is 5', () => {
      let result = dices(5);
      expect(result).deep.equal([
        [1, 1, 3],
        [1, 2, 2]
      ]);
    });

    it('point is 6', () => {
      let result = dices(6);
      expect(result).deep.equal([
        [1, 1, 4],
        [1, 2, 3],
        [2, 2, 2]
      ]);
    });

    it('point is 7', () => {
      let result = dices(7);
      expect(result).deep.equal([
        [1, 1, 5],
        [1, 2, 4],
        [1, 3, 3],
        [2, 2, 3]
      ]);
    });

    it('point is 8', () => {
      let result = dices(8);
      expect(result).deep.equal([
        [1, 1, 6],
        [1, 2, 5],
        [1, 3, 4],
        [2, 2, 4],
        [2, 3, 3]
      ]);
    });

    it('point is 9', () => {
      let result = dices(9);
      expect(result).deep.equal([[1, 2, 6],
      [1, 3, 5],
      [1, 4, 4],
      [2, 2, 5],
      [2, 3, 4],
      [3, 3, 3]]);
    });

    it('point is 10', () => {
      let result = dices(10);
      expect(result).deep.equal([[1, 3, 6],
      [1, 4, 5],
      [2, 2, 6],
      [2, 3, 5],
      [2, 4, 4],
      [3, 3, 4]]);
    });

    it('point is 11', () => {
      let result = dices(11);
      expect(result).deep.equal([[1, 4, 6],
      [1, 5, 5],
      [2, 3, 6],
      [2, 4, 5],
      [3, 3, 5],
      [3, 4, 4]]);
    });

    it('point is 12', () => {
      let result = dices(12);
      expect(result).deep.equal([[1, 5, 6],
      [2, 4, 6],
      [2, 5, 5],
      [3, 3, 6],
      [3, 4, 5],
      [4, 4, 4]]);
    });

    it('point is 13', () => {
      let result = dices(13);
      expect(result).deep.equal([
        [1, 6, 6],
        [2, 5, 6],
        [3, 4, 6],
        [3, 5, 5],
        [4, 4, 5]
      ]);
    });

    it('point is 14', () => {
      let result = dices(14);
      expect(result).deep.equal([
        [2, 6, 6],
        [3, 5, 6],
        [4, 4, 6],
        [4, 5, 5]
      ]);
    });

    it('point is 15', () => {
      let result = dices(15);
      expect(result).deep.equal([
        [3, 6, 6],
        [4, 5, 6],
        [5, 5, 5]
      ]);
    });

    it('point is 16', () => {
      let result = dices(16);
      expect(result).deep.equal([
        [4, 6, 6],
        [5, 5, 6]
      ]);
    });

    it('point is 17', () => {
      let result = dices(17);
      expect(result).deep.equal([
        [5, 6, 6]
      ]);
    });

    it('point is 18', () => {
      let result = dices(18);
      expect(result).deep.equal([
        [6, 6, 6]
      ]);
    });
  });
});