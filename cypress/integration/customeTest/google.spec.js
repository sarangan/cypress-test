describe('Test google', () => {

    it('Open google', ()=>{
        cy.visit('https://www.google.com');
        cy.contains('Gmail').click();
        cy.url().should('include', 'mail');

        cy.go('back');
        cy.wait(3000);
        
        cy.get('input[name=q]').type('cypress').should('have.value', 'cypress');
    });
  
});
