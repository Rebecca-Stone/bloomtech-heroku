const server = require('./api/server');

// that way the environment can be changed on heroku or default to 9000
const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`\n***Server up on ${PORT}*** \n`);
});