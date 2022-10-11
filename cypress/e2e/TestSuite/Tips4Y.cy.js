describe('Tips4Y', () => {
 
  it('TC01 - Criar User Existente', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get(':nth-child(2) > a').click('left');
    cy.get('#nome').type('Gonçalo');
    cy.get('#email').type('gfidalgo4@outlook.pt');
    cy.get('#senha').type('asd');
    cy.get('.btn').click('left');
    cy.get('.alert').should('have.text', 'Endereço de email já utilizado');
  })

  it('TC02 - Login Failed', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('.btn').click('left');
    cy.get('.body-index > :nth-child(2)').should('have.text', 'Email é um campo obrigatório');
    cy.get('.body-index > :nth-child(3)').should('have.text', 'Senha é um campo obrigatório');
    
    cy.get('#email').type('gfidalgo4@outlook.pt');
    cy.get('#senha').type('asd');
    cy.get('.btn').click('left');
    cy.get('.alert').should('have.text', 'Problemas com o login do usuário');
  })

  it('TC03 - Login Sucesso', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');
  })

  it('TC04 - Criar Conta', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');

    cy.get('.dropdown-toggle').click('left');
    cy.get('.dropdown-menu > :nth-child(1) > a').click('left');
    
    cy.get('.btn').click('left');
    cy.get('.alert').should('have.text', 'Informe o nome da conta');

    cy.get('#nome').type('Nova Conta');
    cy.get('.btn').click('left');
    cy.get('.alert').should('have.text', 'Conta adicionada com sucesso!');
  }) 

  it('TC05 - Criar Conta com mesmo Nome', () => {
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
    cy.get('.alert').should('have.text', 'Já existe uma conta com esse nome!');
  }) 

  it('TC06 - Editar Nome Conta', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');

    cy.get('.dropdown-toggle').click('left');
    cy.get('.dropdown-menu > :nth-child(2) > a').click('left');
    cy.contains('Nova Conta').siblings().find('a > span').first().click('left');
    cy.get('#nome').type(' Modificada');
    cy.get('.btn').click('left');
    cy.get('.alert').should('have.text', 'Conta alterada com sucesso!');

  })

  it('TC07 - Criar Movimentacao', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');

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
    cy.get('.alert').should('have.text', 'Movimentação adicionada com sucesso!');

    //validar o saldo
  })  

  it('TC08 - Validar Movimentacao', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');

    cy.contains('Nova Conta Modificada').should('have.text', 'Nova Conta Modificada');
    cy.contains('Nova Conta Modificada').siblings().should('have.text', '500.00');
  })  

  it('TC09 - Eliminar Movimentacao', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').should('be.exist');
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

    cy.get('.nav > :nth-child(1) > a').click('left');
    cy.contains('Nova Conta Modificada').should('not.exist');
  })

  it('TC10 - Criar Movimentacao com campos vazios', function() {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');
      
    cy.get(':nth-child(3) > a').click('left');
    cy.get('.btn').click('left');
    cy.get('.alert > ul > :nth-child(1)').should('have.text', 'Data da Movimentação é obrigatório');
    cy.get('.alert > ul > :nth-child(2)').should('have.text', 'Data do pagamento é obrigatório');
    cy.get('.alert > ul > :nth-child(3)').should('have.text', 'Descrição é obrigatório');
    cy.get('.alert > ul > :nth-child(4)').should('have.text', 'Interessado é obrigatório');
    cy.get('.alert > ul > :nth-child(5)').should('have.text', 'Valor é obrigatório');
    cy.get('.alert > ul > :nth-child(6)').should('have.text', 'Valor deve ser um número');

  })

  it('TC11 - Criar Movimentacao com campos errados', function() {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');
      
    cy.get(':nth-child(3) > a').click('left');
    
    cy.get('#tipo').select('Receita');
    cy.get('#data_transacao').type('abcd');
    cy.get('#data_pagamento').type('efgh');
    cy.get('#descricao').type('Validar o saldo');
    cy.get('#interessado').type('Muito');
    cy.get('#valor').type('ijkl');
    cy.get('#conta').select('Conta para saldo');
    cy.get('#status_pago').click('left');

    cy.get('.btn').click('left');
    cy.get('.alert > ul > :nth-child(1)').should('have.text', 'Data da Movimentação inválida (DD/MM/YYYY)');
    cy.get('.alert > ul > :nth-child(2)').should('have.text', 'Data da Movimentação deve ser menor ou igual à data atual');
    cy.get('.alert > ul > :nth-child(3)').should('have.text', 'Data do pagamento inválida (DD/MM/YYYY)');
    cy.get('.alert > ul > :nth-child(4)').should('have.text', 'Valor deve ser um número');
    
    cy.get('#data_transacao').clear().type('10/12/2023');
    cy.get('#data_pagamento').clear().type('10/08/2022');
    cy.get('#valor').clear().type('500');

    cy.get('.btn').click('left');
    cy.get('.alert > ul > :nth-child(1)').should('have.text', 'Data da Movimentação deve ser menor ou igual à data atual');

  })
  
  it('TC12 - Criar Movimentação e validar valores no Resumo Mensal', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');
    
    cy.get(':nth-child(3) > a').click('left');
    cy.get('#tipo').select('Receita');
    cy.get('#data_transacao').type('10/10/2022');
    cy.get('#data_pagamento').type('12/12/2022');
    cy.get('#descricao').type('Validar o Resumo Mensal');
    cy.get('#interessado').type('Muito');
    cy.get('#valor').type('1000');
    cy.get('#conta').select('Conta com movimentacao');
    cy.get('#status_pago').click('left');
    cy.get('#status_pago').not('[disabled]').check().should('be.checked')
    cy.get('.btn').click('left');
    cy.get('.alert').should('have.text', 'Movimentação adicionada com sucesso!');

    cy.get(':nth-child(4) > a').click('left');
    cy.get('#mes').select('Dezembro');
    cy.get('#ano').select('2022');
    cy.get('.btn').click('left');
    cy.contains('Validar o Resumo Mensal').should('have.text', 'Validar o Resumo Mensal');
    cy.contains('Validar o Resumo Mensal').siblings().first().should('have.text', '12/12/2022')
                                                     .next().should('have.text', 'Conta com movimentacao')
                                                     .next().should('have.text', '1000.00')
                                                     .next().should('have.text', 'Pago');
  })

  it('TC13 - Eliminar Conta com Movimentacoes', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');

    cy.get('.dropdown-toggle').click('left');
    cy.get('.dropdown-menu > :nth-child(2) > a').click('left');
    cy.contains('Conta para extrato').siblings().find('a > span').last().click('left');
    cy.get('.alert').should('have.text', 'Conta em uso na movimentações');

    cy.get(':nth-child(4) > a').click('left');
    cy.contains('Conta para extrato').siblings().find('a > span').last().click('left');
    cy.get('.alert').should('have.text', 'Movimentação removida com sucesso!');

    cy.get('.dropdown-toggle').click('left');
    cy.get('.dropdown-menu > :nth-child(2) > a').click('left');
    cy.contains('Conta para extrato').siblings().find('a > span').last().click('left');
    cy.get('.alert').should('have.text', 'Conta removida com sucesso!');

  })

  it('TC14 - Eliminar Conta', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('.navbar-brand').first().should('be.exist');
    cy.get('#email').type('gfidalgo4@outlook.pt').should('have.value', 'gfidalgo4@outlook.pt');
    cy.get('#senha').type('setembro.2022').should('have.value', 'setembro.2022');
    cy.get('.btn').click('left');
    cy.get('.alert').should('contain', 'Bem vindo, ');

    cy.get('.dropdown-toggle').click('left');
    cy.get('.dropdown-menu > :nth-child(2) > a').click('left');
    cy.contains('Nova Conta Modificada').siblings().find('a > span').last().click('left');
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
  })    

}) 