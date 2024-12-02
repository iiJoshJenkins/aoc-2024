export async function parseInput(filePath: string): Promise<number[][]> {
  const file = Bun.file(filePath);

  if (!file.exists()) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileData = await file.text();

  if (!fileData) {
    throw new Error(`File is empty: ${filePath}`);
  }

  const leftList: number[] = [];
  const rightList: number[] = [];

  fileData.split('\n').forEach((line) => {
    const [left, right] = line.split(/\s+/).map(Number);
    leftList.push(left);
    rightList.push(right);
  });

  return [leftList.sort(), rightList.sort()];
}
