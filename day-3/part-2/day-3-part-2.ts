import { parseInput } from '../utils/parseInput';

export function multiplyFromString(str: string) {
  const regex = /mul\((\d+),(\d+)\)/;
  const doRegex = /do\(\)/;
  const dontRegex = /don't\(\)/;
  const muls = str.match(/do\(\)|don't\(\)|mul\(\d+,\d+\)/g);

  let isEnabled = true;

  const result = muls!.reduce((acc, curr) => {
    if (doRegex.test(curr)) {
      isEnabled = true;
    } else if (dontRegex.test(curr)) {
      isEnabled = false;
    } else if (regex.test(curr) && isEnabled) {
      const match = regex.exec(curr);
      if (match) {
        const [, a, b] = match;
        acc += parseInt(a) * parseInt(b);
      }
    }
    return acc;
  }, 0);

  return result;
}

(async () => {
  const input = await parseInput('./day-3/input.txt');

  console.log('🚀 ~ sum:', multiplyFromString(input));
})();
