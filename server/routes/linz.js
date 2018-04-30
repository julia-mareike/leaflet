const express = require('express')

const getRuru = require('../apiClient').getRuru

const router = express.Router()

router.get('/', (req, res) => {
  getRuru()
    .then(response => {
      res.send(response.body.items[0].__geometry__.coordinates)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
