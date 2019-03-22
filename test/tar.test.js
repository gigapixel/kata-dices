import { describe, it } from 'mocha';
import { expect } from 'chai';

// import { Dices } from '../src/tar';
import { Dices } from '../src/dicesSimple';

describe('dices.js', () => {
  describe('dics(0)', () => {
    it('should return 1', () => {
      let d = new Dices();
      let result = d.dices(0);
      expect(result).deep.equal([]);
    });
  });

  describe("dics(19)", () => {
    it("should return 1", () => {
      let d = new Dices();
      let result = d.dices(19);
      expect(result).deep.equal([]);
    });
  });

  describe('dics(3)', () => {
    it('should return 1', () => {
      let d = new Dices();
      let result = d.dices(3);
      expect(result).deep.equal([[1, 1, 1]]);
    });
  });

  describe('dics(4)', () => {
    it('should return 1', () => {
      let d = new Dices();
      let result = d.dices(4);
      expect(result).deep.equal([[1,1,2]]);
    });
  });

  describe('dics(5)', () => {
    it('should return 2', () => {
      let d = new Dices();
      let result = d.dices(5);
      expect(result).deep.equal([[1, 1, 3], [1, 2, 2]]);
    });
  });

  describe("dics(6)", () => {
    it("should return 3", () => {
      let d = new Dices();
      let result = d.dices(6);
      expect(result).deep.equal([[1, 1, 4], [1, 2, 3], [2, 2, 2]]);
    });
  });

  describe("dics(7)", () => {
    it("should return 4", () => {
      let d = new Dices();
      let result = d.dices(7);
      expect(result).deep.equal([[1, 1, 5], [1, 2, 4], [1, 3, 3], [2, 2, 3]]);
    });
  });

  describe("dics(8)", () => {
    it("should return 5", () => {
      let d = new Dices();
      let result = d.dices(8);
      expect(result).deep.equal([[1, 1, 6], [1, 2, 5], [1, 3, 4], [2, 2, 4], [2, 3, 3]]);
    });
  });

  describe("dics(9)", () => {
    it("should return 6", () => {
      let d = new Dices();
      let result = d.dices(9);
      expect(result).deep.equal([
        [1, 2, 6],
        [1, 3, 5],
        [1, 4, 4],
        [2, 2, 5],
        [2, 3, 4],
        [3, 3, 3]
      ]);
    });
  });

  describe("dics(10)", () => {
    it("should return 6", () => {
      let d = new Dices();
      let result = d.dices(10);
      expect(result).deep.equal([
        [1, 3, 6],
        [1, 4, 5],
        [2, 2, 6],
        [2, 3, 5],
        [2, 4, 4],
        [3, 3, 4]
      ]);
    });
  });

  describe("dics(11)", () => {
    it("should return 6", () => {
      let d = new Dices();
      let result = d.dices(11);
      expect(result).deep.equal([
        [1, 4, 6],
        [1, 5, 5],
        [2, 3, 6],
        [2, 4, 5],
        [3, 3, 5],
        [3, 4, 4]
      ]);
    });
  });
  describe("dics(12)", () => {
    it("should return 6", () => {
      let d = new Dices();
      let result = d.dices(12);
      expect(result).deep.equal([
        [1, 5, 6],
        [2, 4, 6],
        [2, 5, 5],
        [3, 3, 6],
        [3, 4, 5],
        [4, 4, 4]
      ]);
    });
  });

  describe("dics(13)", () => {
    it("should return 5", () => {
      let d = new Dices();
      let result = d.dices(13);
      expect(result).deep.equal([
        [1, 6, 6], [2, 5, 6], [3, 4, 6], [3, 5, 5], [4, 4, 5]
      ]);
    });
  });

  describe("dics(14)", () => {
    it("should return 4", () => {
      let d = new Dices();
      let result = d.dices(14);
      expect(result).deep.equal([
        [2, 6, 6], [3, 5, 6], [4, 4, 6], [4, 5, 5]
      ]);
    });
  });

  
  describe("dics(15)", () => {
    it("should return 3", () => {
      let d = new Dices();
      let result = d.dices(15);
      expect(result).deep.equal([[3, 6, 6], [4, 5, 6], [5, 5, 5]]);
    });
  });

  describe("dics(16)", () => {
    it("should return 2", () => {
      let d = new Dices();
      let result = d.dices(16);
      expect(result).deep.equal([[4, 6, 6], [5, 5, 6] ]);
    });
  });
  describe("dics(17)", () => {
    it("should return 1", () => {
      let d = new Dices();
      let result = d.dices(17);
      expect(result).deep.equal([[5, 6, 6]]);
    });
  });
  describe("dics(18)", () => {
    it("should return 1", () => {
      let d = new Dices();
      let result = d.dices(18);
      expect(result).deep.equal([[6, 6, 6]]);
    });
  });
});

