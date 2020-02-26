# Tutorial to try out combining Cucumber.js and Cypress

## What you can do to test this out

```bash
cd cucumber
yarn
npx cypress open
# click on the .feature file
```

The 2 key test files: (out of 4 files)

```text
cypress
--integration
----login (folder must match .feature file name)
------login.js (cypress)
----login.feature (cucumber gherkin)
```

Besides them, you of course need `cypress`, but also the [`cypress-cucumber-preprocessor`](https://www.npmjs.com/package/cypress-cucumber-preprocessor) plugin installed in `package.json` and used in `/cypress/plugins/index.js` to pre-process Gherkin .feature files for running tests in Cypress.

## What I had to do to set it up

```bash
cd cucumber
yarn add --dev cypress cypress-cucumber-preprocessor
npx cypress open
# stop
rm -rf cypress/integration/examples
touch package.json
touch integration/login.feature
touch integration/login/login.js
# edit cypress/plugins/index.js
npx cypress open
# click on the .feature file
```

```js
// open and edit: cucumber/cypress/plugins/index.js
const cucumber = require('cypress-cucumber-preprocessor').default;
module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
};
```

```json
// cucumber/package.json
{
  "devDependencies": {
    "cypress": "^4.0.2",
    "cypress-cucumber-preprocessor": "^2.0.1"
  },
  "scripts": {
    "test": "cypress run",
    "cypress": "cypress open"
  },
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
  }
}
```

```feature
# cucumber/cypress/integration/login.feature
Feature: Login Feature

As a valid customer
In order to purchase items
I want to login successfully to Swag Labs

Scenario: Login Validation

Given I am in the Swag Labs login page
When I enter valid credentials
Then I should be able to login successfully
```

```js
// cucumber/cypress/integration/login/login.js

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

Given('I am in the demo site', () => {
  cy.visit('https://www.saucedemo.com/index.html');
});

When('I enter valid credentials', () => {
  cy.get('[data-test=username]').type('standard_user');
  cy.get('[data-test=password]').type('secret_sauce');
  cy.get('.btn_action').click();  
});

Then('I should be able to login successfully', () => {
  cy.get('.bm-burger-button > button').click();
  cy.get('#logout_sidebar_link').click();
});
```

```bash
npx cypress open
```

## References

<https://learndevtestops.com/2019/09/29/cucumber-integration-with-cypress-io-in-5-minutes/>

<https://github.com/grajk88/cypress-cucumber-tests>

Or my earlier notes:

<https://github.com/hchiam/learning-cucumber#combine-cypress-and-cucumber>
