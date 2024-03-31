import tests from '../../mocks/factories/teste'

describe('test', () =>{
    const test = tests.testReturn()
    it('test', ()=>{
        cy.log(JSON.stringify('spec de test está aqui!'))
        cy.log(JSON.stringify(test))
        cy.test().then(res=>{
            cy.log(JSON.stringify(res))
        })
    })
})