describe('test', () => {
    it('Database test DBAPP', () => {
        //call the task 
        cy.task("READFROMDB", {
            // get config from cypress.config.js
            dbConfig: Cypress.config('DBAPP'),
            //SQL we want to perform
            sql: 'select * from "Product"'
        }).then(res => {
            cy.log(JSON.stringify(res))
            cy.log(JSON.stringify(res.rows))
        })
    })

    it('Database test DBAUTH', () => {
        cy.task("READFROMDB", {
            dbConfig: Cypress.config('DBAUTH'),
            sql: 'select * from "User"'
        }).then(res => {
            cy.log(JSON.stringify(res.rows))
        })
    })

    it('test auth', () => {
        cy.auth().then(res=> {
            cy.log(JSON.stringify(res.body.token))
        })
    })
})