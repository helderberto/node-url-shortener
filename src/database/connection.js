const mongoose = require('mongoose');

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-eolwa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

module.exports = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
