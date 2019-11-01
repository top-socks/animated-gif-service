const request = require('request').defaults({ encoding: null });
const { promisify } = require('util');

const get = promisify(request.get);

module.exports = async function fetchImage(url) {
  const { headers, body } = await get(url);
  const contentType = headers['content-type'];
  const content = Buffer.from(body);
  return { contentType, content, headers, body };
};
