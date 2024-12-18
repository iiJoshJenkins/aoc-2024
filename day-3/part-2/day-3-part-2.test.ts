import { describe, expect, test } from 'bun:test';
import { multiplyFromString } from './day-3-part-2';

describe('Given a string, correctly run the function and multiply the numbers', () => {
  test("xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))", () => {
    expect(
      multiplyFromString(
        "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"
      )
    ).toBe(48);
  });
});
