const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users/index');
const pins = require('./pins/index');
const server = express();
const cors = require('cors')

server.use(bodyParser.json());
server.use(cors());
server.use("/api/users/", users);
server.use("/api/pins/", pins);


//server.listen(9090);