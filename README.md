# AcbmGlobal

This repository contains the source code for the **AcbmGlobal** web application, built with [Angular](https://angular.io/). This is the foundational Phase 1 implementation.

## Purpose

The purpose of this application is to serve as a robust frontend platform for the AcbmGlobal project. Currently, it provides the initial scaffolding and setup, including:
- Angular framework configuration.
- Routing module setup.
- Basic styling setup with Tailwind CSS (as indicated by configuration files).
- Testing infrastructure.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Active LTS version recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Angular CLI](https://github.com/angular/angular-cli) globally installed: `npm install -g @angular/cli`

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd acbm-global
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Testing

### Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. (Note: You may need to add a package that implements end-to-end testing capabilities first).

## Project Structure

- `src/`: Contains the source code.
  - `app/`: The main application code (components, modules, services).
  - `assets/`: Static assets like images.
  - `environments/`: Environment configuration files.
  - `main.ts`: The entry point of the application.

## Documentation

The codebase is fully documented with JSDoc/TSDoc comments. Please refer to the source files for detailed descriptions of classes, methods, and functions.
