const express = require('express');
const db = require('../../models/users');
const router = express.Router();
var bodyParser = require('body-parser');


var jsonParser = bodyParser.json();

// router.post('/login',jsonParser , db.login);
// router.get('/signup', db.signup);
// router.get('/preference', db.getUserPreference);


module.exports = router;