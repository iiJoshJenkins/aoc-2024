import { parseInput } from '../utils/parseInput';

export function isSafe(arr: number[]): boolean {
  return arr.every((num) => num % 2 === 0);
}

(async () => {
  const inputData = await parseInput('./day-2/input.txt');
  console.log(inputData);
})();
