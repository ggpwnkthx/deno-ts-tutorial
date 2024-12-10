import { walk } from "jsr:@std/fs";
import { basename, dirname, extname, relative } from "jsr:@std/path"

// Helper function to format the page name by removing numbers and separators
function formatPageName(filePath: string): string {
  const base = basename(filePath, extname(filePath)); // Get base name without extension
  return base.replace(/^\d+[-_\s]?/, "").replace(/_/g, " "); // Remove leading numbers and replace underscores
}

// Function to create the pagination cell with HTML
function createPaginationCell(
  currentFile: string,
  prevFile: string,
  nextFile: string
) {
  const currentDir = dirname(currentFile); // Get the current file's directory
  const relativePrev = prevFile ? relative(currentDir, prevFile) : "";
  const relativeNext = nextFile ? relative(currentDir, nextFile) : "";
  const prevName = prevFile ? formatPageName(prevFile) : "";
  const nextName = nextFile ? formatPageName(nextFile) : "";

  return {
    cell_type: "markdown",
    metadata: { tags: ["pagination"] },
    source: [
      `<div style="display: flex; justify-content: space-between;">\n` +
        (prevFile
          ? `<a href="${relativePrev}" style="float: left;">← ${prevName}</a>`
          : "") +
        (nextFile
          ? `<a href="${relativeNext}" style="float: right;">${nextName} →</a>`
          : "") +
        `\n</div>`,
    ],
  };
}

async function processIpynbFiles() {
  const files: string[] = [];

  // Step 1: Find all .ipynb files
  for await (const entry of walk(".", { exts: [".ipynb"], includeFiles: true })) {
    files.push(entry.path);
  }

  // Sort files to ensure logical navigation
  files.sort();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const prevFile = i > 0 ? files[i - 1] : "";
    const nextFile = i < files.length - 1 ? files[i + 1] : "";

    // Step 2: Parse the file content
    const content = await Deno.readTextFile(file);
    const notebook = JSON.parse(content);

    const cells = notebook.cells;
    let lastCellIndex = cells.length - 1;
    let lastCell = cells[lastCellIndex];

    // Step 3: Check if the last cell contains the "pagination" tag
    if (
      lastCell &&
      lastCell.cell_type === "markdown" &&
      lastCell.metadata?.tags?.includes("pagination")
    ) {
      // Step 4: Replace the existing pagination cell
      cells[lastCellIndex] = createPaginationCell(file, prevFile, nextFile);
      console.log(`Replaced pagination cell in: ${file}`);
    } else {
      // Step 5: Add the pagination cell
      const paginationCell = createPaginationCell(file, prevFile, nextFile);
      cells.push(paginationCell);
      console.log(`Added pagination cell to: ${file}`);
    }

    // Step 6: Save the updated notebook
    await Deno.writeTextFile(file, JSON.stringify(notebook, null, 2));
  }
}

processIpynbFiles().catch((err) => console.error("Error:", err));