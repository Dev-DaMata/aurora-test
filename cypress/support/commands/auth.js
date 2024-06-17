Cypress.Commands.add('auth', () => {
    cy.request({
        method: 'POST',
        url: 'https://localhost:7299/Authentication/Login',
        body:{
            username: "string",
            password: "string"
        },
        failOnStatusCode: false,
    })
})