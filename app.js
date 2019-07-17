// Server environment libraries
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser'),
cors = require('cors');

// MongoDB Database
const mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Getting Email model
const Email = require('./Email')


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// REST API

app.get('/', function(req, res) {
  res.send('happy to be here');
});

// get all the emails  
app.get('/email', function(req, res) {
  console.log('getting all emails');
  Email.find({})
  .exec(function(err, emails) {
    if(err) {
      res.send('error occured')
    } else {
      console.log(emails);
      res.json(emails);
    }
  });
});


// add a new email to database
app.post('/email', function(req, res) {    
  Email.create(req.body, function(err, email) {
    
    if(err) {
      res.send('error saving email');
    } else {
      let newEmail = {...email._doc, 'received': true}
      console.log(newEmail);
      res.send(newEmail);
    }
  });
});

// run server
app.listen(8080, ()=> {
  console.log('Server running at http://127.0.0.1:8080');
})
