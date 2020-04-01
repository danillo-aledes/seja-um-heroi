const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const CaseController = require('./controllers/CaseController');
const InstitutionController = require('./controllers/InstitutionController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// LOGIn
routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        user: Joi.string().required(),
        password: Joi.string().required()
    })
}), SessionController.create);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// PROFILE
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// INSTITUTIONS
routes.get('/institutions', InstitutionController.index);

routes.post('/institutions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        user: Joi.string().required(),
        password: Joi.string().required(),
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(11).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), InstitutionController.create);

// routes.delete('/institutions/:id', celebrate({
//     [Segments.PARAMS]: Joi.object().keys({
//         id: Joi.number().required()
//     })
// }), InstitutionController.delete);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// CASES
routes.get('/cases', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), CaseController.index);

routes.post('/cases', celebrate(
    {
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required()
        }).unknown(),
        
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required()
        })
    }
), CaseController.create);

routes.delete('/cases/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), CaseController.delete);

module.exports = routes;