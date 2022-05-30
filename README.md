# CDK Monorepo Starter Project

### CDK Monorepo

A monorepo (short for monolithic repository) is a software development strategy where code for many applications, which may or may not be mutually dependent, is stored in the same version-controlled repository.

Some advantages of the monorepo approach are:

- Ease of code reuse — it is easy to abstract shared behavior into common libraries.

- Simplified dependency management — third-party dependencies are easily shared.
  Atomic commits across multiple applications — you can refactor multiple applications at once with a single commit.

- Single source of truth — there’s only one version of each dependency.
  Unified CI/CD — a standardized process can build and deploy every application in the repository.

This project serves as a template to easily get started on the CDK monorepo journey.

### Plugins

This project utilizes the following plugins:

- [yarn](https://classic.yarnpkg.com/en/docs/getting-started): tool to enable workspaces that allows users to install dependencies from multiple package.json files in subfolders of a single root package.json file.
- [lerna](https://lerna.js.org/): tool that optimizes the workflow around managing multi-package repositories with git by providing high-level commands. Lerna with Yarn Workspaces make it possible to develop across multiple components without having to publish them to a registry.
- [husky](https://typicode.github.io/husky/#/): enables native git hooks tools to standardize git commits.
- [eslint](https://eslint.org/docs/user-guide/getting-started): configure rules and syntax validation.
- [lint-staged](https://github.com/okonet/lint-staged#readme): linter against staged git files.
- [prettier](https://prettier.io/docs/en/index.html): an opinionated code formatter.
- [commitlint](https://commitlint.js.org/#/): checks if your commit messages meet the conventional commit format.
- [commitizen](https://commitizen-tools.github.io/commitizen/changelog/): will generate a changelog following the committing rules established.
- [aws\jsii](https://aws.github.io/jsii/): enables the AWS Cloud Development Kit to deliver polyglot libraries from a single codebase.
- [webpack](https://webpack.js.org/): module bundler for JavaScript.

### Trunk-based Development (TBD)

Branching model for software development where developers merge every new feature, bug fix, or other code change to one central branch in the version control system. Trunk-based development is a methodology for releasing new features and small changes quickly while helping to avoid lengthy bug fixes and "merge hell".

![image](images/trunk-based-development.png)

### Versioning

Commitizen plugin automates the whole package release workflow including: determining the next version number, generating changelog, and publishing the package. It analyses the commit messages, which are usually in a well known format like Conventional Commits, and then decides the next version.

![image](images/semantic_versioning.png)

- chore - changes that aren't user-facing.
- docs - changes that affect the documentation.
- feat - changes that introduce a new feature.
- fix - changes that patch a bug.
- perf - changes which improve performance.
- refactor - changes which neither fix a bug nor add a feature.
- revert - changes that revert a previous commit.
- style - changes that don't affect code logic, such as white-spaces, formatting, missing semi-colons.
- test - changes that add missing tests or correct existing tests.

### Initial Setup

Execute following commands:

1. npm install --global yarn
2. npm install --global lerna
3. git clone https://github.com/mrwconsulting/cdk-monorepo.git
4. cd cdk-monorepo
5. yarn install -f (this will download all supporting dependencies)

### Usage Examples

- execute git commit with lint formatting
  ```
   git commit -m "chore: your comments"
  ```
- resolve dependencies
  ```
   yarn install -f
  ```
- build project
  ```
  yarn cdk:build
  ```
- execute unit testing
  ```
  yarn test
  ```
- generate cloudformation template
  ```
  yarn cdk:synth
  ```
- deploy cloudformation stack
  ```
  yarn cdk:deploy
  ```
- generate version release
  ```
  yarn version:release
  ```
