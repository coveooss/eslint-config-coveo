# Instructions for Logging Issues

## 1. Search for Duplicates

[Search the existing issues](https://github.com/coveo/eslint-config-coveo/issues) before logging a new one.

## 2. Do you have a question?

The issue tracker is for **issues**, in other words, bugs and suggestions.

## 3. Did you find a bug?

When logging a bug, please be sure to include the following:

 * If at all possible, an *isolated* way to reproduce the behavior
 * The behavior you expect to see, and the actual behavior


## 4. Do you have a suggestion?

We also accept suggestions in the issue tracker.

In general, things we find useful when reviewing suggestions are:

* A description of the problem you're trying to solve
* An overview of the suggested solution
* Examples of how the suggestion would work in various places
  * Code examples showing e.g. "this would be an error, this wouldn't"
  * Code examples showing the generated JavaScript (if applicable)

# Instructions for Contributing Code

## Contributing bug fixes

eslint-config-coveo is currently accepting contributions in the form of bug fixes. A bug must have an issue tracking it in the issue tracker that has been approved ("Milestone == Community") by the Coveo team. Your pull request should include a link to the bug that you are fixing. If you've submitted a PR for a bug, please post a comment in the bug to avoid duplication of effort.

## Contributing features

Features (things that add new or improved functionality to eslint-config-coveo) may be accepted, but will need to first be approved (marked as "Milestone == Community" by a eslint-config-coveo coordinator with the message "Approved") in the suggestion issue. Features with language design impact, or that are adequately satisfied with external tools, will not be accepted.

Design changes will not be accepted at this time. If you have a design change proposal, please log a suggestion issue.


## Housekeeping

Your pull request should:

* Include a description of what your change intends to do
* Be a child commit of a reasonably recent commit in the **master** branch
    * Requests need not be a single commit, but should be a linear sequence of commits (i.e. no merge commits in your PR)

* It is desirable, but not necessary, for the tests to pass at each commit
* Have clear commit messages
    * e.g. "Refactor feature", "Fix issue", "Add tests for issue"
* Include adequate tests
    * At least one test should fail in the absence of your non-test code changes. If your PR does not match this criteria, please specify why
    * Tests should include reasonable permutations of the target fix/change
    * Include baseline changes with your change
    * All changed code must have 100% code coverage

## Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the eslint-config-coveo changelog**.

The commit message formatting can be added using a typical git workflow or through the use of a CLI wizard ([Commitizen](https://github.com/commitizen/cz-cli)). To use the wizard, run `npm run commit` in your terminal after staging your changes in git.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### Scope
The scope could be anything specifying place of the commit change. For example `$location`,
`$browser`, `$compile`, `$rootScope`, `ngHref`, `ngClick`, `ngView`, etc...

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.
