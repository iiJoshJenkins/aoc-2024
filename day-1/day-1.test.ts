import { describe, expect, test } from 'bun:test';
import { calculateDifference } from './day-1';

describe('Total distance between arrays', () => {
  test('Should return 9 when the input is [1, 2, 3] and [4, 5, 6]', () => {
    expect(calculateDifference([1, 2, 3], [4, 5, 6])).toBe(9);
  });
});
