describe('W3 School', () => {
  it('test form', ()=>{
    // cy.visit('https://www.w3schools.com/html');
    // cy.get('#leftmenuinnerinner', { timeout: 300 }).scrollTo('bottom');
    // cy.pause();
    // cy.get('#leftmenuinnerinner a', { timeout: 300 }).contains('HTML Forms').click();

    // cy.contains('a[href$="html_forms.asp"]').click();
    // cy.wait(100);
    cy.visit('https://www.w3schools.com/html/html_forms.asp');
    cy.get('input[name=firstname]').clear().type('neck');
    cy.get('input[name=lastname]').clear().type('shoulder');
    cy.get('Submit').click();
    cy.url().should('include', 'tryhtml_form_submit');
    cy.get('input[name=firstname]').should('have.value', 'neck');


//     cy.get('#element')
//   .then(($myElement) => {
//     doSomething($myElement)
//   })


cy.get(':checkbox').should('be.disabled')
cy.get('form').should('have.class', 'form-horizontal')
cy.get('input').should('not.have.value', 'US')
cy.get('button.close').click().should('not.exist')
cy.get('#header a').should('have.class', 'active').and('have.attr', 'href', '/users')
cy.get('.mobile-nav').should('be.visible').and('contain', 'Home')
cy.get('.article').find('footer')
cy.get('#parent').find('li')
cy.get('tr').eq(2).should('contain', 'Canada')  //true

cy
  .get('.my-selector')
  .as('myElement') // sets the alias
  .click()

cy
  .get('@myElement') // re-queries the DOM as before (only if necessary)
  .click()

  cy.request('/users/1').its('body').should('deep.eq', { name: 'Jane' })





  });
});


describe('if your app uses jQuery', function () {
    ['mouseover', 'mouseout', 'mouseenter', 'mouseleave'].forEach((event) => {
      it('triggers event: ' + event, function () {
        // if your app uses jQuery, then we can trigger a jQuery
        // event that causes the event callback to fire
        cy
          .get('#with-jquery').invoke('trigger', event)
          .get('#messages').should('contain', 'the event ' + event + 'was fired')
      })
    })
  })

  it.skip('returns "fizz" when number is multiple of 3', function () {
    numsExpectedToEq([9, 12, 18], 'fizz')
  })


