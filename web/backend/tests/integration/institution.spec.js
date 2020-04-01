const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('INST', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterEach(async () => {
        await connection.destroy();
    });

    it('should be able to create a new INSTITUTION', async () => {
        const response = await request(app)
            .post('/institutions')
            .send({
                user: "usertest",
                password: "123",
                name: "Institution Test",
                email: "contact@contact.com",
                whatsapp: "12345678910",
                city: "Sorocaba",
                uf: "SP"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});