# Learning Cypress

Just one of the things I'm learning. https://github.com/hchiam/learning

Cypress = E2E testing in the browser = simulate user actions.

Update: Cypress 4.0 also supports Firefox and Edge.

## Do once for this project:

```bash
cd learning-cypress
npm install cypress --save-dev
```

## Then do once per test:

```bash
node_modules/.bin/cypress open
```

(click on a .js test file to run it - it will auto-run whenever you re-save the file)

## Key files:

- `cypress/integration/*.spec.js` = test(s)
- `cypress.json` = settings

## [Sub-folder for more learning](https://github.com/hchiam/learning-cypress/tree/master/tutorial):

[tutorial](https://github.com/hchiam/learning-cypress/tree/master/tutorial) folder includes things like an example API call, `data-cy` selector best-practices, and CLI command options notes:

```bash
cd tutorial
```

<https://css-tricks.com/using-cypress-to-write-tests-for-a-react-application/>

## Sub-folder to try out [combining Cucumber.js and Cypress](https://github.com/hchiam/learning-cypress/tree/master/cucumber):

```bash
cd cucumber
```

<https://learndevtestops.com/2019/09/29/cucumber-integration-with-cypress-io-in-5-minutes/>

## Example of an Azure Devops repo running Cypress tests (+Cucumber/Gherkin)

<https://dev.azure.com/hchiam/_git/test-cypress?path=README.md>
