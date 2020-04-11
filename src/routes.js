const routes = require('express').Router();

const UrlController = require('./controllers/UrlController');

routes.get('/', UrlController.index);
routes.post('/urls', UrlController.create);

module.exports = routes;
