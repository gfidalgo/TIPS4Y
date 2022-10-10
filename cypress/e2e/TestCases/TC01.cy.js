describe('Login Failed', () => {
  it('Abrir Browser', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
  })

  it('Verifca se site abriu', () => {
    cy.get('.navbar-brand').first().should('be.exist');
    })

  it('Fazer login', () => {
    cy.get('.btn').click('left');
    cy.get('.body-index > :nth-child(2)').should('be.exist');
    cy.get('.body-index > :nth-child(3)').should('be.exist');
  })

  
})