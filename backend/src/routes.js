const express = require('express');

const CaseController = require('./controllers/CaseController');
const InstitutionController = require('./controllers/InstitutionController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// LOGIn
routes.post('/sessions', SessionController.create);

// PROFILE
routes.get('/profile', ProfileController.index);

// INSTITUTIONS
routes.get('/institutions', InstitutionController.index);
routes.post('/institutions', InstitutionController.create);

// CASES
routes.get('/cases', CaseController.index);
routes.post('/cases', CaseController.create);
routes.delete('/cases/:id', CaseController.delete);

module.exports = routes;