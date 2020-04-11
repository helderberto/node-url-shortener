const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('morgan');
const compression = require('compression');
const routes = require('./routes');
const useMiddlewares = require('./utils/useMiddlewares');

/**
 * Load environment variables from .env file.
 */
dotenv.config({ path: '.env' });

/**
 * Import database config. and connect
 */
require('./database/connection');

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configs.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Express load middlewares
 */
useMiddlewares(
  cors(),
  express.urlencoded({ extended: false }),
  express.json(),
  logger('dev'),
  compression(),
  routes,
  express.static(path.join(__dirname, 'static')),
)(app);

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log(
    '🏁 Server is running on http://localhost:%s on %s mode',
    app.get('port'),
    app.get('env'),
  );
  console.log('Press CTRL-C to stop\n');
});

module.exports = app;
