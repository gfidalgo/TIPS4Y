describe('Tips4Y', () => {
  /* it('TC01 - Login Failed', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
  })

  it('TC02 - Login Sucesso', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');
    })*/

  it('TC03 - Criar Conta', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');

    cy.get('.dropdown-toggle').click('left');
    cy.get('.dropdown-menu > :nth-child(1) > a').click('left');
    cy.get('#nome').type('Nova Conta');
    cy.get('.btn').click('left');
    cy.get('.alert').first().should('have.text', 'Conta adicionada com sucesso!');
    }) 

  it('TC04 - Editar Nome Conta', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');

    cy.get('.dropdown-toggle').click('left');
    cy.get('.dropdown-menu > :nth-child(2) > a').click('left');
    cy.get('[class="glyphicon glyphicon-edit"]').first().click('left');
    cy.get('#nome').type(' Modificada');
    cy.get('.btn').click('left');
    cy.get('.alert').first().should('have.text', 'Conta alterada com sucesso!');

    })

   it('TC05 - Criar Movimentacao - Conta para saldo', function() {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');

    //cy.get('tbody > :nth-child(3) > :nth-child(2)')
    
    cy.get(':nth-child(3) > a').click('left');
    cy.get('#tipo').select('Receita');
    cy.get('#data_transacao').type('10/10/2022');
    cy.get('#data_pagamento').type('11/11/2022');
    cy.get('#descricao').type('Validar o saldo');
    cy.get('#interessado').type('Muito');
    cy.get('#valor').type('500');
    cy.get('#conta').select('Nova Conta Modificada');
    cy.get('#status_pago').click('left');
    cy.get('#status_pago').not('[disabled]').check().should('be.checked')
    cy.get('.btn').click('left');
    cy.get('.alert').first().should('have.text', 'Movimentação adicionada com sucesso!');

    //validar o saldo
    //const valorFinal = parseFloat(storedValue) + 500.00;
    //cy.log(valorFinal);
    //cy.get('.nav > :nth-child(1) > a').click('left');
    //cy.get('tbody > :nth-child(3) > :nth-child(2)').should('have.text', "valorFinal");
  }) 

  /* it('TC06 - Validar Movimentacao', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');

    
    cy.get('tbody > :nth-child(4) > :nth-child(1)').should('have.text', 'Nova Conta Modificada');
    cy.get(':nth-child(4) > :nth-child(2)').should('have.text', '1500.00');
    })  */

    it('TC07 - Eliminar Movimentacao', () => {
      cy.visit('https://seubarriga.wcaquino.me/login')
      cy.get('.navbar-brand').first().should('be.exist');
      cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
      cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
      cy.get('.btn').click('left');
      cy.get('.alert').should('contain', 'Bem vindo, ');
  
      cy.get(':nth-child(4) > a').click('left');
      cy.get('#mes').select('Novembro');
      cy.get('#ano').select('2022');
      cy.get('.btn').click('left');
      cy.get(':nth-child(1) > :nth-child(6) > a > .glyphicon').click('left');
      cy.get('.alert').should('have.text', 'Movimentação removida com sucesso!');
      }) 
/*
  it('TC14 - Eliminar Conta', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');

    cy.get('.dropdown-toggle').click('left');
    cy.get('.dropdown-menu > :nth-child(2) > a').click('left');
    cy.get('[class="glyphicon glyphicon-remove-circle"]').first().click('left');
    cy.get('.alert').first().should('have.text', 'Conta removida com sucesso!');

    })

   it('TC15 - Logout', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');

    
    cy.get(':nth-child(5) > a').click('left');
    cy.get('#email').first().should('be.exist');
    })   */


})