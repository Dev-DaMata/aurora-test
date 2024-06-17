import agents from '../../../mocks/factories/agent'

describe('Create agent', () => {
    const agent = agents.agentData()
    let userToken;
    let agentId;
    before(function () {
        cy.auth().then(res => {
            userToken = res.body.token
        })
    })
    it('create agent', () => {

        cy.createAgent(userToken, agent).then(res => {
            expect(res.status).to.eq(200)
            cy.log(JSON.stringify(res.body.agentId))
            agentId = res.body.agentId
            cy.task("READFROMDB", {
                dbConfig: Cypress.config('DBAPP'),
                sql: `DELETE FROM "Agent" where "AgentId" = '${agentId}'`
            }).then(res => {
                expect(res.command).to.eq("DELETE")
                expect(res.rowCount).to.eq(1)
            })
        })
        
    })

    it.only('teste query command',()=>{
        let conec = "DBAPP"
        let table = "Agent"
        cy.findBD(conec, table).then(res=>{
            cy.log(JSON.stringify(res))
        })
    })
})