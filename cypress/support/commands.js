Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('input[name="firstName"]').type('Gabriel', {delay:0})
    cy.get('input[name="lastName"]').type('Neri', {delay:0})
    cy.get('input[id="email"]').type('gabriel.neri.qa@gmail.com', {delay:0})
    cy.get('textarea[name="open-text-area"]')
    .type('Muito Boa a mentoria, Recomendo a todos que puderem adquirir', {delay:0})
    cy.contains('button', 'Enviar').click()
})