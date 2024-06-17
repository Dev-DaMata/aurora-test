Cypress.Commands.add('createAgent', (userToken, body) => {
    cy.request({
        method: 'POST',
        url: 'https://localhost:7299/Agents/Add',
        body: body,
        headers: {
            Authorization: userToken,
        },
        failOnStatusCode: false,
    })
})