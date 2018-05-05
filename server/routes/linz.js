const express = require('express')

const getCoords = require('../apiClient').getCoords

const router = express.Router()

router.get('/', (req, res) => {
  getCoords()
    .then(response => {
      // res.send(response.body.items[0].__geometry__.coordinates) // ruru
      res.send(response.body.vectorQuery.layers[53382].features[1].geometry.coordinates) // vector
    })
    .catch(() => {
      res.sendStatus(500)
    })
})

module.exports = router
