Cypress.Commands.add('createAdministratorUser', (name, email) => {
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type(name)
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(Cypress.env('USER_PASSWORD'))
    cy.get('[data-testid="checkbox"]').click()
    cy.get('[data-testid="cadastrar"]').click()

    //Validations
    cy.contains('Cadastro realizado com sucesso').should('be.visible')
}) 

Cypress.Commands.add('loginSuccessfully', (name, email) => {
    cy.get('[data-testid="email"]').type(Cypress.env('USER_EMAIL'))
    cy.get('[data-testid="senha"]').type(Cypress.env('USER_PASSWORD'))
    cy.get('[data-testid="entrar"]').click()

    //Validations
    cy.contains('Bem Vindo usuario teste').should('be.visible')
}) 

Cypress.Commands.add('createProduct', () => {
    cy.loginSuccessfully()
    cy.get('[data-testid="cadastrarProdutos"]').click()
    cy.get('[data-testid="nome"]').type('Guitarra')
    cy.get('[data-testid="preco"]').type('500')
    cy.get('[data-testid="descricao"]').type('Guitarra elétrica fender')
    cy.get('[data-testid="quantity"]').type('1')
    cy.get('[data-testid="imagem"]')
        .should('exist')
        .selectFile('cypress/fixtures/guitarra.jpg')
    cy.get('[data-testid="cadastarProdutos"]').click()

    //Validations
    cy.get('table.table-striped tbody td')
        .contains('Guitarra')
        .should('be.visible')
    cy.get('table.table-striped tbody td')
        .contains('500')
        .should('be.visible')
    cy.get('table.table-striped tbody td')
        .contains('Guitarra elétrica fender')
        .should('be.visible')
        cy.get('table.table-striped tbody td')
        .contains('1')
        .should('be.visible')

    //Retorna para Home
    cy.get('[data-testid="home"]').click()
}) 

Cypress.Commands.add('deleteProduct', (name, email) => {
    cy.createProduct()
    cy.get('[data-testid="listarProdutos"]').click()
    cy.get('table.table-striped tbody tr').filter((index, element) => {
        return Cypress.$(element).find('td').text().includes('Guitarra') &&
            Cypress.$(element).find('td').text().includes('Guitarra elétrica fender');
    }).find('td').last().find('button.btn.btn-danger').click();
}) 
