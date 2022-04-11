/// <reference types="cypress" />

import cadastro from '../../support/pages/cadastro'

context('Cadastro', () => {
    it('Cadastro de usuario no site', () => {
        cadastro.acessarPaginaDeCadastro()
        cadastro.digitarEmail()
        cadastro.clicarNoBotaoCreate()
        cadastro.selecionarGenero()
        cadastro.digitarPrimeiroNome()
        cadastro.digitarSegundoNome()
        cadastro.digitarSenha()
        cadastro.selencionarDataNascimento()
        cadastro.digitarEndereco()
        cadastro.selecionarCidade()
        cadastro.selecionarEstado()
        cadastro.digitarCEP()
        cadastro.digitarTelefone()
        cadastro.clicarNoBotaoRegistrar()
        cy.contains('Welcome to your account. Here you can manage all of your personal information and orders.')
        cy.url().should('be.equal', 'http://automationpractice.com/index.php?controller=my-account');
    })
})