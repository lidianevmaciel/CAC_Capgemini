/// <reference types="Cypress" />

import CacPage from "../pages/CacPage";

describe('Suíte de Testes', () => {
    beforeEach(() => {
        cy.visit('http://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        //cy.title().should('be.equal', 'CAC TAT')
    });

    it('TC01 Criar um formulario', function () {
        CacPage.PessoalInformation('Carlos', 'Silva', 'carlossilva@test.com', '819999902492')
        CacPage.checkMeioDeContato()
        CacPage.selectProduct('youtube')
        CacPage.checkRadioButton('feedback')
        CacPage.checkMeioDeContato('phone')
        CacPage.clickSubmitButton()
        CacPage.checkErrorMessage()
    })
})