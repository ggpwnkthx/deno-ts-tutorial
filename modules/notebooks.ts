import { basename } from "jsr:@std/path";

// Function to get all files in the current directory
function getFilesInDirectory(): string[] {
  const currentDir = Deno.cwd();
  const files: string[] = [];

  for (const entry of Deno.readDirSync(currentDir)) {
    if (entry.isFile && entry.name.endsWith(".ipynb")) {
      files.push(entry.name);
    }
  }

  return files.sort(); // Ensure files are sorted in a logical order
}

// Helper function to strip section numbers from file names
function removeSectionNumber(fileName: string): string {
  return fileName.replace(/^\d+\s*[-_]?/, "").replace(".ipynb", "");
}

// Helper function to find a file by section number
function findFileBySection(section: string, fileList: string[]): string | undefined {
  const regex = new RegExp(`^${section}\\s*[-_]?.*\\.ipynb$`);
  return fileList.find((file) => regex.test(file));
}

// Generate navigation links
export function generateNavigationLinks(currentFile: string, fileList: string[] = getFilesInDirectory()): string {
  const currentIndex = fileList.indexOf(basename(currentFile));

  if (currentIndex === -1) {
    throw new Error(`Current file "${currentFile}" not found in file list.`);
  }

  const previousFile = fileList[currentIndex - 1];
  const nextFile = fileList[currentIndex + 1];

  const previousLink = previousFile
    ? `<a href="${previousFile}" style="float: left;">← Previous: ${removeSectionNumber(previousFile)}</a>`
    : "";

  const nextLink = nextFile
    ? `<a href="${nextFile}" style="float: right;">Next: ${removeSectionNumber(nextFile)} →</a>`
    : "";

  return `${previousLink}${nextLink}`;
}

// Generate navigation links using section number
export function pagination(section: string, fileList: string[] = getFilesInDirectory()): string {
  const currentFile = findFileBySection(section, fileList);

  if (!currentFile) {
    throw new Error(`No file found for section "${section}".`);
  }

  return generateNavigationLinks(currentFile, fileList);
}
