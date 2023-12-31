# Web Interaction with Playwright
A repository demonstrating how to interact with webpages using Playwright, a Node.js library for automating browsers.

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Tests](#running-the-tests)


## Introduction

This repository contains examples and code snippets demonstrating how to interact with webpages using Playwright with TypeScript.
Playwright provides a high-level API for automating web browsers, enabling tasks such as form submission, content extraction, and UI interactions.
The design pattern used for this project is Page Object Model.

## Getting Started
### Prerequisites

Ensure you have the following software installed on your system:
- [Node.js](https://nodejs.org/) (version 20.9.0 or higher)
- [npm](https://www.npmjs.com/) (typically bundled with Node.js)

## Installation
1. Clone this repository to your local machine using git clone:
```python
git clone https://github.com/LucasMatiasL/The-Internet-Playwright.git
```

2. Navigate to the project directory.

3. Install the dependecies:
```python
npm i
```

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


