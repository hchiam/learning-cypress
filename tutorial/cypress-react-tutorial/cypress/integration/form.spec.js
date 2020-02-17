describe('form', () => {
  beforeEach(() => { // run before each test (before each "it(...)")
    cy.visit('/');
  });

  it('auto-focuses the input', () => {
    // cy.focused().should('have.class', 'form-control');
    cy.get('[data-cy=input]').should('have.focus');
  });

  it('accesses input', () => {
    const input = 'Learn about Cypress';
    // cy.get('input.form-control')
    cy.get('[data-cy=input]')
      .type(input)
      .should('have.value', input);
  });

  it('displays a list of todo items by default', () => {
    cy.get('li')
      .should('have.length', 2);
  });

  it('can add a new todo item', () => {
    const input = 'Learn about Cypress';
    cy.get('input.form-control')
      .type(input)
      .type('{enter}')
      .get('li')
      .should('have.length', 3);
  });

  it('can delete a todo item from the default 2-item list', () => {
    cy.get('li')
      .first()
      .find('.btn-danger')
      .click()
      .get('li')
      .should('have.length', 1);
  });

  // it.only('can delete all todo items', () => {
  it('can delete all todo items', () => {
    cy.get('li').first()
      // .find('.btn-danger')
      .find('[data-cy=delete-todo-item]')
      .click()
      .get('li').first()
      // .find('.btn-danger')
      .find('[data-cy=delete-todo-item]')
      .click()
      // .get('.no-task')
      .get('[data-cy=no-task]')
      .should('have.text', 'No task!')
  });
});
