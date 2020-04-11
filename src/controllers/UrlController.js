const UrlModel = require('../models/UrlModel');

module.exports = {
  async index(req, res) {
    const urls = await UrlModel.find();

    res.render('index', { urls });
  },

  async create(req, res) {
    const { fullUrl } = req.body;

    await UrlModel.create({ full: fullUrl });
    res.redirect('/');
  },
};
