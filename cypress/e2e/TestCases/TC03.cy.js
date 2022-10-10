describe('Login Sucesso', () => {
  it('Abrir Browser', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
  })

  it('Verifca se site abriu', () => {
    cy.get('.navbar-brand').first().should('be.exist');
    })

  it('Fazer login', () => {
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('be.exist');
  })

  it('Criar Movimentacao', () => {
    cy.get('.active > a').click('left');
    })


})