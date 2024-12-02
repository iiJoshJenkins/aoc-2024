import { parseInput } from '../utils/parseInput';

function isAccending(arr: number[]): boolean {
  return arr.every((num, index) => {
    return (
      index === 0 ||
      (num > arr[index - 1] && Math.abs(num - arr[index - 1]) <= 3)
    );
  });
}

function isDecending(arr: number[]): boolean {
  return arr.every((num, index) => {
    return (
      index === 0 ||
      (num < arr[index - 1] && Math.abs(num - arr[index - 1]) <= 3)
    );
  });
}

export function isSafe(arr: number[]): boolean {
  return isAccending(arr) || isDecending(arr);
}

(async () => {
  const inputData = await parseInput('./day-2/input.txt');

  const count = inputData.filter((data) => isSafe(data)).length;
  console.log('🚀 ~ count:', count);
})();
