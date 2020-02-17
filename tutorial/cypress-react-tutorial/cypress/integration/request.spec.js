describe('Request', () => {
  it('gets 10 random users from API', () => {
    cy.request('https://jsonplaceholder.typicode.com/users')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(10)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      });
  })
  it('shows 10 random users from API', () => {
    cy.visit('/')
      .get('[data-cy=user]').should('have.length', 10);
  });
})
