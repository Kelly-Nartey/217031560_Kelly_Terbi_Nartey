const express = require('express');
const mongoose = require('mongoose');

// Mongodb connection setup
mongoose.connect('mongodb://localhost/goodhealthDb', { useNewUrlParser: true, useUnifiedTopology: true })
.then(results => { console.log('Database Live ..')})
.catch(error => { console.log(`Oops ${error.message} ...`)});

// Express app and port settings
const app = express();
const port = 3000 || proccess.env.PORT;

// application middleware configurations
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Defined paths to the various endpoint
app.use('/', require('./routes/'));

app.use('/material', require('./routes/material'));

app.use('/todo', require('./routes/todo'))

app.listen(port, ()=>{
    console.log(`Server started on port ${port} ...`)
});