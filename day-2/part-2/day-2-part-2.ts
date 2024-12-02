import { parseInput } from '../utils/parseInput';

function isAccending(arr: number[]): boolean {
  const isValid = (arr: number[]) =>
    arr.every((num, index) => {
      return (
        index === 0 ||
        (num > arr[index - 1] && Math.abs(num - arr[index - 1]) <= 3)
      );
    });

  return arr.some((_, i) => isValid([...arr.slice(0, i), ...arr.slice(i + 1)]));
}

function isDecending(arr: number[]): boolean {
  const isValid = (arr: number[]) =>
    arr.every((num, index) => {
      return (
        index === 0 ||
        (num < arr[index - 1] && Math.abs(num - arr[index - 1]) <= 3)
      );
    });

  return arr.some((_, i) => isValid([...arr.slice(0, i), ...arr.slice(i + 1)]));
}

export function isSafe(arr: number[]): boolean {
  return isAccending(arr) || isDecending(arr);
}

(async () => {
  const inputData = await parseInput('./day-2/input.txt');

  const count = inputData.filter((data) => isSafe(data)).length;

  console.log('🚀 ~ count:', count);
})();
