import { describe, it } from 'mocha';
import { expect } from 'chai';

import { dices } from '../src/example';

describe('example.js', () => {
  describe('dices()', () => {
    it(`case 3 ['1 .1 + 1 + 1']`, () => {
      let result = dices(3);
      expect(result).equal(['1. 1 + 1 + 1']);
    });
    
  });
});
