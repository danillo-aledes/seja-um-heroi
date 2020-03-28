const generateuniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const inst = await connection('institutions').select('*');

        return response.json(inst);
    },

    async create (request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateuniqueId();

        await connection('institutions').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({ id });
    }
};