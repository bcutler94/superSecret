const { json } = require('body-parser');
const express = require('express')
const app = express();
const PORT = process.env.PORT || 8000;
const { 
    Endpoints: { FindLuggage } 
} = require('./api/endpoints');

app.use(json());

app.post('/findLuggage', FindLuggage);

app.on('ready', () => {
    app.listen(PORT, () => {
        console.log(`App started on port: ${PORT}`);
    });
});

(() => {
    console.log('Getting ready to start server');
    app.emit('ready');
})();