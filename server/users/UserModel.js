const db = require('../db');
const { Schema } = require('mongoose');

const userSchema = new db.Schema({
    name: String,
    lastName: String,
    email: String
});

const User = db.model('User', userSchema);

module.exports = User;
