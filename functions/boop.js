// the way serverless functions work is:
// we need to tell the serverless function system how to deal with incoming requests.
// the way it does that is by calling a function called handler.
// we make it async becuase I don't want to have to fire a callback. I just want to be able to return a value.
exports.handler = async () => {
  return { statusCode: 200, body: 'Boop!' }
}
// so that's all a serverless function is: a handler that returns a status code and a body.
// by creating this, when we restart the server, there's a line in the console: Functions server is listening on 4663
// the eleventy site is running at http://localhost:8080
// and all of that gets bundled up into http://localhost:8888
// and this is the way that netlify works - and why it's such a powerful model
