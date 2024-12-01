import { describe, expect, test } from 'bun:test';
import { calculateSimilarity } from './day1-part2';

describe('Total Similarity between arrays', () => {
  test('Should return 9 when the input is [3, 4, 2, 1, 3, 3] and [4, 3, 5, 3, 9, 3]', () => {
    expect(calculateSimilarity([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3])).toBe(
      31
    );
  });
});
