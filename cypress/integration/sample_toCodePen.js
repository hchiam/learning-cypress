// inspired by https://github.com/bahmutov/cypress-codepen-hyperapp-demo/blob/be78ff836da283280826445d9fe00ee944997028/cypress/integration/spec.js

// the codepen has top level URL
const url = 'https://codepen.io/hchiam/full/NLVQeo/'
// which loads app from this URL
const iframeUrl = 'https://s.codepen.io/hchiam/fullpage/NLVQeo'
describe('codepen example', () => {
    beforeEach(function loadAppIFrameAndSetAsOurTestDocument () {
        cy.request({
            method: 'GET',
            url: iframeUrl,
            headers: {
                Referer: url,
                accept: 'text/html'
            }
        })
        .its('body')
        .then(html => {
            cy.window().its('document').then(document => {
                document.write(html);
                document.close();
            });
        });
        cy.get('#input').should('be.visible')
    })

    it('starts with zero', () => {
        cy.get('#input').type('x is 1',{force:true}).should('have.value','x is 1',{force:true})
    })
})