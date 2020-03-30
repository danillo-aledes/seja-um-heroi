const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const institution_id = request.headers.authorization;

        const cases = await connection('cases')
            .where('institution_id', institution_id)
            .select('*');

        return response.json(cases);
    }
};