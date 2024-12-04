export async function parseInput(filePath: string): Promise<string> {
  const file = Bun.file(filePath);

  if (!file.exists()) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileData = await file.text();

  if (!fileData) {
    throw new Error(`File is empty: ${filePath}`);
  }

  const output: number[][] = [];

  return fileData;
}
