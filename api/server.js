const express = require("express");
const cors = require('cors')
const server = express();
const carsRouter = require('./cars.js')



server.use(express.json());
server.use(cors())
server.get("/", (req, res) => {
    res.status(200).json({ server: "be working"})
});
server.use('/api/cars', carsRouter)




module.exports = server;