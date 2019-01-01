describe('My First Test', function() {

    it('Gets, types and asserts', function() {

        cy.visit('https://example.cypress.io');

        cy.contains('type').click();

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions');

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');

    });

});

// DESCRIPTION OF THE ABOVE CODE:

// 1. Visit: https://example.cypress.io
// 2. Find the element with content: type
// 3. Click on it
// 4. Get the URL
// 5. Assert that the url includes: /commands/actions
// 6. Get the input with the .actions-email class
// 7. Type `fake@email.com` into the input
// 8. Assert that the input reflects the new value
