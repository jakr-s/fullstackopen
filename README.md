# Full Stack Open Submissions

This repository contains my exercise submissions for the Full Stack Open course.

## Repository Structure

The repository is organized by parts, corresponding to the course structure:

```
fullstackopen/
├── part0/ - Web fundamentals and diagrams
├── part1/ - Introduction to React
│   ├── anecdotes/
│   ├── courseinfo/
│   └── unicafe/
├── part2/ - Communicating with server
│   ├── courseinfo/
│   └── phonebook/
└── ...
```

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- [pnpm](https://pnpm.io/) package manager

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/fullstackopen.git
cd fullstackopen
```

2. Install dependencies using pnpm:

```bash
pnpm install
```

This will install dependencies for all projects in the workspace defined in the pnpm-workspace.yaml file.

## Running Applications

Each application can be run individually by navigating to its directory and running:

```bash
cd part1/courseinfo
pnpm dev
```

This will start the Vite development server, typically available at http://localhost:5173.

## Backend Services

For part2/phonebook and other applications that require a backend:

1. Start the JSON server (if needed):

```bash
cd part2/phonebook
pnpm server
```

This will start a mock REST API at http://localhost:3001.

## Additional Resources

- [Full Stack Open Course](https://fullstackopen.com/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
