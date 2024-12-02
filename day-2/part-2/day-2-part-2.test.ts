import { describe, expect, test } from 'bun:test';
import { isSafe } from './day-2-part-2';

describe('Correct calculate whether report correctly identifies safety level', () => {
  test('Should return TRUE when the input is [7, 6, 4, 2, 1]', () => {
    expect(isSafe([7, 6, 4, 2, 1])).toBe(true);
  });

  test('Should return FALSE when the input is [1, 2, 7, 8, 9]', () => {
    expect(isSafe([1, 2, 7, 8, 9])).toBe(false);
  });

  test('Should return FALSE when the input is [9, 7, 6, 2, 1]', () => {
    expect(isSafe([9, 7, 6, 2, 1])).toBe(false);
  });

  test('Should return FALSE when the input is [1, 3, 2, 4, 5]', () => {
    expect(isSafe([1, 3, 2, 4, 5])).toBe(true);
  });

  test('Should return FALSE when the input is [8, 6, 4, 4, 1]', () => {
    expect(isSafe([8, 6, 4, 4, 1])).toBe(true);
  });

  test('Should return TRUE when the input is [1, 3, 6, 7, 9]', () => {
    expect(isSafe([1, 3, 6, 7, 9])).toBe(true);
  });
});
