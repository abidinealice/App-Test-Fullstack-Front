const express = require('express');

require('dotenv').config();
const name = process.env.DB_NAME;
const password = process.env.DB_PASSWORD;

const mongoose = require('mongoose');

const app = express();

const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://' + name + ':' + password +'@test-fsfe-alf.itiws.mongodb.net/?retryWrites=true&w=majority&appName=test-fsfe-alf',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/auth', userRoutes);

module.exports = app;