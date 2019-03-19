import { describe, it } from 'mocha';
import { expect } from 'chai';

import { dices } from '../src/example';

describe('example.js', () => {
  describe('dices()', () => {
    it(`case < 3`, () => {
      let result = dices(2);
      expect(result).eql(['impossible']);
    });
    it(`case > 18`, () => {
      let result = dices(88);
      expect(result).eql(['impossible']);
    });
    it(`case 3`, () => {
      let result = dices(3);
      expect(result).eql(['1 + 1 + 1']);
    });
    it(`case 4`, () => {
      let result = dices(4);
      expect(result).eql(['1 + 1 + 2']);
    });
    it(`case 5`, () => {
      let result = dices(5);
      expect(result).eql(['1 + 1 + 3', '1 + 2 + 2']);
    });
    it(`case 6`, () => {
      let result = dices(6);
      expect(result).eql(['1 + 1 + 4', '1 + 2 + 3', '2 + 2 + 2']);
    });
    it(`case 7`, () => {
      let result = dices(7);
      expect(result).eql(['1 + 1 + 5', '1 + 2 + 4', '1 + 3 + 3', '2 + 2 + 3']);
    });
    it(`case 8`, () => {
      let result = dices(8);
      expect(result).eql(['1 + 1 + 6', '1 + 2 + 5', '1 + 3 + 4', '2 + 2 + 4', '2 + 3 + 3']);
    });
    it(`case 9`, () => {
      let result = dices(9);
      expect(result).eql(['1 + 2 + 6', '1 + 3 + 5', '2 + 2 + 5', '1 + 4 + 4', '2 + 3 + 4', '3 + 3 + 3']);
    });
    it(`case 10`, () => {
      let result = dices(10);
      expect(result).eql(['1 + 3 + 6', '2 + 2 + 6', '2 + 3 + 5', '2 + 4 + 4', '3 + 3 + 4']);
    });
    it(`case 11`, () => {
      let result = dices(11);
      expect(result).eql(['1 + 4 + 6', '1 + 5 + 5', '2 + 4 + 5', '3 + 3 + 5', '3 + 4 + 4']);
    });
    it(`case 12`, () => {
      let result = dices(12);
      expect(result).eql(['1 + 5 + 6', '2 + 4 + 6', '2 + 5 + 5', '3 + 3 + 6', '3 + 4 + 5']);
    });
    it(`case 13`, () => {
      let result = dices(13);
      expect(result).eql(['1 + 6 + 6', '2 + 5 + 6', '3 + 4 + 6', '3 + 5 + 5', '4 + 4 + 5']);
    });
    it(`case 14`, () => {
      let result = dices(14);
      expect(result).eql(['2 + 6 + 6', '3 + 5 + 6', '4 + 4 + 6', '4 + 5 + 5']);
    });
    it(`case 15`, () => {
      let result = dices(15);
      expect(result).eql(['3 + 6 + 6', '4 + 5 + 6']);
    });
    it(`case 16`, () => {
      let result = dices(16);
      expect(result).eql(['4 + 6 + 6', '5 + 5 + 6']);
    });
    it(`case 17`, () => {
      let result = dices(17);
      expect(result).eql(['5 + 6 + 6']);
    });
    it(`case 18`, () => {
      let result = dices(18);
      expect(result).eql(['6 + 6 + 6']);
    });
  });
});
