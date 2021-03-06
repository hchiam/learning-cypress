# Learning Cypress

Just one of the things I'm learning. https://github.com/hchiam/learning

Cypress = E2E testing in the browser = simulate user actions.

Update: Cypress 4.0 also supports Firefox and Edge.

## Starting from scratch:

```bash
cd /your/project/path
npm install cypress --save-dev
npx cypress open
```

## If you're starting from this repo, do the following once:

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

## Official examples/recipes

For example, here's an official example for testing drag and drop: <https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/testing-dom__drag-drop/cypress/integration/drag_n_drop_spec.js>

```js

function movePiece (number, x, y) {
  cy.get(`.piece-${number}`)
  .trigger('mousedown', { which: 1 })
  .trigger('mousemove', { clientX: x, clientY: y })
  .trigger('mouseup', { force: true })
}

function dropBallInHoop (index) {
  cy.get('.balls img').first()
  .trigger('dragstart')

  cy.get('.hoop')
  .trigger('drop')
}

...
cy.get('.hoop')
.trigger('dragenter')
.should('have.class', 'over')
.trigger('dragleave')
.should('not.have.class', 'over')
```

## Sub-folder to try out [combining Cucumber.js and Cypress](https://github.com/hchiam/learning-cypress/tree/master/cucumber):

```bash
cd cucumber
```

<https://learndevtestops.com/2019/09/29/cucumber-integration-with-cypress-io-in-5-minutes/>

## Example of an Azure Devops repo running Cypress tests (+Cucumber/Gherkin)

<https://dev.azure.com/hchiam/_git/test-cypress?path=README.md>
