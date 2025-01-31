describe('template spec', () => {
  
    it('Executa o teste em looping', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

      cy.visit('https://homo.programalidera.com.br')

      cy.get('.d-md-flex > .js-lcc-accept').click()
      
      cy.get('[style="margin-top: 30px"] > .btn').click()
      
      cy.get('#cnpj_or_cpf').should('be.visible').type('72282593782')
      cy.get('#password').should('be.visible').type('Teste@123')
      
      // CY.PAUSE(); PRO reCAPTCHA
      cy.pause()
      
      cy.get('#access').should('be.visible').click()
      
      cy.url({ timeout: 10000 }).should('eq', 'https://homo.programalidera.com.br/home')
      
      //cy.get('.swal2-confirm').click()
      
      cy.get('.mr-2 > .btn').click()
  
      //teste enviado pdf 
    //   const pdfFiles = ['Anacleto Accent Jatoba.pdf', 
    //                     'Anacleto Aproach Jatoba NF 1072.pdf', 
    //                     'Anacleto Aproach Perdizes NF 1071.pdf',
    //                     'Anacleto Aproach Jatoba NF 1103.pdf']
      
    //   pdfFiles.forEach((file) => {
    //       cy.get('label > .img-fluid').click()
      
    //       cy.get('input[type="file"]').attachFile(file)
      
    //       cy.wait(20000) 
      
    //       cy.get('.mb-3.p-0 > .w-75').click() 
      
    //       cy.wait(20000) 

    //       cy.get('.swal2-confirm').should('be.visible').click({ force:true })
    //})
    const chaveAcesso = [
        '3525 0161 0649 2900 0179 5572 8000 6433 7499 4259 7136',
        '3525 0161 0649 2900 0179 5514 3000 6331 4244 5250 3154',
        '3525 0161 0649 2900 0179 5530 8000 7883 7231 5047 0479',
        '3525 0161 0649 2900 0179 5503 4000 9931 5228 1911 4717',
        '3525 0161 0649 2900 0179 5537 0000 8426 6453 0690 5441',
        '3525 0161 0649 2900 0179 5505 1000 1617 1372 2640 0848'
    ];
     
    chaveAcesso.forEach((chave) => {
        cy.get('#access_key').clear().type(chave);

        cy.get('.col-12 > .btn').click(); 

        cy.wait(15000);

        cy.get('.swal2-confirm').should('be.visible').click({ force: true });
     
    
      })
    });
})