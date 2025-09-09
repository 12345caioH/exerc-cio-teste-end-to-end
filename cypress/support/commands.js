Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('irParaCheckout', () => {
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click();
    cy.get('#cart .view-cart').click();
    cy.get('.checkout-button').click();
});

Cypress.Commands.add('preencherCheckout', (checkout) => {
  cy.get('#billing_first_name').type(checkout.nome)
  cy.get('#billing_last_name').type(checkout.sobrenome)
  cy.get('#billing_address_1').type(`${checkout.endereco1.rua}, ${checkout.endereco1.numero}`)
  cy.get('#billing_address_2').type(checkout.endereco2.bairro)
  cy.get('#billing_city').type(checkout.cidade)
  cy.get('#billing_postcode').type(checkout.cep)
  cy.get('#billing_phone').type(checkout.telefone)
  cy.get('#terms').check()
  cy.get('#place_order').click()
  cy.get('.woocommerce-notice', { timeout: 10000 })
    .should('contain', 'Obrigado. Seu pedido foi recebido.');
});

