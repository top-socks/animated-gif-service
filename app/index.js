const express = require('express');

const logger = require('./lib/logger');
const fetchImage = require('./lib/fetch-image');

const app = express();

app.get('/', async (request, response) => {
  response.send('Hello, 世界');
});

app.get('/gifme/:gif', async (request, response) => {
  const { contentType, content } = await fetchImage(`https://bukk.it/${request.params.gif}`);

  response.set('Content-Type', contentType);
  response.send(content);
});

const listener = app.listen(process.env.PORT || 8000, process.env.HOST || '0.0.0.0', () => {
  logger.info(`Your app is listening on port ${listener.address().port}`);
});
