# Deno 2 with Jupyter in VSCode
This repository provides a streamlined development environment to use **Deno 2** with **Jupyter Notebooks** in **VSCode**. Whether you are new to programming or looking to explore TypeScript with Deno, this setup enables an easy-to-use, containerized environment that requires no command-line setup. Additionally, a tutorial is included to guide new developers through TypeScript basics and into Deno 2 features.

## Features
- **Deno 2 Integration**: Easily use Deno 2 in Jupyter Notebooks to run TypeScript code.
- **VSCode DevContainer and Extensions**: All necessary tools are pre-installed, eliminating the need for additional setup.
- **TypeScript Tutorial**: Walks you from basic TypeScript concepts to utilizing Deno effectively.

## Getting Started
### Requirements
- **VSCode**: Download and install [VSCode](https://code.visualstudio.com/).
- **Remote - Containers Extension**: Install the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VSCode.
- **Docker Desktop**: Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) to enable containerized development.

### Setup Instructions
- **Clone the Repository**: Open the Command Palette in VSCode (⇧⌘P on macOS, Ctrl+Shift+P on Windows/Linux) and select:
   - `Remote-Containers: Clone Repository in Container Volume…`
   - Paste the repository URL and hit enter.
- **Wait for Setup**: VSCode will automatically build the Docker container.

### Tutorials
- Open the tutorial notebooks in the `tutorial` folder.
- Each notebook is configured to use Deno’s TypeScript kernel, so you can run TypeScript code cells directly.
- Follow along with the TypeScript tutorial in the notebooks, progressing from basic syntax to advanced Deno-specific features.

## Resources
- [Deno Documentation](https://deno.land/manual)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

Happy coding with TypeScript and Deno in Jupyter!
