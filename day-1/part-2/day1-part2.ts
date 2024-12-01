import { parseInput } from '../../utils/parseInput';

export function calculateSimilarity(
  array1: number[],
  array2: number[]
): number {
  return array1.reduce((acc, num, idx) => {
    const count = array2.filter((num2) => num2 === num).length;
    return (acc += num * count);
  }, 0);
}

(async () => {
  const inputData = await parseInput('./day-1/input.txt');
  console.log(calculateSimilarity(inputData[0], inputData[1]));
})();
