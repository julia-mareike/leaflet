const express = require('express')

const getRuru = require('../apiClient').getRuru

const router = express.Router()

router.get('/', (req, res) => {
  getRuru()
    .then(response => {
      res.send(response.body.items[0].__geometry__.coordinates)
    })
    .catch(() => {
      res.sendStatus(500)
    })
})

module.exports = router
