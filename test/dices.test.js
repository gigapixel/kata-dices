import { describe, it } from 'mocha';
import { expect } from 'chai';

import { Dices } from '../src/dices';

describe('dices.js', () => {
  describe('dics(3)', () => {
    it('should return 1', () => {
      let d = new Dices();
      let result = d.dices(3);

      
      expect(result).deep.equal([[1,1,1]]);
    });
  });

  describe('dics(4)', () => {
    it('should return 1', () => {
      let d = new Dices();
      let result = d.dices(3);

      
      expect(result).deep.equal([[1,1,2]]);
    });
  });
});
