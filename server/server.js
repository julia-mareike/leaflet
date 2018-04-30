const path = require('path')
const express = require('express')

const linzRoutes = require('./routes/linz')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/linz', linzRoutes)

module.exports = server
