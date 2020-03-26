const express = require('express');
const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');




const routes = express.Router();


/*routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
})*/
routes.get('/ongs', OngController.index);

routes.get('/incidents', IncidentController.index);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;