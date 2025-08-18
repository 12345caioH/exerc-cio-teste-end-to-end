/// <reference types="cypress" />
import produtosPage from '../support/page_objects/produtos.page'
const perfil = require('../fixtures/perfil.json')
const checkout = require ('../fixtures/checkout.json')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    beforeEach(() => {
      cy.visit('minha-conta');
    });

    it('Deve finalizar o pedido com sucesso', () => {
        
        cy.fixture('perfil').then(perfil => {
            cy.login(perfil.usuario, perfil.senha)
        });

         cy.fixture('produtos').then(dados => {
            dados.forEach(produto => {
            produtosPage.visitarProduto(produto.nomeProduto)
            produtosPage.addProdutoCarrinho(
                produto.tamanho,
                produto.cor,
                produto.quantidade
            )
            })
        })

        cy.irParaCheckout()

        cy.fixture('checkout').then(dados => {
            cy.preencherCheckout(dados)
            })     
    });
})