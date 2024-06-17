import {faker} from '@faker-js/faker'
import randomAgent from '../../utils/helpers.js'

const randomName = faker.person.fullName()
const randomType = randomAgent.getRandomAgentType()
const dateGenerator = faker.date.anytime()
const id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"
export default {
    agentData() {
        let data = {
            created: dateGenerator,
            createdBy: id,
            updated: dateGenerator,
            updatedBy: id,
            agentId: id,
            tenantId: id,
            userId: id,
            agentTypeId: randomType,
            name: randomName
        }
        return data
    }
}