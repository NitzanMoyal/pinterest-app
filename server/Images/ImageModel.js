const db = require('../db');
const { Schema } = require('mongoose');

const Image = new Schema({
  filename: {
    type: String,
    required: true
  },
  originalname: {
    type: String,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('Image', Image);