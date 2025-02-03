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
    const pdfFiles = ['01.pdf','02.pdf','03.pdf','04.pdf','05.pdf','06.pdf','07.pdf','08.pdf', '09.pdf','10.pdf','11.pdf','12.pdf','13.pdf','14.pdf','15.pdf','16.pdf','17.pdf','18.pdf','19.pdf','20.pdf','21.pdf','22.pdf','23.pdf','24.pdf','25.pdf','26.png' ,'27.png','28.webp'    

      ]
                     
    
    pdfFiles.forEach((file) => {
        cy.get('label > .img-fluid').click()
    
        cy.get('input[type="file"]').attachFile(file)
    
        cy.wait(20000) 
    
        cy.get('.mb-3.p-0 > .w-75').click() 
    
        cy.wait(20000) 

        cy.get('.swal2-confirm').should('be.visible').click({ force:true })
  })
})
})