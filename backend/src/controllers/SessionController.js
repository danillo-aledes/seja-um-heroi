const connection = require('../database/connection');

module.exports = {
    async create (request, response) {
        const { id } = request.body;

        const inst = await connection('institutions')
            .where('id', id)
            .select('name')
            .first()

        if(!inst) {
            return response.status(400).json({ error: 'No INSTITUTION found with this ID' });
        }

        return response.json(inst);
    }
};