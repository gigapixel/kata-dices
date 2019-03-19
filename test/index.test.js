import { describe, it } from 'mocha';
import { expect } from 'chai';

import { dices } from '../src/index';

describe(' index.js ', () => {
  describe(' dices ', () => {
    it(`should return [ '1+1+1' ] when input eql 3`, () => {
      let result = dices(3);
      expect(result).eql(['1+1+1']);
    });

    it(`should return [ '1+1+2' ] when input eql 4`, () => {
      let result = dices(4);
      expect(result).eql(['1+1+2']);
    });

    it(`should return [ '1+1+3', '1+2+2' ] when input eql 5`, () => {
      let result = dices(5);
      expect(result).eql(['1+1+3', '1+2+2']);
    });
    it(`should return [ '1+1+4', '1+2+3', '2+2+2' ] when input eql 6`, () => {
      let result = dices(6);
      expect(result).eql(['1+1+4', '1+2+3', '2+2+2']);
    });
    it(`should return [ '1+1+5', '1+2+4', '1+3+3', '2+2+3' ] when input eql 7`, () => {
      let result = dices(7);
      expect(result).eql(['1+1+5', '1+2+4', '1+3+3', '2+2+3']);
    });
    it(`should return [ '1+1+6', '1+2+5', '1+3+4', '2+2+4', '2+3+3' ] when input eql 8`, () => {
      let result = dices(8);
      expect(result).eql(['1+1+6', '1+2+5', '1+3+4', '2+2+4', '2+3+3']);
    });
    it(`should return [ '1+2+6', '1+3+5', '1+4+4', '2+2+5', '2+3+4', '3+3+3' ] when input eql 9`, () => {
      let result = dices(9);
      expect(result).eql(['1+2+6', '1+3+5', '1+4+4', '2+2+5', '2+3+4', '3+3+3']);
    });
    it(`should return [ '1+3+6', '1+4+5', '2+2+6', '2+3+5', '2+4+4', '3+3+4' ] when input eql 10`, () => {
      let result = dices(10);
      expect(result).eql(['1+3+6', '1+4+5', '2+2+6', '2+3+5', '2+4+4', '3+3+4']);
    });
    it(`should return [ '1+4+6', '1+5+5', '2+3+6', '2+4+5', '3+3+5', '3+4+4' ] when input eql 11`, () => {
      let result = dices(11);
      expect(result).eql(['1+4+6', '1+5+5', '2+3+6', '2+4+5', '3+3+5', '3+4+4']);
    });
    it(`should return [ '1+5+6', '2+4+6', '2+5+5', '3+3+6', '3+4+5', '4+4+4' ] when input eql 12`, () => {
      let result = dices(12);
      expect(result).eql(['1+5+6', '2+4+6', '2+5+5', '3+3+6', '3+4+5', '4+4+4']);
    });
    it(`should return [ '1+6+6', '2+5+6', '3+4+6', '3+5+5', '4+4+5' ] when input eql 13`, () => {
      let result = dices(13);
      expect(result).eql(['1+6+6', '2+5+6', '3+4+6', '3+5+5', '4+4+5']);
    });
    it(`should return [ '2+6+6', '3+5+6', '4+4+6', '4+5+5' ] when input eql 14`, () => {
      let result = dices(14);
      expect(result).eql(['2+6+6', '3+5+6', '4+4+6', '4+5+5']);
    });
    it(`should return [ '3+6+6', '4+5+6', '5+5+5' ] when input eql 15`, () => {
      let result = dices(15);
      expect(result).eql(['3+6+6', '4+5+6', '5+5+5']);
    });
    it(`should return [ '4+6+6', '5+5+6' ] when input eql 16`, () => {
      let result = dices(16);
      expect(result).eql(['4+6+6', '5+5+6']);
    });
    it(`should return [ '5+6+6' ] when input eql 17`, () => {
      let result = dices(17);
      expect(result).eql(['5+6+6']);
    });
    it(`should return [ '6+6+6' ] when input eql 18`, () => {
      let result = dices(18);
      expect(result).eql(['6+6+6']);
    });
  });
});