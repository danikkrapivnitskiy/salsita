
describe('Homework', () => {
    //first page
    it("first page", () => {
        cy.visit('https://qa-homework.herokuapp.com/')
        cy.get('.enterButton')
            .should('have.class', 'enterButton')
            .click()
    })

    //second page
    it("second page", () => {
        
        const password = document.querySelector("[type='hidden']").getAttribute('value')

        cy.get('#code').type(password)

        var chbox = cy.get("input[type='checkbox']")
        if (chbox.should('not.have.checked')) {
            chbox.check()
        }
        chbox.should('be.checked')

        cy.get("button[type='submit']").click
    })
})