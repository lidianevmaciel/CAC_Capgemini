/// <reference types="Cypress" />

class CacPage {

    elements = {
        inputFirstName: () => cy.get('#firstName'),
        inputLastName: () => cy.get('#lastName'),
        inputEmail: () => cy.get('#email'),
        inputPhone: () => cy.get('#phone'),
        selectProduct: () => cy.get('#product'),
        radioButtonAtendimentoTat: () => cy.get('[name="atendimento-tat"]'),
        //checkBox: () => cy.get('#email-checkbox'),
        checkBox: () => cy.get('[type="checkbox"'),
        inputText: () => cy.get('#open-text-area'),
        uploadFile: () => cy.get('#file-upload'),
        buttonSubmit: () => cy.get('[type="submit"]'),
        successMessage: () => cy.get('.success'),
        errorMessage: () => cy.get('.error')
    }

    FillFirstName(firstName) {
        this.elements.inputFirstName().type(firstName).should('have.value', firstName)
    }

    FillLastName(lastName) {
        this.elements.inputLastName().type(lastName).should('have.value', lastName)
    }

    FillPhoneNumber(phoneNumber) {
        this.elements.inputPhone().type(phoneNumber).should('have.value', phoneNumber)
    }

    FillEmail(email) {
        this.elements.inputEmail().type(email).should('have.value', email)
    }

    PessoalInformation(firstName, lastName, email, phoneNumber) {
        this.FillFirstName(firstName)
        this.FillLastName(lastName)
        this.FillEmail(email)
        this.FillPhoneNumber(phoneNumber)
    }

    selectProduct(product) {
        this.elements.selectProduct().select(product).should('have.value', product)
    }

    checkRadioButton(tipoDeAtendimento) {
        this.elements.radioButtonAtendimentoTat().check(tipoDeAtendimento).should('be.checked')
    }

    checkMeioDeContato(email) {
        this.elements.checkBox().check(email).should('be.checked')
    }

    FillText(message) {
        this.elements.inputText().type(message).should('have.text', message)
    }

    clickSubmitButton() {
        this.elements.buttonSubmit().click()
    }

    checkErrorMessage() {
        this.elements.errorMessage().should('be.visible')
    }
}

export default new CacPage();