const { json } = require('body-parser');
const express = require('express');
const app = express();
let PORT;

const { Endpoints: { FindLuggage } } = require('./api/endpoints');
const { MiddleWare } = require('./api/middleware');
const { Input: { takeInput } } = require('./api/input');

// config middleware
app.use(json());
app.use(MiddleWare.TimeEndpoint)

app.post('/findLuggage', FindLuggage);

app.on('ready', () => {
    app.listen(PORT || 8000, () => {
        console.log(`App started on port: ${PORT}`);
    });
});

(async () => {
    PORT = await takeInput();
    app.emit('ready');
})()






