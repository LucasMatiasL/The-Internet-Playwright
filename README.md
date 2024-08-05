# Web Interaction with Playwright
A repository demonstrating how to interact with webpages using Playwright, a Node.js library for automating testing.

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Tests](#running-the-tests)


## Introduction

This repository contains examples and code snippets demonstrating how to interact with webpages using Playwright with TypeScript using Page Object
Model as a design pattern.
Playwright provides a high-level API for automating web browsers, enabling tasks such as form submission, content extraction, UI interactions and more.

## Getting Started
### Prerequisites

Ensure you have the following software installed on your system:
- [Git Bash](https://git-scm.com/downloads)
- [nvm] (https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
- [npm](https://www.npmjs.com/) (typically bundled with Node.js)

## Installation
1. Clone this repository to your local machine using git clone:
```python
git clone https://github.com/LucasMatiasL/The-Internet-Playwright.git
```

2. Navigate to the project directory.

## Usage
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


