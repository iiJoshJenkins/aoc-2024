import { parseInput } from '../utils/parseInput';

export function multiplyFromString(str: string) {
  const regex = /mul\((\d+),(\d+)\)/g;
  const muls = str.match(regex);

  return muls!.reduce((acc, curr) => {
    const numberRegex = /\d+,\d+/g;
    const numberStrings = curr.match(numberRegex)!;
    const sum = numberStrings.reduce((acc, curr) => {
      const [num1, num2] = curr.split(',');
      return (acc += Number(num1) * Number(num2));
    }, 0);
    return (acc += sum);
  }, 0);
}

(async () => {
  const input = await parseInput('./day-3/input.txt');

  const sum = input.reduce((acc, curr) => {
    return (acc += multiplyFromString(curr));
  }, 0);

  console.log('🚀 ~ sum:', sum);
})();
