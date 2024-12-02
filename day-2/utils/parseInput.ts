export async function parseInput(filePath: string): Promise<number[][]> {
  const file = Bun.file(filePath);

  if (!file.exists()) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileData = await file.text();

  if (!fileData) {
    throw new Error(`File is empty: ${filePath}`);
  }

  const output: number[][] = [];
  fileData.split('\n').forEach((line) => {
    output.push(line.split(' ').map(Number));
  });

  return output;
}
