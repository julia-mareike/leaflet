const express = require('express')

const getCoords = require('../apiClient').getCoords

const router = express.Router()

router.get('/', (req, res) => {
  getCoords()
    .then(response => {
      // res.send(response.body.items[0].__geometry__.coordinates) // ruru
      res.send(response.body.vectorQuery.layers[53382].features[0].geometry.coordinates) // vector
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
