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
        '3525 0161 0649 2900 0179 5549 7000 1659 7794 0891 1440',
        '3525 0161 0649 2900 0179 5576 0000 7155 5782 6603 9673',
        '3525 0161 0649 2900 0179 5582 8000 6659 3486 6406 3287'
    ];
     
    chaveAcesso.forEach((chave) => {
        cy.get('#access_key').clear().type(chave);

        cy.get('.col-12 > .btn').click(); 

        cy.wait(15000);

        cy.get('.swal2-confirm').should('be.visible').click({ force: true });
     
    
      })
    });
})