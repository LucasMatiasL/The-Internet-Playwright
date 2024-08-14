## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Tests](#running-the-tests)


## 🔎 Introduction
This repository demonstrates how to interact with webpages using Playwright, a Node.js library for automating testing.
It contains a full end to end suite of the website https://the-internet.herokuapp.com/ using TypeScript and Page Object Model as a design pattern.

## 📄 Getting Started
### Prerequisites

Ensure you have the following software installed on your system:
- [Git Bash](https://git-scm.com/downloads)
- [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## 🔨 Installation
1. Clone this repository to your local machine using git clone:
```python
git clone https://github.com/LucasMatiasL/The-Internet-Playwright.git
```

## 🚀 Usage

1. Open the project folder using Git Bash.
2. Write any of the following commands.

### Running the tests
```python
npx playwright test
```

### Starts the interactive UI mode.
```python
npx playwright test --ui
```

### Runs the tests only on Desktop Chrome.
```python
npx playwright test --project=Desktop-Chrome
```

### Runs the tests only on Mobile Android.
```python
npx playwright test --project=Android
```


