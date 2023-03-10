const express = require('express');
const server = express();
const config = require('./config/config.json');
const bodyParser = require('body-parser');
const TestPort = '3001';

server.use('/', require('./modules/routes.js'));
server.use('/sick/', require('./modules/sick.js'));
server.set('view-engine', 'hbs');
server.use(express.static('./public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

process.on('uncaughtException', (e) => {
    console.log(e);
})

server.on('error', (e) => {
    console.log(e);
})

server.listen(TestPort, () => {
    console.log(`Server is currently running on Port: ${TestPort}`);
});
