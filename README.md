![testing_workflow_status](https://github.com/ugGit/clock-creator/actions/workflows/testing.yml/badge.svg)
[![codecov](https://codecov.io/gh/ugGit/clock-creator/graph/badge.svg?token=1BJ0Q27WSP)](https://codecov.io/gh/ugGit/clock-creator)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/uggit/clock-creator)

# Clock Creator

Learning on the job!
This project is used to develop a clock-creator component using NextJS.
Aside of the coding task, the project tries to enforce best-practices as early as possible.
This includes the following features:

- git commit message linting
- git pre-push hook to run tests and ESLint
- GitHub actions for code coverage reporting (and redundantly again running the tests)

## How to Start

Download the repo and execute the following command to run the development server:

```
$ yarn dev
```

## Explanation of the Automation Technologies

This section briefly outlines which tools are employed for the differen automation tasks.

### Git Commit Message Linter

To force myself to use decent commit messages, the project is using a git commit message linter.
The linter is run before a commit is done thrugh [commitlint](https://commitlint.js.org/) and [husky](https://github.com/typicode/husky).
The default configuration is used which enforces the following style:

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: Optional, can be anything specifying the scope of the commit change.
  |                          For example $location|$browser|$compile|$rootScope|ngHref|ngClick|ngView, etc.
  |                          In App Development, scope can be a page, a module or a component.
  │
  └─⫸ Commit Type: feat|fix|docs|style|refactor|test|chore|perf|ci|build|temp
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

Where the following definitions for the types shall apply:

- feat: 'A new feature.',
- fix: 'A bug fix.',
- docs: 'Documentation only changes.',
- style: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).',
- refactor: 'A code change that neither fixes a bug nor adds a feature.',
- test: 'Adding missing tests or correcting existing ones.',
- chore: 'Changes to the build process or auxiliary tools and libraries such as documentation generation.',
- perf: 'A code change that improves performance.',
- ci: 'Changes to your CI configuration files and scripts.',
- build: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).',
- temp: 'Temporary commit that won\'t be included in your CHANGELOG.',

### Git Pre-Push Hook to Run Tests and ESLint

An ideal code base has no failing tests.
To prevent myself of pushing any failing tests to the repository, a [husky](https://github.com/typicode/husky) pre-push hook prevents that.
The hook runs all tests defined with [jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/), as well as ESLint.

### GitHub Actions for Code Coverage Reporting

To keep an overview of the code coverage, a workflow is defined with GitHub Actions.
The reporting is implemented using [codecov](https://about.codecov.io/) and displayed with a badge at the top of this badge.
