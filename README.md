# Monorepo Starter Proejct

### Monorepo
A monorepo (short for monolithic repository) is a software development strategy where code for many applications, which may or may not be mutually dependent, is stored in the same version-controlled repository.

Some advantages of the monorepo approach are:

- Ease of code reuse — it is easy to abstract shared behavior into common libraries.

- Simplified dependency management — third-party dependencies are easily shared.
Atomic commits across multiple applications — you can refactor multiple applications at once with a single commit.

- Single source of truth — there’s only one version of each dependency.
Unified CI/CD — a standardized process can build and deploy every application in the repository.

This project serves as a template to easily get started on the monorepo journey.

### What does a Lerna repo look like?

File structure that looks like this:

```
my-lerna-monorepo/
  package.json
  packages/
    package-1/
      package.json
    package-2/
      package.json
```

# Plugins

This project utilizes the following plugins:
***

## Lerna
[Lerna](https://lerna.js.org/): a tool that optimizes the workflow around managing multi-package repositories


## Yarn 
[Yarn](https://classic.yarnpkg.com/en/docs/getting-started): a package manager

Install
```
npm install --global yarn
```
Checked install by running
```
yarn --version
```
[additional information on usage](https://classic.yarnpkg.com/en/docs/usage)
## Husky
[Husky](https://typicode.github.io/husky/#/) a modern native git hooks tools to standardize git commits

## ESLint
[Eslint](https://eslint.org/docs/user-guide/getting-started): configure rules and syntax validation that fit the needs of your project. 

## Prettier
[Prettier](https://prettier.io/docs/en/index.html): an 
opinionated code formatter


***
