import { describe, it } from 'mocha';
import { expect } from 'chai';

import { dices } from '../src/example';

describe('example.js', () => {
  describe('dices()', () => {
    it(`case 3`, () => {
      let result = dices(3);
      expect(result).equal(['1 + 1 + 1']);
    });
    it(`case 4`, () => {
      let result = dices(4);
      expect(result).equal(['1 + 1 + 2']);
    });
    it(`case 5`, () => {
      let result = dices(5);
      expect(result).equal(['1 + 1 + 3', '1 + 2 + 2']);
    });
    it(`case 6`, () => {
      let result = dices(6);
      expect(result).equal(['1 + 1 + 4', '2 + 2 + 2', '1 + 2 + 3']);
    });
    it(`case 7`, () => {
      let result = dices(7);
      expect(result).equal(['1 + 3 + 3', '1 + 4 + 2', '1 + 5 + 1', '2 + 2 + 3']);
    });
    it(`case 8`, () => {
      let result = dices(8);
      expect(result).equal(['1 + 1 + 6', '1 + 2 + 5', '1 + 3 + 4', '2 + 2 + 4', '2 + 3 + 3', '2 + 4 + 1']);
    });
    it(`case 9`, () => {
      let result = dices(9);
      expect(result).equal(['2 + 1 + 6', '2 + 2 + 5', '2 + 3 + 4', '2 + 4 + 3', '3 + 1 + 5', '3 + 3 + 3', '4 + 1 + 4', '4 + 2 + 3', '5 + 1 + 3', '5 + 2 + 2', '6 + 1 + 2']);
    });
    it(`case 10`, () => {
      let result = dices(9);
      expect(result).equal(['1 + 3 + 6', '1 + 4 + 5', '2 + 2 + 6', '2 + 3 + 5', '2 + 4 + 4']);
    });
  });
});
