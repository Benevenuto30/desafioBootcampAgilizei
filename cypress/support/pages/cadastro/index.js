const elements = require('./elements').ELEMENTS

let Chance = require('chance')
let chance = new Chance()

class cadastro{

    acessarPaginaDeCadastro(){
        cy.visit('/index.php?controller=authentication&back=my-account')
    }
    
    digitarEmail(){
        cy.get(elements.inputEmail).type(chance.email())
    }

    clicarNoBotaoCreate(){
        cy.get(elements.buttonCreate).click()
    }

    selecionarGenero(){
        cy.get(elements.inputGender).check()
    }

    digitarPrimeiroNome(){
        cy.get(elements.inputFirstName).type(chance.first())
    }

    digitarSegundoNome(){
        cy.get(elements.inputLastName).type(chance.last())
    }

    digitarSenha(){
        cy.get(elements.inputPassword).type('ab@C1234')
    }

    selencionarDataNascimento(){
        cy.get(elements.selectDays).select('30')
        cy.get(elements.selectMonths).select('September')
        cy.get(elements.selectYears).select('1996')
    }
    
    digitarEndereco(){
        cy.get(elements.inputAdress).type(chance.address())
    }

    selecionarCidade(){
        cy.get(elements.inputCity).type(chance.city())
    }

    selecionarEstado(){
        cy.get(elements.selectState).select('Arizona')
    }

    digitarCEP(){
        cy.get(elements.inputPostCode).type(chance.zip())
    }

    digitarTelefone(){
        cy.get(elements.inputPhone).type(chance.phone({formatted: false}));
    }

    clicarNoBotaoRegistrar(){
        cy.get(elements.buttonSubmit).click()
    }
}

export default new cadastro