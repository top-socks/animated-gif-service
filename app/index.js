const express = require('express');

const logger = require('./lib/logger');

const app = express();

app.get('/', async (request, response) => {
  response.send('Hello, 世界');
});

const listener = app.listen(process.env.PORT || 8000, process.env.HOST || '0.0.0.0', () => {
  logger.info(`Your app is listening on port ${listener.address().port}`);
});
