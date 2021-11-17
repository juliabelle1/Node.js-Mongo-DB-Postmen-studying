const PORT = process.env.PORT || 9999;
const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();


const serverURI = 'http://localhost:' + PORT;
const mongoURI = process.env.MONGO_URI;

app.listen(PORT, () =>{
    console.log('Webserver:' + serverURI);
})

mongoose
.connect(mongoURI, () =>{
    console.log('Connected to DB');
})
