const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const { page = 1 } = request.query;

        const  [ count ] = await connection('cases').count();

        const cases = await connection('cases')
            .join('institutions', 'institutions.id', '=', 'cases.institution_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['cases.*',
                'institutions.name',
                'institutions.email',
                'institutions.whatsapp',
                'institutions.city',
                'institutions.uf'
        ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(cases);
    },

    async create (request, response) {
        const { title, description, value } = request.body;
        const institution_id = request.headers.authorization;

        const [id] = await connection('cases').insert({
            title,
            description,
            value,
            institution_id
        });

        return response.json({ id });
    },

    async delete (request, response) {
        const { id } = request.params;
        const institution_id = request.headers.authorization;

        const caso = await connection('cases')
            .where('id', id)
            .select('institution_id')
            .first();

        if (caso.institution_id !== institution_id) {
            return response.status(401).json({ erro: 'Operation not permitted'});
        }

        await connection('cases').where('id', id).delete();

        return response.status(204).send();
    }
};