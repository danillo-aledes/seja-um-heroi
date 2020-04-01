const connection = require('../database/connection');

module.exports = {
    async create (request, response) {
        const { user, password } = request.body;

        const inst = await connection('institutions')
            .where({
                user: user,
                password: password
            })
            .select('id', 'name')
            .first()

        if(!inst) {
            return response.status(400).json({ error: 'No INSTITUTION found with this USERNAME' });
        }

        return response.json(inst);
    }
};