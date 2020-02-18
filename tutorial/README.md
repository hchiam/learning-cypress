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

Cypress CLI command options (e.g. `-s` for specific spec files, `-b` for browser): <https://docs.cypress.io/guides/guides/command-line.html#Options>

For the pros and cons of (not) stubbing network requests: <https://docs.cypress.io/guides/guides/network-requests.html#Testing-Strategies> (e.g., realism vs. repeatability/reseeding problems).

## Plugin for snapshot and image matching

<https://github.com/meinaart/cypress-plugin-snapshots>

(May come in handy for `canvas` elements.)

## An official example repo

<https://github.com/cypress-io/cypress-example-kitchensink>
