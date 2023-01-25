'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return Array of 0, if catAge, dogAge equal 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return Array of 0, if catAge, dogAge are less than 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return expected array, if catAge, '
  + 'dogAge are greater than 14, less 24',
  () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return expected array, if catAge, '
  + 'dogAge are greater 23, less 28',
  () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return expected array, if catAge > 27',
    () => {
      expect(getHumanAge(28, 28))
        .toEqual([3, 2]);
    });

  test('should return expected array, if dogAge > 28',
    () => {
      expect(getHumanAge(28, 30))
        .toEqual([3, 3]);
    });

  test('should return expected array, if catAge > 27, dogAge > 28', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
