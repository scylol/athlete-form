const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require('dotenv').config();
const {DATABASE_URL, PORT} = process.env;
const {Athlete} = require('./models');

const app = express();
app.use(bodyParser.json());


app.get('/api/athletes',(req, res) => {
  Athlete
    .find()
    .then(athletes =>{
      return res.json(athletes.map(athlete => athlete.apiRepr()));
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: 'Something went wrong!!!'});
    });
});

app.post('/api/athletes', (req, res) => {
  Athlete
  .create({
    name:req.body.name,
    sport: req.body.sport,
    nationality: req.body.nationality,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    description: req.body.description,
    location: req.body.location,
    team: req.body.team,
    instagram: req.body.instagram,
    twitter: req.body.twitter, 
    facebook: req.body.facebook
  })
  .then(result => {
    res.status(201).json(result.apiRepr());
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: 'Something went wrong!!!'});
  });
});





// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

let server;
function runServer(databaseUrl=DATABASE_URL, port=PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
};
