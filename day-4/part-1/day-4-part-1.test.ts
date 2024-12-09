import { describe, expect, test } from 'bun:test';
import { findXmasCount } from './day-4-part-1';

describe('Given a string, correctly run the function and multiply the numbers', () => {
  test(`
    MMMSXXMASM
    MSAMXMSMSA
    AMXSXMAAMM
    MSAMASMSMX
    XMASAMXAMM
    XXAMMXXAMA
    SMSMSASXSS
    SAXAMASAAA
    MAMMMXMMMM
    MXMXAXMASX
  `, () => {
    expect(
      findXmasCount(
        `
          MMMSXXMASM
          MSAMXMSMSA
          AMXSXMAAMM
          MSAMASMSMX
          XMASAMXAMM
          XXAMMXXAMA
          SMSMSASXSS
          SAXAMASAAA
          MAMMMXMMMM
          MXMXAXMASX
        `
      )
    ).toBe(18);
  });
});
