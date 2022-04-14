const server = require('./api/server');

const PORT = 9000;

server.listen(PORT, () => {
    console.log(`\n***Server up on ${PORT}*** \n`);
});
