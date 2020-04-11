const routes = require('express').Router();

const HomeController = require('./controllers/HomeController');

routes.get('/', HomeController.index);

module.exports = routes;
