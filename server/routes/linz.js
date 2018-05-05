const express = require('express')

const getCoords = require('../apiClient').getCoords

const router = express.Router()

router.get('/', (req, res) => {
  getCoords()
    .then(response => {
      res.send(response.body.vectorQuery.layers[53382].features)
    })
    .catch(() => {
      res.sendStatus(500)
    })
})

module.exports = router
