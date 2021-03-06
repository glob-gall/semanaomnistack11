const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG',()=>{
    beforeEach(async()=>{
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async()=>{
        await connection.destroy()
    })


    it('shold be able to create a new ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
            
                name:"csa",
                email:"aaa@teste.com",
                whatsapp:"6099999999",
                city:"pimenta bueno",
                uf:"ro"
            })
            expect(response.body).toHaveProperty('id')
            expect(response.body.id).toHaveLength(8)
    })
})