const mongoose = require('mongoose');

const DB_URL= 'mongodb://admin:qwer1234@ds123603.mlab.com:23603/pinterest-db'
//const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/pinterest-DB'
//let DB_URL = 'mongodb://localhost:27017/pinterest-DB';
mongoose.connect(DB_URL);


module.exports = mongoose;