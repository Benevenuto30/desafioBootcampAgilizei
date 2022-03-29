/// <reference types="cypress" />
let Chance = require('chance')
let chance = new Chance()
context('Cadastro', () => {
    it('Cadastro de usuario no site', () => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        cy.get('input#email_create').type(chance.email())
        cy.get('button#SubmitCreate').click()
        cy.get('input#id_gender1').check()
        cy.get('input#customer_firstname').type(chance.first())
        cy.get('input#customer_lastname').type(chance.last())
        cy.get('input#passwd').type('ab@C1234')
        cy.get('select#days').select('30');
        cy.get('select#months').select('September');
        cy.get('select#years').select('1996');
        cy.get('input#address1').type(chance.address())
        cy.get('input#city').type(chance.city())
        cy.get('select#id_state').select('Arizona')
        cy.get('input#postcode').type(chance.zip())
        cy.get('input#phone_mobile').type(chance.phone({formatted: false}));
        cy.get('button#submitAccount').click()
        cy.contains('Welcome to your account. Here you can manage all of your personal information and orders.')
        cy.url().should('be.equal', 'http://automationpractice.com/index.php?controller=my-account');
    })
})