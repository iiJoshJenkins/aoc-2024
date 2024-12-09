import { Grid } from '../utils/Grid';
import { parseInput } from '../utils/parseInput';

export function findXmasCount(str: string) {
  const grid = new Grid(str);

  const total = grid.findAll('XMAS');

  return total;
}

(async () => {
  const input = await parseInput('./day-4/input.txt');

  console.log('🚀 ~ total:', findXmasCount(input));
})();
