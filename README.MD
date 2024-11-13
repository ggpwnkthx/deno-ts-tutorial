# Deno 2.0 Development with Jupyter in VSCode
This repository provides a streamlined development environment to use **Deno 2.0** with **Jupyter Notebooks** in **VSCode**. Whether you are new to programming or looking to explore TypeScript with Deno, this setup enables an easy-to-use, containerized environment that requires no command-line setup. Additionally, a tutorial is included to guide new developers through TypeScript basics and into Deno 2.0 features.

## Features
- **Deno 2.0 Integration**: Easily use Deno 2.0 in Jupyter Notebooks to run TypeScript code.
- **VSCode DevContainer**: All necessary tools are pre-installed, eliminating the need for additional setup.
- **TypeScript Tutorial**: Walks you from basic TypeScript concepts to utilizing Deno effectively.
- **VSCode Extensions**: Preconfigured extensions for Jupyter and Deno development.

## Getting Started
### Requirements
1. **VSCode**: Download and install [VSCode](https://code.visualstudio.com/).
2. **Remote - Containers Extension**: Install the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VSCode.
3. **Docker Desktop**: Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) to enable containerized development.

### Setup Instructions
1. **Clone the Repository**: Open the Command Palette in VSCode (⇧⌘P on macOS, Ctrl+Shift+P on Windows/Linux) and select:
   - `Remote-Containers: Clone Repository in Container Volume…`
   - Paste the repository URL and hit enter.
2. **Wait for Setup**: VSCode will automatically build the Docker container. Once it completes, you’ll have:
   - A Debian-based container with Deno 2.0, Python (for Jupyter Notebooks), and essential VSCode extensions for Jupyter and Deno.
3. **Explore the Environment**: The devcontainer will open with everything set up, and you can start experimenting with Deno directly in Jupyter notebooks.
### Running Code in Jupyter
- Open the tutorial notebooks in the `tutorial` folder.
- Each notebook is configured to use Deno’s TypeScript kernel, so you can run TypeScript code cells directly.
- Follow along with the TypeScript tutorial in the notebooks, progressing from basic syntax to advanced Deno-specific features.
## Resources
- [Deno Documentation](https://deno.land/manual)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

Happy coding with TypeScript and Deno in Jupyter!
