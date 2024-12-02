import { parseInput } from '../utils/parseInput';

export function calculateDifference(
  array1: number[],
  array2: number[]
): number {
  return array1.reduce((acc, num, idx) => {
    return acc + Math.abs(num - array2[idx]);
  }, 0);
}

(async () => {
  const inputData = await parseInput('./day-1/input.txt');
  console.log(calculateDifference(inputData[0], inputData[1]));
})();
