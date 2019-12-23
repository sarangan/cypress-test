describe('Test google', () => {

    it('Open google', ()=>{
        cy.visit('https://www.google.com');
        cy.contains('Gmail').click();
        cy.url().should('include', 'mail');

        // cy.pause();

        cy.go('back');
        cy.wait(3000);

        cy.get('input[name=q]').type('cypress').should('have.value', 'cypress');


        // cy.get('#main-content') ? jQuery
        //     .find('.article')
        //     .children('img[src^="/static"]')
        //     .first()


        // cy.exec('npm run db:reset && npm run db:seed') ?execute

        ///cy.visit('/login')
        // cy.get('input[name=username]').type(username)

        // // {enter} causes the form to submit
        // cy.get('input[name=password]').type(`${password}{enter}`)


        ///
        // cy.request('POST', '/login', { //POST MAN
        //     username,
        //     password
        //   })
      
        //   // now that we're logged in, we can visit
        //   // any kind of restricted route!
        //   cy.visit('/dashboard')

        // // we should be redirected to /dashboard
        // cy.url().should('include', '/dashboard')

        // // our auth cookie should be present
        // cy.getCookie('your-session-cookie').should('exist')

        // // UI should reflect this user being logged in
        // cy.get('h1').should('contain', 'jane.lane')


    });
  
});
