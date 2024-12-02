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
    const temp = line.split(' ').map(Number);
    leftList.push(temp[0]);
    rightList.push(temp[temp.length - 1]);
  });

  return [leftList.sort(), rightList.sort()];
}
