/// <reference types="cypress" />
import { faker, Faker } from "@faker-js/faker";

describe('Web Serverest scenarios', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev')
    })

    it('Create Administrator User', () => {
        const dataTest = {
            name: faker.person.fullName(),
            email: faker.internet.email()
        }

        cy.createAdministratorUser(dataTest.name, dataTest.email)
    })

    it('Log in Successfully', () => {
        cy.loginSuccessfully()
    })

    it('Should delete a product successfully', () => {
        cy.deleteProduct()
    })
})

