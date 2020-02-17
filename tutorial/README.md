# Tutorial for more learning

<https://css-tricks.com/using-cypress-to-write-tests-for-a-react-application/>

```bash
cd tutorial/cypress-react-tutorial/
yarn
node_modules/.bin/cypress open # or yarn cypress
```

and in another CLI:

```bash
cd tutorial/cypress-react-tutorial/
yarn start
```

Note: [you should use `data-*` attributes to make your tests' selectors resilient to CSS/JS changes](https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements).

For example, this:

```js
cy.get('[data-cy=submit]')
// and yes, cy.get('[data-cy="submit"]') also works!
```

is the best-practice way to select this button:

```html
<button id="main" class="btn btn-large" name="submission"
  role="button" data-cy="submit">Submit</button>
```

The `data-cy="..."` attribute provides a targeted selector that's only used for testing, and tells other developers that this element is used by test code.

But if you actually want the test to fail upon changed text, use `cy.contains(someTextItMustBe)`.

## An official example repo

<https://github.com/cypress-io/cypress-example-kitchensink>
