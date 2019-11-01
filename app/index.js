const express = require('express');

const logger = require('./lib/logger');
const fetchImage = require('./lib/fetch-image');

const app = express();

app.get('/', async function(request, response) {
  response.send('Hello, 世界');
});

app.get('/gifme/:gif', async function(request, response) {
  const { contentType, content } = await fetchImage(`https://bukk.it/${ request.params.gif }`);

  response.set('Content-Type', contentType)
  response.send(content);
});

const listener = app.listen(process.env.PORT || 8000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
