const UrlModel = require('../models/UrlModel');

module.exports = {
  async index(req, res) {
    const urls = await UrlModel.find();

    return res.render('index', { urls });
  },

  async create(req, res) {
    const { fullUrl } = req.body;

    const foundUrl = await UrlModel.findOne({ full: fullUrl });

    if (foundUrl) {
      return res.redirect('/');
    }

    await UrlModel.create({ full: fullUrl });
    return res.redirect('/');
  },

  async show(req, res) {
    const { short } = req.params;

    const url = await UrlModel.findOne({ short });

    if (url === null) {
      return res.sendStatus(404);
    }

    url.clicks += 1;
    url.save();

    return res.redirect(url.full);
  },
};
